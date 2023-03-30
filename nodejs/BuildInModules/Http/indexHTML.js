
const fs = require('node:fs')

const http = require('node:http')

const server = http.createServer((request,response)=>{
    response.writeHead(200,{'Content-Type':"text/html"})

    // const html = fs.readFileSync('./index.html','utf-8') // reading the html file and send it but if is huge is not good better with stream
    // response.end("<h1>hello world !</h1>") // sending directly htm elements
    // response.end(html)

    fs.createReadStream(__dirname+'/index.html').pipe(response)
})



server.listen(3000,()=>{
    console.log(`server run at 3000`)
})   