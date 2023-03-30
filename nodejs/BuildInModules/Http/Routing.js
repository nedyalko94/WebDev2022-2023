const fs = require('node:fs')

const http = require('node:http')

const server = http.createServer((req,res)=>{
    // req.url give us query string url witch can be use to make routing with switch or if else
//    res.end(req.url)
// req.method give us access to GET POST PUT DELETE

   if(req.url ==='/'){
    res.writeHead(200,{'Content-Type':'text/plain'})
    res.end("Home Page ")

   }else if(req.url ==='/about'){
    res.writeHead(200,{'Content-Type':'text/plain'})
    res.end("About Page ")

   }else if(req.url ==='/api'){
    res.writeHead(200,{'Content-Type':'application/json'})
    const jsonData={
        name:"Json Response"
    }
    res.end(JSON.stringify(jsonData))
   }else{
    res.writeHead(404)
    res.end("Page not Found")
   }
  
})  



server.listen(3000,()=>{
    console.log(`server run at 3000`)
}) 