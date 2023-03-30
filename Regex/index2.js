
var string ='The fat cat ran down the street.\nIt was searching for a mouse to eat.'
var result 
// min 11  of https://www.youtube.com/watch?v=rhzKDrUiJVk 


// match the beginning of the line 
result= string.match(/^T/g)

// [ 'T' ]

//multiline match the beginning of the line 
string = 'I and The fat cat ran down the street.\nIt was searching for a mouse to eat.'
result= string.match(/^I/gm)
// [ 'I', 'I' ]

// match end of the statement 

result= string.match(/\.$/g)

// for global
// [ '.' ]
// for global multiline
// [ '.', '.' ]


// look behind // positive
string = 'The fat cat ran down the street.\nIt was searching for a mouse to eat.'

// return the empty space after the and The 
//  may not be support in all browser
result = string.match(/(?<=[tT]he)./g)

// return empty space after school


// negative look behind

//should return everything that  is not after the The 
result = string.match(/(?<![tT]he)./g)

// look ahead 

// return any char that is follow by at
result = string.match(/.(?=at)/g)
// [ 'f', 'c', 'e' ]

 // reverse  anything that is not follow by at
result = string.match(/.(?!at)/g)

// [
//     'T', 'h', 'e', ' ', 'a', 't', ' ', 'a', 't',
//     ' ', 'r', 'a', 'n', ' ', 'd', 'o', 'w', 'n',
//     ' ', 't', 'h', 'e', ' ', 's', 't', 'r', 'e',
//     'e', 't', '.', 'I', 't', ' ', 'w', 'a', 's',
//     ' ', 's', 'e', 'a', 'r', 'c', 'h', 'i', 'n',
//     'g', ' ', 'f', 'o', 'r', ' ', 'a', ' ', 'm',
//     'o', 'u', 's', 'e', ' ', 't', 'o', ' ', 'a',
//     't', '.'
//   ]


console.log(result)

  