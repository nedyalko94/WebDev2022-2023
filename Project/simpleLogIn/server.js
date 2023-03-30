const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const passport = require('passport')
const passportLocal = require('passport-local')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const bodyParser = require('body-parser')
const User = require('./UserSchema')
const bcryptjs = require('bcryptjs')
require('./passport')(passport)


// const { session } = require('passport')
mongoose.connect("mongodb://localhost:27017/newtest"
,{
    useNewUrlParser: true,
    useUnifiedTopology:true,


}
,
()=>{
    console.log('db is connected')
})

const app = express()

// middleware
app.use(cors({
    origin:'http://localhost:3000',
    credentials:true 
}))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true})) 



app.use(session({
    secret:'secret key',
    resave:true,
    saveUninitialized:true,

}))

app.use(cookieParser('secret key'))
app.use(passport.initialize())
app.use(passport.session())
// require('./passport')(passport)
// ---------------------------------------------------------------------------------------------------------------
// router
app.post('/login',  (req,res,next) =>{
  console.log(req.body)
  passport.authenticate('local',(err,user,info)=>{
    
    if (err) throw err
    if (!user) res.send('  user don\'t exist  ')
    else {
         req.logIn(user,(err)=>{
            if (err) throw err  
           
                res.send('successfully auth') 
                console.log(req.user,res.user)
        

         })
    } 
  })(req,res,next)
}) 
 
app.post('/register', function (req, res) {
    console.log(req.body)
    User.findOne({username:req.body.username},async(err,user)=>{
        if (err) throw err
        if (!user) {
            const hashPasword = await bcryptjs.hash(req.body.password,10)
            let newUser = new User({ 
                username:req.body.username,
                password:hashPasword
            })

            await  newUser.save()
            res.send('user register') 
        }
        else {res.json({msg:"already exist "})}
    })
  })

  app.get('/user', function (req, res) {  
    res.send(req.user)
  })






//https://www.youtube.com/watch?v=IUw_TgRhTBE&list=WL&index=4&t=469s






 
const port = 3001

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))