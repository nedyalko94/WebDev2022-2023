// import module

const fs = require('fs')

//read file

//  fs.write // write
//  fs.read  // read
//  fs.rm   //delete
//  fs.rmdir  //delete directory 

//  'utf8' it's format   //  we can convert to string 
//  fs.readFile('./test.txt'  ,'utf-8', (err ,data)=>{
//     let binaryData = ''

//     // for (let i =0; i <data.length; i ++ )   
//     console.log(data.toString()) // convert buffer to string  
//     console.log(data.split(",")) 
//     data.split(',').forEach(name=> console.log(name))

//  }
//  )



//read a directory 

//  fs.readdir('./',(err,data)=> {
//     // console.log(data)
//  let dirlist =data.filter(filename=> filename .includes('.jpg'))
// console.log(dirlist)

//  })


// fs.readdir('./' , (err,data)=>{
//     console.log(data)
//     let TxtFiles = data .filter( file=> file.includes('txt'))
//     // console.log(TxtFiles)
//     // fs.readFile(TxtFiles[0],'utf-8' , (err,data)=>{
//     //     console.log(data)
//     // })
//     TxtFiles.forEach(txt => {
//         fs.readFile(txt,'utf-8' , (err,data)=>{
//             console.log(data,txt)
//         })
//     })
// })



// fs.readdir('./' , (err,data)=>{
//     console.log(data)
//     let TxtFiles = data .filter( file=> file.includes('txt'))
//     // console.log(TxtFiles)
//     // fs.readFile(TxtFiles[0],'utf-8' , (err,data)=>{
//     //     console.log(data)
//     // })
//     TxtFiles.forEach(txt => {
//         fs.readFile(txt,'utf-8' , (err,data)=>{
//             console.log(data,txt)
//         })
//     })
// })



// more  dinam... wrap it in function 














//write file  

// this is creating and updating 
// can't create folder 

// fs.writeFile('readme.txt','node.js,this is change and ', (err)=>{
//     console.log('file is created')
// })


// fs.writeFile('./public/readme.txt','read me file test', ( err)=>{ console.log('create directory is not possible ')})



//append file 
// fs.appendFile('readme.txt','extra string append', (err)=>{
//     console.log('file is appended ')
// })



// fs.appendFile('users.json','5', (err)=>{
//     console.log('append')
// } )
// in to array // problem


//better way


// fs.readFile('users.json','utf-8',(err,data)=>{
//     let users = JSON.parse(data) // from string to array
//     console.log(users,'before')
//     users.push(5)
//     console.log(users,'after')
//     fs.writeFile('users.json',JSON.stringify(users),(err)=>{
//         console.log('file upp')
//     })
// })




function AppendDataIntoFile (filename,NewValue){
    fs.readFile(filename, 'utf-8', (err,data)=>{
        if(data!==undefined){
            let arr = JSON.parse(data) // parse string into arr
              arr.push(NewValue)
            fs.writeFile(filename,JSON.stringify(arr),(err)=>
            console.log('file is appended / updated '))
            console.log(data)
            
        }
        else if (filename !==undefined){
        
        // update file here
        fs.writeFile(filename,'[]',(err)=>console.log('file is create here '))
        AppendDataIntoFile (filename,NewValue)
    }
    })

}


AppendDataIntoFile('post.json','20')


// const http = require('http')
// const server = http.createServer((req, res) => {
//     res.writeHead(200, { 'Content-Type': 'text/html' })
//     if (req.url === "/") {
//         fs.readFile('index.html', 'utf-8', (err, homepage) => {
//             res.write(homepage)
//             res.end()
//         })


//     }
//     else if (req.url === '/login') {
//         res.write('login')
//         res.end()
//     }
//     fs.readFile('login.html','utf-8',(err,login)=>{
//         res.write('hello')
//         res.end()
//     })
    
//     // console.log(req.url)
    
// })
// server.listen(8000, () => console.log('server is running '))
