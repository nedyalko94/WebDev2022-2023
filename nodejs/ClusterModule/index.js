

/*Cluster Module

    Node is single threaded 
        No matter how many cores you have , node only uses a single core of your CPU
        This is fine for I/O operation but if the code has long running and CPU
        intensive operation, your app might struggle from a performance point of view




Cluster module enables the creation of child processes (also called workers)
that run simultaneously

All created workers share the same server port


    Cluster Master
            /\
    Worker-1 Worker-2

    Master is only in charge of the workers 
    Workers are in charge of handling incoming
    request reading files etc

    Each worker gets its own Event Loop , memory and V8 instance 




*/


// No Cluster 

const http = require("node:http")


const server = http.createServer((req,res)=>{
    if(req.url ==="/"){
        res.writeHead(200,{"Content-Type":"text/plain"})
        res.end("Home page")
    }else if ( req.url ==="/slow-page"){
        for(let i = 0 ; i< 99999999; i++){}// simulate cpu work
        res.writeHead(200,{"Content-Type":"text/plain"})
        res.end("Slow Page")
    }
})

server.listen(8000,()=>{ 
    console.log("server is running at 8000")
})

  