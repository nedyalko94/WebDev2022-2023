//
let person = {
    name:"Anna",
    age: 30,
    school:"Harvard",
    score: 180,
    address:{
        country:"Belgium",
        city: "Brussel",
        postCode:1060
    }
}
// make array of object keys
let keys =Object.keys(person)

//console.log(keys)

//make array of values
let values = Object.values(person)

//console.log(values)

//make 2D array with key value 
let entries = Object.entries(person)

//console.log(entries)
//console.log(entries[4][1])

// Object.assign  merge multiple object 
// if we have conflict  (both object with same keys) we are taking the value of last object in Object.assign(firstObj,secondObj) 
// we can add directly in to  Object.assign(firstObj,secondObj,{score:100})
const firstObj = { name:"Joe", score :5}
const secondObj = { score:10}
const combine = Object.assign(firstObj,secondObj)
//console.log(combine)
const copyOfCombine = Object.assign(combine)
console.log(copyOfCombine)

// 2D array in to object    gives you number for key and your array for value

let testAssign = Object.assign({}, entries); // {0:"a", 1:"b", 2:"c"}

 //console.log(testAssign)

// 2d array to object  index[0] : index[1]
// take 2D array and return index 0 for a key and index 1 for value 
let my2dReduce = entries.reduce((a, v) => ({ ...a, [v[0]]: v[1]}), {}) 
// [[ 'name', 'Anna' ], [ 'age', 30 ],[ 'school', 'Harvard' ], [ 'score', 180 ],['address', { country: 'Belgium', city: 'Brussel', postCode: 1060 } ] ]
// {name: 'Anna',age: 30,school: 'Harvard',score: 180,address: { country: 'Belgium', city: 'Brussel', postCode: 1060 }}

///console.log(my2dReduce)


let myArr = [ "girl","boy", "car","truck"]
// its give you same key as value 
 let keyValueSame = entries.reduce((a, v) => ({ ...a, [v]: v}), {}) 
// { a: "a", b: "b", c: "c" }

//console.log(keyValueSame)

// array to object  with spread syntax
//{0:"a", 1:"b", 2:"c"}

let newArr = {...myArr}

//console.log(newArr)

