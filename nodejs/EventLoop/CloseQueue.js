/*



*/


const fs = require("node:fs")

const readableStream = fs.createReadStream(__dirname)
readableStream.close()

readableStream.on("close",()=>{
    console.log("this is from readableStream close event Callback")
})

setImmediate(()=>{
    console.log("This is setImmediate 1")
})

setTimeout(()=>{
    console.log("This is setTimeout 1")
},0)

Promise.resolve().then(()=>{
    console.log("This is Promise.resolve 1")
})

process.nextTick(()=>{
    console.log("This is nextTick 1")
})