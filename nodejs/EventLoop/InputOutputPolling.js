/*


To queue a callback function into the check queue , we can use a function 
called setImmediate



I/O queue
    I/O event are polled and callback functions are added to the I/O queue only after the I/O is complete


*/



const fs = require('node:fs')

fs.readFile(__filename,()=>{
    console.log("This is readFile 1")
})

Promise.resolve().then(()=>{ console.log("This is Promise.resolve 1")})

setTimeout(()=>{console.log("this is setTimeout 1")},0) 

process.nextTick(()=>{ console.log("This is next tick 1")})

// execute before the I/O because on the time of first visit I/O is not completed
setImmediate(()=>{
    console.log("This is setImmediate 1")
})

    





