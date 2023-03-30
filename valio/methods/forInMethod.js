 // for in method 
 ///The JavaScript for in statement loops through the properties/values of an Object:



const person = {fname:"John", lname:"Doe", age:25};

// loop throw keys (string)
for( let prop in person){
 // console.log(prop)
}
// value 
for( let prop in person){
 //  console.log(person[prop])
 }

// for in loop throw value ( string) 
let text = "";
for (let x in person) {
  text += " "+ person[x];
}
// John Doe 25   // return string 
//console.log(text) 

let text1 = [];
for (let x in person) {
  text1.push(person[x]);
}
// John Doe 25   // return  array
//console.log(text1) 

// with array
const numbers = [45, 4, 9, 16, 25];

let txt = "";
for (let x in numbers) {
  txt += numbers[x];
}
// return  string for array/object use .push
//console.log(txt)


// from array to array
let txt1 = [];
for (let x in numbers) {
  txt1.push(numbers[x]);
}

console.log(txt1)



