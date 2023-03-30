

/*
nextTick queue

process.nextTick()
    Use of process.nextTick is discouraged as it can cause the rest of the event loop to starve

    If you endlessly call process.nextTick , the control will never make it past the microtask

Tow main reason to use process.nextTick()
    1 To allow users to handle errors, cleanup any then unneeded resources , or perhaps try the request again before
    the event loop continue
    2 To allow a callback to run after the call stack has unwound but before the event loop continues


*/



// all callbacks in nextTick queue are execute before callbacks in promise
// nextTick execute before Promise


// EX 1

// console.log("first")
// process.nextTick(()=>{
//     console.log(" this is process.nextTick 1")
// })
// console.log("second")



//EX 2

// Promise.resolve().then(()=>{ console.log("This is Promise.resolve 1")})

// process.nextTick(()=>{
//     console.log(" this is process.nextTick 1")
// })



 //EX 3

    //1
 process.nextTick(()=>{
    console.log("this is process.nextTick 1")
 })
    //2
 process.nextTick(()=>{
    console.log("this is process.nextTick 2")
    process.nextTick(()=>{  //2.1
        console.log("this is process.nextTick inside nextTick 2")
     })
 })
    //3
 process.nextTick(()=>{
    console.log("this is process.nextTick 3")
 })
    //4
 Promise.resolve().then(()=>{
    console.log("this is Promise.resolve 1")
 })
    //5
 Promise.resolve().then(()=>{
    console.log("this is Promise.resolve 2")
    process.nextTick(()=>{  //5.1
        console.log("this is inner nextTick inside Promise 2 ")
     })

 })

    //6
 Promise.resolve().then(()=>{       
    console.log("this is Promise.resolve 3")
 })