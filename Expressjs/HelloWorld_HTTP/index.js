
//npm init -y
//npm install express --save

// in package.json 
// "dev": "nodemon index.js",
// "start": "node index.js"


//$ npm run start

// import express module
const express = require('express')
const server = express()
const bodyParser = require('body-parser')
const { response } = require('express')

// use bodyParser middleware
server.use(bodyParser({
    extended:true
}))


// homepage http get request / response endpoint 
server.get('/',(request,response)=>{
    console.log(request.query)


//send from insomnia get http://localhost:8080?username=admin&passward=123
// and you will get response from the request in console log 

// console.log(request.query) // response with url  queries

// password should not be in url is insecure 
// how to handle 
// we should send password in body with json

response.json(request.query)

      // display html
    //response.send('Hello World')
    // display json
    // response.json({
    //     id:1,
    //     username:'admin'
    // })
    //response.json([{id:1},{id:2}])
    
    console.log(request.body)
    response.json(request.query) // response with url queries
    
    // http://localhost:8080?username=admin&password=123
})


// params
server.get('/:id',(request,response)=>{
    console.log(request.params)
    response.json({id:1,paramResult:request.params})
})

//post hhtp request
// post http request
server.post('/',(req,res)=>{
    console.log(req.body)
    res.json({
    username:req.body.username,
    password:req.body.password
    })
})
server.listen(8080,()=>{ // set port number
    console.log('server is running on 8080')
})




