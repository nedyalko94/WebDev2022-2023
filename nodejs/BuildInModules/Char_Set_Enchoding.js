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
    */


    
console.log("V".charCodeAt() ) // show what is unicode of the "V"

console.log("?".charCodeAt() )