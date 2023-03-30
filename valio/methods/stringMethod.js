let myString = "hello i'm from Brussel and i live in Brussel"

// for checking length 
var result = myString.length

// picking first index 
result= myString[0]

// picking last index 
result= myString[myString.length -1]

// specific character  and charCodeAt()


result = myString.charAt(4)

// concat add something to the end ( combine)
result= myString.concat(" hi")

//  check if start with and return true/false
result=myString.startsWith("hello")

// check end and return true/false 
result=myString.endsWith("Brussel")

//check if include  true/false

result=myString.includes("from")


// idexOff  finding index of  "m"
result=myString.indexOf("m")


//replace  first one that find 

result=myString.replace("Brussel", "Berlin")

//replace all 
result=myString.replaceAll("Brussel","Berlin")


var names = "John, Monica, Isabelle, Cristina, Jack"

// split makes array and split at value that is givin 
result = names.split(",")

// slice   Start / End  (end start count from the start ( index 0 ))

result = names.slice(5,12)

//substring(start,end) same as slice

result=names.substring(5,12)

//substr (start, length)  my length is 7 but last one is not incudes // only 6 Monica

result = names.substr(5,7)

//toUpperCase    /toLocaleUpperCase 

result=names.toUpperCase()

// toLowerCase /toLocaleLowerCase

result= names.toLowerCase()



 // trim  // delete the empty space at start and end of string 

 let myNewString = "      This is my new String         "
 result=myNewString.trim()
 
// padEnd   add at end (only string number have to be convert )  first is take total length and second the info you want to add 
 let numb = 5;
let text = numb.toString();
result = text.padEnd(3,"0"); // we add 2 time  0  at end 
//padStart add at start 
result = text.padStart(5,"hi") // 2 time hi at start  5 total length so  (5 is 1 + 2time 2 hi)

let num2 = "John"
result = num2.padStart(14,"myName is ")  // "myName is " with length of 10 + john is 4 


var names = "John, Monica, Isabelle, Cristina, Jack, monica"


//match  return array with the match index input and group
result = names.match(/Monica/)
// g means global so will check for multiple match not only first one
result = names.match(/Monica/g)
// i  will ignore upper and lower case and check
result = names.match(/monica/i)
// will check global for multiple match and will ignore upper and lower case 
result = names.match(/monica/gi)

//console.log(result)



let someStr = "hello how are you doing and where are you"

// search for  it and return index
result = someStr.search("you")
// The search() method cannot take a second start position argument.
// The indexOf() method cannot take powerful search values (regular expressions).

result=someStr.indexOf("you",14)

// last index 

result=someStr.lastIndexOf("you")

console.log(result)

//search indexOf(), and lastIndexOf() return -1 if the text is not found:






