
/*
I/O queue
input output queue

most of the async methods from the build-in modules
 queue the callback function in the I/O queue
*/


const fs = require('node:fs')

fs.readFile(__filename,()=>{
    console.log("This is readFile 1")
})

Promise.resolve().then(()=>{ console.log("This is Promise.resolve 1")})

setTimeout(()=>{console.log("this is setTimeout 1")},0) 

process.nextTick(()=>{ console.log("This is next tick 1")})

           
/* 
when running setTimeout with delay 0 ms and an I/O async method , the order of execution can never be guaranteed

    why 
    if setTimeout is execute for 0,05 ms 
    when you set 0 ms sec delay at start of event loop node js need to figure out if 0 ms has elapsed(pass or go by) or not 
    if event loop enter the timer at 0.05ms the 1 ms callback has not been queue and the control move to I/O queue

    if cpu is busy and enter the timer queue 1.01 ms timer will elapsed and callback function which is queue in the timer queue is executed first 
    the control will preside I/O queue and the readfile callback execute
*/