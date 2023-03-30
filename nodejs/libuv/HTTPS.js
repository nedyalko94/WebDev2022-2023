
const https = require("node:https")
const MAX_CALL = 12  
const start = Date.now()



for(let i = 0; i<MAX_CALL; i++){
    https.request("https://www.google.com",(res)=>{
        res.on("data",()=>{})
        res.on("end",()=>{  
            console.log(`request :${i+1}`,Date.now() -start +" ms")
        })
    })
    .end();

 
    } 

//     console.time("timer")    
// console.timeEnd("timer")

    // console.log("Hash:",Date.now() -start)
    

    // http request don't get effected from thread pool 
    // no effect from cpu core as well

    // http is network i/o  operation and not a cpu bound operation
    // it does not use the thread pool Libuv delegates the work to the operating system kernel and 
    // whenever possible , it will  poll the kernel and see if the request has completed

    /* summary
    async method are handle from libuv
        1.native mechanism 
        2.thread pool

        Whenever possible , Libuv will use native async mechanism in the os as to avid blocking the main thread 
        Since this is part of the kernel there is different mechanism for each OS We have a poll for 
        Linux, Kqueue for MacOS and IO Completion Port on Windows 

        Relying on native async mechanism make Node scalable as the only limitation is the operating system kernel

        Example of this is a network I/O operation


    
    */