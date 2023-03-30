// compiler
// npm i typescript
// npm i  -g typescript // for global

// tsc -v for version

// tsc filename
// default is es5

// tsc --watch 

// INIT PROJECT     npx tsc --init

/*
in tsconfig 
 "rootDir": "./src",    is for ts files                               
 "outDir": "./dist",    and for already compile file
*/
 //basic types
let id:number = 5
let company:string = "ned"
let isPublish:boolean = true
let x:any = "hello"
let age:number
age = 30
let ids:number[] = [1,2,3,4,5]
let arr:any[] = [1,2,true,"hello"]

// - error ids.push("hi")

//  id = "asd" error

// Tuple  exact value of array
let person :[number,string,boolean]= [1,"Swag",true]

let employee:[number,string][]

employee = [
    [1,"Swag"],
    [2,"john"],
    [3,"jill"]
]

// union 
let pid:string|number

pid =2
// Enum 

enum Direction1 {
    up = 1,
    down,
    left,
    right
}
enum Direction2 {
    up = "up",
    down="down",
    left="left",
    right="right"
}
console.log(Direction1.up)
console.log(Direction2.down)

// object


const user:{
    id:number,
    name:string
    }={
    id:1,
    name:"john"
}

// option 2 for object

type User = {
    id:number,
    name:string
}

const user2:User={
    id:2,
    name:"Maria"
}

// type Assertion 

let cid:any =1  // is any type
let customerId =<number>cid // is equal to cid but is require to be  number
customerId = 2
// option 2 for assertion
let customerNumber = cid as number

// in function 
function addNum(x:number,y:number):number{
    return x+y
}

console.log(addNum(2,3))

// void type no return value
function myLog(message:string|number):void{
    console.log(message)
}

// interface

interface UserInterface {
    id:number,
    name:string
}

const user3:UserInterface={
    id:2,
    name:"Maria"
}

// type can be use with primitive (number,string) and union number|string 
type Point = number | string // union
const p1:Point=1
// you can't use interface with union 

// for object interface 

interface FullUserInterface {
    // read only property
    readonly id:number,
    name:string,
    age?:number // optional value no error if we don't include it 
}

const user4:FullUserInterface={
    id:2,
    name:"Maria"
}

// read only property
// user4.id = 5  // error because is read only 


interface MathFunc {
     (x:number,y:number):number
}
// interface with function
const add:MathFunc = (x:number, y:number):number=> x + y 
const sub:MathFunc = (x:number, y:number):number=> x - y 
console.log("id",id)    
   

   