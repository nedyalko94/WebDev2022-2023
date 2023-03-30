/*
string
number - long short bute float double
boolean
undefined
object// array
null
*/

let result ;

//console.log(result)

result = "hello Valio" // string

result = 5; // number

result = true // booleans
result = false // booleans 
result = undefined // undefined 
result ; // undefined 

result = [1,3,4,5] // array

//object 
const student = {   
    name:"Valio",
    age:20 ,
    score: 51,
    school: "51%",
    isStudent:true
}

// nested object 
const student2 = {  
    name:"Ned",
    age:28,
    score: 91,
    school: "51%",
    address: {
        city:"Brussel",
        rue: " Saint-John" 
    }
}
//console.log(student2)

// `` grave

result = ` hello my name is ${student.name} i'm ${student.age} year old `

//console.log(result)
//
result = student.isStudent? `yes he is and his name is ${student.name} and he is ${student.age} years old.`:
`he is not student`

result = !student.isStudent? `yes he is and his name is ${student.name} and he is ${student.age} years old.`:
`he is not student`
//console.log(result)
result= student.isStudent?`yes is a student`: `no is not a student ` 
// nested 
result =  !student.isStudent? `yes he is and his name is ${student.name} and he is ${student.age} years old.`
:(student.age<10)?`old age`: `young old `

//nested 

result = student.isStudent? 
    (student.age<10)?
            ` is a student, under 10  years old `
            : ` is a student  over 10 years old  `
  : `is not a student .`

//console.log(result)

 // 2 time nested 
result = student.isStudent? 
    (student.age>10)?
            (student.score>50)?
                                `over 50 pass to next year`
                                :`under 50 don't pass stay in same class`
            : ` is a student  over 10 years old  `
  : `is not a student .`

//  console.log(result)

  var numbers = [ 1, "string",true, null,{name:"john"}, undefined,1,5]

  result= numbers.length // number of items  // length of the  array
  result=numbers[3] // index 3 
  result=numbers[4].name // for object

 result = numbers[5]="this is index 5 "

//   console.log(result)
//   console.log(numbers)


  var nestedArray = [1,2,3,[6,7,8,[9,7,6,5]]] // 2 time nested 
result1= nestedArray[3][3][1]
result2= nestedArray[3][3]
result3= nestedArray[3]
  //  console.log(result) 
//console.log(nestedArray)

//check what type of data we have
// console.log(result1,typeof result1)
// console.log(typeof result1,result1)

const shopList =
{
    alcohol:"vodka",
    meat:"pork",
    "3dairy":"milk" // you can't start object key with number ,but with " " you can 
}
console.log(shopList.alcohol)
 console.log(shopList["alcohol"]) // "" are req 
 console.log(shopList["3dairy"]) // test for  special case 

//3 const { property } = object
//Object destructuring 

const hero = { 
    name:"Batman",
    planet: "Mars"
}
// destructuring 
const { name } = hero;
const{planet} = hero

console.log (name)
console.log (planet)
//
//  all 3 
console.log ( hero.name) // normal use wit   .
console.log  ( hero["name"])    // with   []
 console.log ( name )  // with destructuring 