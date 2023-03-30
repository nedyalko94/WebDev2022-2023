// import modules

const express = require("express");
const app = express();
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt= require('bcryptjs') // bcrypt 
require("dotenv").config();
// import mongoose
const mongoose = require("mongoose");
//user schema
const userSchema = mongoose.Schema({
  username: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
    match:/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/,
    minlength:5
    // min:[8,'password is too short'],
    // max:[20,'password is too long ']
  },
});

app.use(express.json());
app.use(cors()); // allow request from any source
//connect
mongoose.connect(process.env.DB_URI, () => {
  console.log("DB connected");
});

//compile  schema to model
const User = mongoose.model("users", userSchema);

// use middlewares

app.get("/", (req, res) => {
  res.send("welcome to protected restful api ");
});

//registration  endpoint
app.post("/register", (req, res) => {
  console.log(req.body);
  var {password}=req.body
  if(password.length < 8  ) {
    res.status(400).send('password must be at least 8 character and not include special char')
    
    // throw new Error('Password must be at least 8 characters long');
   
///////////////////////////////////////////// need more work for verification and validation

    }
  //make obj from User model
  else{
    // password.includes('as')?res.status(400).send('password include as'):'password must include a-z'

   password = bcrypt.hashSync(req.body.password,10) // password is encrypt here with hash
 
  const new_user = new User({
    username:req.body.username,
    password:password
  });
  

  new_user
    .save()
    .then((user) => {
      res.json({
        msg: "User created ",
        data: user,
      });
    })

    .catch((err) => {
      if (err) {
        res.status(403).send("try with another username");
      }
    });

  // option 2
  // User.create({
  //     username:req.body.username,
  //     password:req.body.password
  // })
}
});

// app.post("/login", (req, res) => {
//   const { username } = req.body;
  // algorithm expiresIn are optional but always good to have it
//   jwt.sign(
//     { username },
//     process.env.JWT_KEY,
//     {
//       algorithm: "HS256",
//       expiresIn: "200s",
//     },
//     (err, token) => {
//       res.json({
//         payload: req.body,
//         token: token,
//       });
//     }
//   );
// });
// 3 way to take token from head query // from head // and from bearer
// middleware  for verification  isTokenValid middleware function

//login 1 step  find username exist ? 
app.post("/login", (req, res) => {
    const { username,password } = req.body;
   
    
User.find({username:username})
.then(user =>{
    console.log(user.length)
if(user.length>0){
    // user is exist 
    let isPassCorrect = bcrypt.compareSync(password,user[0].password) // compare 2 password with bcrypt and return boolean true or false 
    if(isPassCorrect){
        console.log('correct password')
        jwt.sign({username:username}, process.env.JWT_KEY,(err,token)=>{
            res.json({
                msg:'user logged in ',
                token:token
            })
        })
        
    }
    else{
        res.json({ msg:'password or username is incorrect'})
    }
}
else{
    res.json({
        msg:'username or password is incorrect'
    })
}
})
})

//token from head

const isTokenValid = (req, res, next) => {
  console.log(req.headers["authorization"]);
  const token = req.headers["authorization"];
  jwt.verify(token, process.env.JWT_KEY, (err, decoded) => {
    if (!err) {
      req.user = decoded;
      next();
    } else {
      res.status(403).send("Forbidden key expire ");
    }
  });
};

// // retrieve token as bearer

const isTokenExist1 = (req, res, next) => {
  console.log(req.headers["authorization"].split(" ")[1]);
  const token = req.headers["authorization"].split(" ")[1];

  jwt.verify(token, process.env.JWT_KEY,(err, decoded) => {
    // console.log(decoded);

    if (decoded !== undefined) {
      // http 200 success response
      req.user = decoded;
      console.log(decoded);
      next();
    } else {
      res.status(403).send("Forbidden");
    }
  });
};

// token from url query

const isTokenExist = (req, res, next) => {
  console.log(req.query);
  const token = req.query.apiKey;
  jwt.verify(token, process.env.JWT_KEY, (err, decoded) => {
    if (decoded !== undefined) {
      req.user = decoded;
      next();
    } else {
      // forbidden
      res.status(403).send("Forbidden");
    }
  });
};

// another end point to protect it

app.get("/profile", isTokenExist, (req, res) => {
  res.json({
    id: 1,
    username: "admin",
    followers: 100,
  });
});

// POST http://localhost:3000/login  with login get token  eyJhbGciOiJIUzI1NiIsI
// and give to header token then  GET to http://localhost:3000/profile and after while will expire

//set listener port number
 const port =  3000 || process.env.PORT 
app.listen(port, () => {
  console.log(`server is running at ${port}`);
});
