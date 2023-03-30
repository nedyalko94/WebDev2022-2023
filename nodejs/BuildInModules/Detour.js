/*
         (binary data)
    Normal  Binary
    Number  Number
        1   1
        2   10
        3   11
        4   100
        5   101
        6   110
        7   111
        8   1000
        9   1001
        10  1010

Finding string / letter as binary is :
    console.log("V".charCodeAt() ) // show what is binary number of the "V"

Character set 

    Unicode
    ASCII


  Character Encoding
    Character encoding dictates how to represent a number in a character set as binary data
    before it can be stored in a pc
    it dictates how many bits to use to represent the number

    Example of a character encoding system is UTF-8

    UTF-8 states that characters should be encoded in bytes (8bits)

    eight 1s or 0s should be used to represent the code of any character in binary

    For Example 
    the number 4 -> is 100 in Unicode -> 00000100 in binary
    the letter "V" -> is 86 in Unicode -> 01010110 in binary

Streams and buffers
    Streams
        A stream is a sequence of data that is being moved from one point to another over time
        EX : a stream  of data over the internet being moved from one pc to another
        EX: a stream of data being transferred from one file to another withing the same pc

        Processing stream of data in chunks as they arrive of waiting 
        for the entire data to be available before processing
            Stream contd.
                Process of data in chunks as they arrive instead of waiting for the entire data to be available before processing
                EX: watching YOUTUBE 
                The data arrives in chunks and you watch in chunks while the rest of the data arrives over time.
                EX: transferring file/ download 
                All that prevent unnecessary data downloads and memory usage
    Buffers
            in rollerCoster   30 seat capacity
                :scenario 1 
                    100 people
                    30 accommodated
                    70 waiting / people in queue
                :scenario 2 
                    1 person arrives (waiting)
                    wait at least for 10 
            
            Area where people wait is nothing but the buffer 
            Node cannot control the pace at which data arrives in the stream 
            it can only decide when is the right time to sen the data for processing
            if there is data already processed or too little data to process node puts the arriving data in a buffer
            it is an intentionally small area that node maintains in the runtime to process a stream data

EX: streaming online games
    with bath internet connection stream will have spinner/loading while waiting the buffer to be fill and when is fill will resume

Async JS
    Js is a synchronous  , blocking, single threated language




*/

console.log("V".charCodeAt() ) // show what is unicode of the "V"

console.log("?".charCodeAt() )

// creating buffer

const buffer = new Buffer.from("Nedyalko","utf-8") // character encoding is optional

console.log(buffer.toJSON())
/*
unicode character code  in array
we get array of number with unicode number of every character "Nedyalko"
for N is 78
 data: [
    78, 101, 100, 121,
    97, 108, 107, 111
  ]
*/
console.log("N".charCodeAt()) 

console.log(buffer)
/*
<Buffer 4e 65 64 79 61 6c 6b 6f>

 hexadecimal / base16 

 to transform in binary can be done here

https://www.rapidtables.com/convert/number/hex-to-binary.html
*/
  
console.log(buffer.toString()) // we get the string
buffer.write('hello world')
console.log(buffer.toString()) // we write in the buffer but is limited so we get only "hello wo" ot of "hello world"

