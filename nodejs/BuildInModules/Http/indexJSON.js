const http = require('node:http')


const superHero = {
    name:"Bruce"
}

const server = http.createServer((request,response)=>{
response.writeHead(200,{'Content-Type':"application/json"})
response.end(JSON.stringify(superHero))
})



 






const port = 3001 || 8080

server.listen(port,()=>{
    console.log(`server run at ${port}`)
})