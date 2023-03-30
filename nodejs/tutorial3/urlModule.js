var url = require('url')

//https://www.w3schools.com/nodejs/nodejs_url.asp


let parsedUrl = url.parse('http://localhost:3000/?name=Joe&age=20',true)

// console.log(parsedUrl)
console.log(parsedUrl.query.age)
console.log(parsedUrl.query.name)

//$  node urlModule.js 

// use for validation rest api  and others ... 




// __dirname

console.log(__dirname)



//__filename

console.log(__filename)

// path module


var path = require('path')
const { writeFile } = require('fs')
const { dirname } = require('path')

console.log( path.basename(__filename))

// return last part of the path  in this case file name 


console.log( path.dirname(__dirname))
console.log( path.basename(__dirname)) // exlude folder and file name 


console.log(path.join('/company','tool.js') )
console.log(path.join('/company',__filename) ) 

// making new path


writeFile(path.join('/company','./tool.txt'),'hello',(err)=>{
    console.log('file is create ')
})




// path name can be use for set up directory 


// console((path.join(__dirname,'/downloaded')))

console.log(path.win32)


// https://www.mongodb.com/try/download/community

// https://www.mongodb.com/try/download/community
