let result 

let phoneNumber = "1234567890 \n123-456-7890 \n123 456 7890 "

result =phoneNumber.match(/\d{10}/g)
//[ '1234567890' ]


// 3 digit - optional 3 digit - optional 4 digit 
result =phoneNumber.match(/\d{3}-?\d{3}-?\d{4}/gm)

//[ '1234567890', '123-456-7890' ]

// 3 digit - or space optional 3 digit - or space  optional 4 digit 
result =phoneNumber.match(/\d{3}[ -]?\d{3}[ -]?\d{4}/gm)

// [ '1234567890', '123-456-7890', '123 456 7890' ]


// capture group (own group)
result =phoneNumber.match(/(\d{3})[ -]?(\d{3})[ -]?(\d{4})/gm)

// result = phoneNumber.match(/$1$2$3/g)   /// replace ???? 


// rename group 
//?<myGroup1>
result =phoneNumber.match(/(?<myGroup1>\d{3})[ -]?(?<myGroup2>\d{3})[ -]?(?<myGroup3>\d{4})/gm)


// including braced

 phoneNumber = "1234567890 \n123-456-7890 \n123 456 7890 \n (123) 456-7890"

result =phoneNumber.match(/\(?(?<myGroup1>\d{3})\)?[ -]?(?<myGroup2>\d{3})[ -]?(?<myGroup3>\d{4})/gm)

// [ '1234567890', '123-456-7890', '123 456 7890', '(123) 456-7890' ]

// for international number 

phoneNumber = "1234567890 \n123-456-7890 \n123 456 7890 \n (123) 456-7890 \n+123 123 456 7890"

result =phoneNumber.match(/(?:(\+?\d{1,3})[ -])?\(?(?<myGroup1>\d{3})\)?[ -]?(?<myGroup2>\d{3})[ -]?(?<myGroup3>\d{4})/gm)
 // 4 group $1$myGroup1$myGroup2$myGroup3
// [
//     '1234567890',
//     '123-456-7890',
//     '123 456 7890',
//     '(123) 456-7890',
//     '+123 123 456 7890'
//   ]



console.log(result)

//https://www.w3schools.com/jsref/jsref_obj_regexp.asp          - more
