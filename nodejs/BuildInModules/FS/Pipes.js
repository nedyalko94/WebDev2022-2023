/*
similar to stream

Pipes 
    take readable stream and connect it to a writable stream

*/


const fs = require('node:fs')
const zlib = require("node:zlib") 
/*
zlib module provide compression functionality implemented g-zyb algorithm
zlib has build in transform stream

*/
const gzib = zlib.createGzip()


const readableStream = fs.createReadStream('./file.txt',{
    encoding:"utf-8",
    highWaterMark:6, // limit the chunk to 6 bites 
})

const writeableStream = fs.createWriteStream('./file2.txt')


readableStream.pipe(writeableStream)  
// for pipe  has to be readable duplex or transform stream so we can't chain another pipe


readableStream.pipe(gzib).pipe(fs.WriteStream("./file2.txt.gz"))


