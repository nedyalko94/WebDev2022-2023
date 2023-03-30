/*
Stream recap 

A stream is a sequence of data that is being moved from one point to another over time 
Ex a stream of data being transferred from one file to another within the same computer 
Work with data in chunks instead of waiting for the entire data to be available at once
if you're transferring file contents from file A to file B , you don't wait for entire file A content
to be saved in temporary memory before moving it into file B

instead , the content is transferred in chunks over time which prevents unnecessary memory usage
Stream is in fact a build in module that inherits from the event emitter class other modules internally 
use streams for their functioning

*/


/* we are making  read stream with fs  witch will read a file in to chunk
    part by part 

    and we do the same for write 

    then we use event event  .on and write the part that we have read

*/

const fs = require('node:fs')
const readableStream = fs.createReadStream('./file.txt',{
    encoding:"utf-8",
    highWaterMark:6, // limit the chunk to 6 bites 
})

const writeableStream = fs.createWriteStream('./file2.txt')


readableStream.on('data',(chunk)=>{ 
    console.log(chunk) 
    writeableStream.write(chunk)     
  
})   


/*
http module use stream as well 
request -read stream
response - write stream

Types of stream 

Readable stream from which data can be read
    Ex reading from file 
Writable streams to which we can write data
    Ex write to a file
Duplex streams that are both Readable and Writable
    Ex Sockets as a duplex
Transform stream that can modify or transform the data as it is written and read 
    File compression where you can write compressed data and read de-compressed
     data to and from a file as a transform stream



*/