

const cluster  = require("node:cluster")


//to check how many worker we can create 
const OS = require("node:os")


if(cluster.isMaster){
    console.log(` How many worker can be created ? CPU Cores : ${OS.cpus().length}`)

    console.log(`Master process ${process.pid} is running`)
    // as master we need to create new worker
    cluster.fork()
    cluster.fork()
    // at least min 2  otherwise is pointless
}else{
    console.log(`Worker  ${process.pid} is started`)
    const http = require("node:http")

    const server = http.createServer((req,res)=>{
        if(req.url ==="/"){
            res.writeHead(200,{"Content-Type":"text/plain"})
            res.end("Home page")
        }else if ( req.url ==="/slow-page"){
            for(let i = 0 ; i< 99999999; i++){}// simulate CPU work
            res.writeHead(200,{"Content-Type":"text/plain"})
            res.end("Slow Page")
        }
    }) 
    
    server.listen(8000,()=>{ 
        console.log("server is running at 8000")
    })

}

// Wy shouldn't we simply create a large number of workers using cluster.fork() ?
/*
We should ony create as many workers as there are CPU cores on the Machine the app is running

if you create more workers than there are logical cores on the computer it can cause an overhead as the system will have to schedule
all the created workers with fewer number of core 

so will not be helpful but harm full


there is another way by running package as master  which decide how many worker(cluster.fork()) to run 

pm2 

 npm install -g pm2

 to start it  use 

 pm2 start index.js -i 0

 for stop 
  
pm2 stop index.js

*/
