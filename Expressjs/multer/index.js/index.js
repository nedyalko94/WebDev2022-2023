 // import multer

 const express = require("express")
 const cors = require("cors")
 const multer = require("multer")

 // srv
 const server = express()
 //multer config

 const storage =multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'./uploads')
     
    },
    filename:(req,file,cb)=>cb(null,file.originalname)
 })

const uploader = multer({storage})


 // use middelwares
server.use(cors())
server.use(express.json())

server.get('/',(req,res)=>{

    res.json({
        msg: 'welcome'
    })
})

server.post('/',uploader.single('document'),(request,response)=>{
    console.log(request.file.path)// display path file location 
    response.json({
        msg:'ok'
    })
})



 // port number 

 server.listen(4000,()=>{
    console.log('srv started')})
    