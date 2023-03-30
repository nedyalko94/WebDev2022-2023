/*
Event Loop Summary

The event loop is a C program that orchestrates or co-ordinates the execution of
 sync and async code in Node.js

it co-ordinates the execution of callbacks in six different queues

They are :
    nextTick,      
    Promise,        
    Timer,
    I/O,
    Check ,
    Close queue,

We use  process.nextTick() method to queue into the nextTick queue 

We resolve or reject Promise to queue into the Promise queue

We use setTimeout or setInterval to queue into the timer queue

Execute an async method to queue into the I/O queue

Use setImmediate function to queue into the check queue and finally 

Attach close event listeners to queue into the close queue

the order of execution follows the same order listed here

nextTick and Promise queues are executed in between each queue and also in
 between each callback execution in the timer and check queues

i don't really agree with this order 

First is execute sync Code
This is standalone nextTick
This is standalone Promise.resolve
This is  setTimeout
This is setImmediate
this is from readableStream close event Callback
This is readFile 1

*/
const fs = require('node:fs') 

const readableStream = fs.createReadStream(__dirname)
readableStream.close()

// always first as sync Code
console.log("First is execute sync Code ")

// always second as MicroTask
process.nextTick(()=>{
    console.log("This is standalone nextTick")
})
// always 3 as MicroTask

Promise.resolve().then(()=>{ console.log("This is standalone Promise.resolve")})

// always 4 as a timer queue
setTimeout(()=>{console.log("This is  setTimeout")},0)

// this should be 5 or 6 because of polling but come out as 6 last 
fs.readFile(__filename,()=>{
    console.log("This is readFile 1")
})

// this should be 6 or 5 because of polling  become 5 
setImmediate(()=>{ console.log("This is setImmediate")})

 
 // this should be  7 but come out as 6 before I/O queue


readableStream.on("close",()=>{
    console.log("this is from readableStream close event Callback")
})