/* 
Http = Hypertext Transfer Protocol



*/


// function request(url, options, cb) {
//     return new ClientRequest(url, options, cb);
//   }

// const { request } = require('node:http')



const http = require('node:http')

const server = http.createServer((request,response)=>{
    console.log(request)
response.writeHead(200,{'Content-Type':"text/plain"})
response.end("hello world")
})



server.listen(3000,()=>{
    console.log(`server run at 3000`)
})