 // import multer
// npm i multer
 const express = require("express")
 const cors = require("cors")
 const multer = require("multer")
const { application } = require("express")

 // srv
 const server = express()
 //multer config

 const storage =multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'./storage')
     
    },
    filename:(req,file,cb)=>cb(null,file.originalname)
 })

const uploader = multer({storage,
fileFilter:(req,file,callback)=>{
    // console.log(file.mimetype)
    let extensions = "/jpg|jpeg|png|gif/"
    const format2= ['image/gif','image/jpeg','image/png','image/jpg']
    let isValidImg = format2.filter((img)=> img ===file.mimetype)
    
    // burp suit program for security 



    // if(file.mimetype == format) // we can add multy condition 
    // we can add multy condition 
    if(isValidImg.length>0 && extensions.match(file.originalname.split(".")[1])!==null)
        {
        callback(null,true)
    }
    else{
        callback(new Error("not allowed"))
    }


}})


 // use middelwares
server.use(cors())
server.use(express.json())

server.use('/storage',express.static("./storage"))
//http://localhost:5000/storage/bg.png

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

 server.listen(5000,()=>{
    console.log('srv started')})
    