// npm i express --save
//npm i dotenv 
// import express 

const express= require("express")
const app = express()

// import env variables
require('dotenv').config()

// import body-parser
const bodyParser = require('body-parser')
app.use(bodyParser({extended:true}))

// middleware
//between

function isUserLogged(req,res,next){
const {username} = req.query
if(username !=="admin"){
    res.status(401).send('fail')
   
        

           //http://localhost:8080/?username=asd

}
else{
    next()
}
//next allow to continue
//http://localhost:8080/?username=admin

}

// check if token exist 
 function isTokenExist(req,res,next){
        // console.log(req.headers.autorization.split(' ')[1])
        console.log(req.headers['x-access-token'])
        next()
 }
//get request
app.get('/',isTokenExist,(req,res)=>{
    res.json({ id:1 ,tittle:'hello world ', body:"lorem"

    })
})

// post req

app.post('/',isUserLogged,(req,res)=>{
    // mongo should save req body here 
     const { id,tittle,body}=req.body
     res.json({
        id,
        tittle,
        body
     })
})

// PUT  request 
//http://localhost:8080/?id=2 you need query 

app.put('/',(req,res)=>{
    const {id} = req.query
    const {title,body}= req.body
    res.json({
        title,
        body,
        message:`${id} is updated`
    })
})

//delete request

app.delete('/',(req,res)=>{
    //id or username
    // from link
    const {id} = req.query
    // from body / json file 
    const {_id}= req.body
   
    res.json({
        message: `${id} deleted  i  ${_id} deleted `
    })
})



//set lisening port
app.listen(process.env.PORT,()=>{
    console.log(`server is lisening on ${process.env.PORT}`)
})





