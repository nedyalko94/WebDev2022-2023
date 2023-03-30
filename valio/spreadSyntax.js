"use strick"
// spread syntax

const a1 = [10,20,30] // only one parameter

function sum (a,b,c){
    return a+b+c
}

const result = sum.apply(null,a1) // old way
const result1 = sum(...a1) //  with spread
//console.log(result1)

const a2 = [5,6,...a1 ,11,14,"hello"]

//console.log(a2) // [ 5, 6, 10, 20, 30, 11, 14, 'hello' ]

// copy an array  // if we change a2Copy we don't change a2
const a2Copy =[ ...a2 ]

//console.log(a2Copy)

// concat array 
let a4 = [2,5,6,11] 

let a5 = [...a4,...a2Copy]
console.log(a5)

// obj copy

let dom ={
    red:"car",
    gree:"truck"
}

let dom2 = {...dom}

// array to object 

let dom3 = {...a4}

console.log(dom3)

const state = ['up']

state[0]="fal"
state[1]='se'
let number =2
let string = "hello world"
console.log(string.concat(number))
console.log(state)


