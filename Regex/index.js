// Regular expressions  - is way to search through text


// / /g  is for global match all result if is of match only first one 
// / /i  is for  upper or lower case   
// / /m is for multiline 
// / /s is for single line (dottall)
// / /u is for unicode 
// / /s is for stick y


let string = 'The fat cat  ran down the street.It was searching for a mouse to eat. '
let result
// nodemon index

result =string.match(/e+/g) 

// + is for string of it for example double "ee"
//[ 'e', 'e', 'ee', 'e', 'e', 'e' ]


// question mark ? is optional  if exist match it 

 result =string.match(/ea?/g) 

//  [
//     'e',  'e',  'e',
//     'e',  'ea', 'e',
//     'ea'
//   ]


// *  is match  0 or more  (is like combination from + and ? )

result = string.match(/re*/g)

// [ 'r', 'ree', 'r', 'r' ]

// . is  match anything  // is matching at and the letter before or after
// but will not match new line 

result=string.match(/.at/g)
//[ 'fat', 'cat', 'eat' ]

result=string.match(/at./g)

// [ 'at ', 'at ', 'at.' ]


//  if we want to match spec character  we can  use escape \

result=string.match(/\./g)

// [ '.', '.' ]

result=string.match(/\../g)
// [ '.I', '. ' ]

result=string.match(/.\./g)

// [ 't.', 't.' ]

//  \w is match any word character (letter)

result=string.match(/\w/g)

// [
//     't', 'h', 'e', 'f', 'a', 't', 'c', 'a',
//     't', 'r', 'a', 'n', 'd', 'o', 'w', 'n',
//     't', 'h', 'e', 's', 't', 'r', 'e', 'e',
//     't', 'I', 't', 'w', 'a', 's', 's', 'e',
//     'a', 'r', 'c', 'h', 'i', 'n', 'g', 'f',
//     'o', 'r', 'a', 'm', 'o', 'u', 's', 'e',
//     't', 'o', 'e', 'a', 't'
//   ]


// negative version of \w is uppercase one \W match any char that is not letter 
// don't match number as well 

 result = string.match(/\W/g)

//  [
//     ' ', ' ', ' ', ' ', ' ',
//     ' ', ' ', ' ', '.', ' ',
//     ' ', ' ', ' ', ' ', ' ',
//     ' ', '.', ' '
//   ]

// \s match any empty space 

result = string.match(/\s/g)

// [
//     ' ', ' ', ' ', ' ',
//     ' ', ' ', ' ', ' ',
//     ' ', ' ', ' ', ' ',
//     ' ', ' ', ' ', ' '
//   ]

// negative version of \s is upper case \S 
// match anything that is not empty space 

result = string.match(/\S/g)

// [
//     't', 'h', 'e', 'f', 'a', 't', 'c', 'a',
//     't', 'r', 'a', 'n', 'd', 'o', 'w', 'n',
//     't', 'h', 'e', 's', 't', 'r', 'e', 'e',
//     't', '.', 'I', 't', 'w', 'a', 's', 's',
//     'e', 'a', 'r', 'c', 'h', 'i', 'n', 'g',
//     'f', 'o', 'r', 'a', 'm', 'o', 'u', 's',
//     'e', 't', 'o', 'e', 'a', 't', '.'
//   ]


                // range 
// {} if we want to match  word longer than 4 char 
// and 4 char of the word



result = string.match(/\w{4}/g)

// [ 'down', 'stre', 'sear', 'chin', 'mous' ]


// if we want to be at least 4 char or more 
// that means the entire word 
result = string.match(/\w{4,}/g)

[ 'down', 'street', 'searching', 'mouse' ]

// if we want range 
// we are looking at word that are at least 4 char 
// and we going to match max 5 char of it 

result = string.match(/\w{4,5}/g)

// [ 'down', 'stree', 'searc', 'hing', 'mouse' ]


// groping 
// char grouping

// [fc] will match anything that match f or c 
result = string.match(/[fc]at/g)

[ 'fat', 'cat' ]

// you can do range as well 

result = string.match(/[a-z]at/g)
//that will match any word that start with a-z and end with at 

// [ 'fat', 'cat', 'eat' ]

// Own  separate  group
// separate the group from the rest 
//      |  means or  

result = string.match(/(t|T)/g)
// [
//     'T', 't', 't',
//     't', 't', 't',
//     't', 't', 't'
//   ]

result = string.match(/(t|T)he/g)

// match t or T and he 

//[ 'The', 'the' ]


// can grouping with range 

result = string.match(/(t|e|r){2,3}/g)

// we are matching from 2 to 3 of t|e|r 
// contain at least 2 of the t|e|r  or all 3 of them

// [ 'tre', 'et' ]


// example how own separate  group is working
result = string.match(/(t|e|r){2,3}\./g)
 // match from 2 to 3 and the dot is valid for entire group


 // if we do 

 result = string.match(/e{2,3}/g)
 // match 2-3 e
//  [ 'ee' ]

 result = string.match(/re{2,3}/g)
 //[ 'ree' ]

 // match 2-3 group of  e + r in front but r is separate
 result = string.match(/(re){2,3}/g)
 // in group now is looking for 2-3 re so we get null because is looking
 // for group of rere or rerere 
//  null


console.log(result)       

