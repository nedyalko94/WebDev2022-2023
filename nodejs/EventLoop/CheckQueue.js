
/*
Check queue callbacks are execute after Microtask queue callbacks, 
Timer queue and I/O queue callbacks are execute


*/

const fs = require('node:fs')

fs.readFile(__filename,()=>{ // I/O
    console.log("This is readFile 1")
    setImmediate(()=>{
        console.log("This is inner setImmediate 1 inside readFile 1")
    })
    process.nextTick(()=>{ console.log("This is inner nextTick 1 inside readFile 1")})
    // Microtask queues callbacks are execute after I/O callbacks and before queue callbacks
    Promise.resolve().then(()=>{ console.log("This is  inner Promise.resolve 1 inside readFile 1")})


})

Promise.resolve().then(()=>{ console.log("This is Promise.resolve 1")})

setTimeout(()=>{console.log("this is setTimeout 1")},0) 

process.nextTick(()=>{ console.log("This is next tick 1")})



// another test 

setImmediate(()=>{
    console.log("This is setImmediate 1")
})
 
setImmediate(()=>{
    console.log("This is setImmediate 2")
    process.nextTick(()=>{ console.log("This is inner nextTick 1 inside setImmediate 2")})
    Promise.resolve().then(()=>{ console.log("This is  inner Promise.resolve 1 inside setImmediate 2")})
})
setImmediate(()=>{
    console.log("This is setImmediate 3") 
})


// with setImmediate  and setTimeout with 0 ms can  be the same conflict like 
//setTimeout and I/O queue check the InputOutputQueue file