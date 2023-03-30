// // http module
// const https = require('http')
// const fetch = require('node-fetch')


// // create server

// https.createServer(function(request,response){
//     response.writeHead( 200,{'Content-type':'text/html'}
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then(res=>res.json())
//     .then(data=> {
//         console.log(data.name)
//         res.write(`<h1>${data.name}</h1>`)
//     })
//  )
    
//     ) // for adding in response html
//         // response.write( 
//             // '<h1>hello Node.js this is response for client <h1> '
           
          

//     response.end()
// } ).listen(6969,()=>{
//     console.log('server is runing port number is 6969 dev msg in nodemon')
// })

// listen take 2 parametre port and msg

// req in  bash curl http://localhost:8080/

const http = require('http')

const fetch =require('node-fetch')



// create server



http.createServer(function(req,res){

    // console.log(req)

    res.writeHead(200, {'Content-Type': 'text/html'})

    fetch('https://jsonplaceholder.typicode.com/users/1')

    .then(res=>res.json())

    .then(data=>{
        if(req.rawHeaders[3].includes('curl')){
            res.write(data.name )
        }
        else{
             res.write(`<h1>${data.name}</h1>`)
        }
        res.end()

        
    //    console.log(req.rawHeaders[3])

        // res.write(`<h1>${data.name}</h1>`)

        // res.end()

    })

    // res.write(`

    // <h1>Hello</h1>

    // <script>console.log('hello')</script>

   

    // `)

    // res.end()

}).listen(8080,()=>{

        console.log('server is runnig.... Port number is 8080')

}).on('connection',(socket)=>{
    socket.on('data',function(data){
        console.log(data)
    })
    console.log('new connection')

})