/* Time Queue
setTimeout(()=>{},0)
setInterval(()=>{},0)

callbacks in the microtask queue are execute before callbacks in the timer queue

Timer queue are execute in FIFO order (First in First out)

*/


setTimeout(()=>{ console.log("This is setTimeout 1")},0)
setTimeout(()=>{
     console.log("This is setTimeout 2")
     process.nextTick(()=>{
        console.log("This is inner next tick inside setTimeout")
     })
},0)
setTimeout(()=>{ console.log("This is setTimeout 3")},0)

// between every setTimeout is executing the  microTask (callbacks process.nextTick Promise) first then next  setTimeout
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