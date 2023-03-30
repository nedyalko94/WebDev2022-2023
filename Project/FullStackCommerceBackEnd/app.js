const express = require("express");
require("dotenv"); // import env
require("dotenv").config(); // config env // import express
const mongoose = require("mongoose"); // import db
const cors = require("cors"); // import cors  for middleware
const passport = require('passport');
const passportLocal = require('passport-local')
const cookieParser = require('cookie-parser')
const session = require('express-session');
const bodyParser = require('body-parser')
const connectDB = require("./Config/db");
const ProductRoutes = require("./Routes/ProductRoutes");
const UserRouter = require("./Routes/UserRoutes");
const GeneralRoute = require('./Routes/GeneralRoute')
require("./Config/passport")(passport)

const { createServer } = require("http") 
// const { Server } = require("socket.io");

const app = express(); //start app

const httpServer = createServer(app)

// const io = new Server (httpServer, { cors:{
//   origin:'http://localhost:3000',
//   credentials:true 
// } }) 


// io.on("connection", (socket) => {
// console.log('someone has connect')
// socket.on('disconnect',()=>{
//   console.log('someone has left')
// })
// });
 

// const flash = require('connect-flash')
//---------connection ----------------------------------
connectDB();

// passport config 
// require()
//------------------------------middleware------------------------
// cors({
//   origin: 'http://localhost:3006',
//   credentials: true,
//   // Access-Control-Allow-Origin: "http://localhost:3006"

//   // allowed access 
//   // origin:"http://yourdns.com" 
// })

app.use(cors({
  origin:'http://localhost:3000',
  credentials:true  
}))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// app.set("trust proxy", 1);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({
  secret: 'secret key',
  resave: true,
  saveUninitialized: true,
  // cookie: { secure: true,  maxAge:60000  }  // expire:60*60*24 1 day should not be use 

}))

  //------------------------------------------
  // -----------https://stackoverflow.com/questions/66503751/cross-domain-session-cookie-express-api-on-heroku-react-app-on-netlify
  // cookie: { secure: true,  expire:60*60*24 }  //1 day 

 // -----------https://stackoverflow.com/questions/66503751/cross-domain-session-cookie-express-api-on-heroku-react-app-on-netlify
app.use(cookieParser('secret key'))
app.use(passport.initialize())
app.use(passport.session()) 

// app.use('/storage', express.static("./storage"))
// use to be need it for multer but .... 
// express static allow us to use static date like picture or document


// https://stackoverflow.com/questions/71969708/how-does-passport-js-check-cookies
// https://stackoverflow.com/questions/44882535/warning-connect-session-memorystore-is-not-designed-for-a-production-environm
//https://www.npmjs.com/package/connect-mongo


//bodyParser

// Express Session 



// connect flash
// app.use(flash())

// global var for def color message

// app.use((req,res,next)=>{
//   res.locals.success_msg= req.flash('success_msg')
//   res.locals.error_msg= req.flash('error_msg')
//   res.locals.error= req.flash('error')
//   next()
// })
// maybe don't need it 
 
// need to be under express session
//passport middleware 



// ----------------------------------------------- Route--------------------------
app.use("/Product", ProductRoutes);

app.use("/Users", UserRouter);
app.use("/", GeneralRoute);  



// import env variables for port
let port = process.env.PORT || 8080; 

//start server at port ...
httpServer.listen(port, () => console.log(`is running at ${port} `));


