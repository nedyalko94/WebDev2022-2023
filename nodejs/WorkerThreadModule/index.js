

const http = require("node:http")

const {Worker} = require("node:worker_threads")

const server = http.createServer((req,res)=>{
    if(req.url ==="/"){
        res.writeHead(200,{"Content-Type":"text/plain"})
        res.end("Home page")
    }else if ( req.url ==="/slow-page"){
        const worker = new Worker('./worker-thread.js') // making new worker and pas a path
        
        worker.on('message',(j)=>{                      // listening for response for j 
            res.writeHead(200,{"Content-Type":"text/plain"})
            res.end(`Slow Page j is : ${j}`)
        })
      
    }
}) 

server.listen(8000,()=>{ 
    console.log("server is running at 8000")
})


// without worker slow-page slow both page/ route  

// is like multi thread for the different route 