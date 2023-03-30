const fs = require('node:fs')

console.log("first")
 const fileContent=fs.readFileSync('./file.txt','utf-8') // first patch second is encoding

 // reading file sync

console.log(fileContent)

console.log("second")

// async
fs.readFile('./file.txt','utf-8',(error,data)=>{
    if(error) console.log(error)
    else{
        console.log(data)
    }

}) 
console.log("third")


// Write in the File // overwrite

fs.writeFileSync('./greet.txt',"Hello World")



fs.writeFile('./greet.txt',"hello Ned ",(err)=>{
    if (err){
        console.log(err)
    }else{
        console.log("Write in file successful")
    }
}) 


// write in file with Append 

fs.writeFile('./greet.txt',"hello Maria ",{flag:"a"},(err)=>{ // {flag:"a"} option for append to not overwrite 
    if (err){
        console.log(err)
    }else{
        console.log("Append in file successful")
    }
})   

  