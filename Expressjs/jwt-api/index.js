// import modules

const express = require("express");
const app = express();
const cors = require("cors");
const jwt = require("jsonwebtoken");
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
  },
});
require("dotenv").config();
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
  //make obj from User model
  const new_user = new User(req.body);

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
    if(user[0].password ===password){
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

app.listen(3000, () => {
  console.log("server is running at 3000");
});
