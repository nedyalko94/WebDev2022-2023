
const http = require("node:http")


const server = http.createServer((req,res)=>{
    if(req.url ==="/"){
        res.writeHead(200,{"Content-Type":"text/plain"})
        res.end("Home page")
    }else if ( req.url ==="/slow-page"){

        let j = 0
        for(let i = 0 ; i< 9999999999; i++){
            j++
        }// simulate CPU work
            res.writeHead(200,{"Content-Type":"text/plain"})
            res.end(`Slow Page j is : ${j}`)
    }
}) 

server.listen(8000,()=>{ 
    console.log("server is running at 8000")
})