const fs = require('node:fs')

const http = require('node:http')

const server = http.createServer((request,response)=>{

    const name = "Nedyalko";

    response.writeHead(200,{'Content-Type':"text/html"})

    let html = fs.readFileSync('./index.html','utf-8') // reading the html file and send it 

    // html = html.replace("{{name}}",name) // replace for single  "{{name}}" with name


   html = html.replaceAll("{{name}}",name) // replaceAll for all value  "{{name}}" with name


    response.end(html) 

})  



server.listen(3000,()=>{
    console.log(`server run at 3000`)
})   