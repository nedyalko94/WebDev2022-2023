/*
NODE JS

js library 

c/c++ feature
                dependency
V8 libuv ,zlib crypto,etc


    libuv - is a cross platform open source library written in C ++
        why 
            handle async non-blocking operations in node.js
        How ?
            tread pool /4 thread/
                main thread     libuv
                        ->      thread pool
                        <-


            event loop



*/

// const fs = require("node:fs")

// console.log('first')

// fs.readFile('./file.txt',"utf-8",(err,data)=>{
//     console.log("file content")
// })

// console.log("last")



const crypto = require('node:crypto')

const start = Date.now()



process.env.UV_THREADPOOL_SIZE = 5 
// should this increase libuv thread poop from 4 default 
// actual real cpu core have effect on this as well increasing the thread pool more than cpu core increase the time as well   

const MAX_CALL = 5  
 
// password base key derivation function 2 
// for password hashing

for(let i = 0; i<MAX_CALL; i ++){
    
crypto.pbkdf2("password","salt",100000,512,"sha512",()=>{
console.log(`Hash: ${i+1}`,Date.now() - start)
})
} 
// run in the same time in libuv multi tread 



// every method with sync run on main thread 

// crypto.pbkdf2Sync("password","salt",100000,512,"sha512")
// crypto.pbkdf2Sync("password","salt",100000,512,"sha512")
// crypto.pbkdf2Sync("password","salt",100000,512,"sha512")
//every call wait for previous



console.log("Hash:",Date.now() -start)


 