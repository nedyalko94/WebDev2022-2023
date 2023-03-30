// for Of  method

let person = {
    fname: "Joe",
    lname:"Doe",
    age : 30 
}

  let result 
// with object.values
  for (let  key of Object.values(person))
  { console.log(key)}

let myNumber = [ 1,6,22,54,11,31,76]


// n  iterable object
for ( let n of myNumber){
  console.log(n)
}