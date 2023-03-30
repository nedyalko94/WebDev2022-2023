

//Interface

interface user {
id:number
name:string
age:number
}
const user2:user = {
    id:2,
    name:"Shakira",
    age:10
}
// readonly 


interface user2 {
   readonly id:number
    name:string
    age?:number
    }

    const user3:user2 = {
        id:2,
        name:"Shakira",
        age:10
    }



// optional value ?

const user4 :user2 = {id:14,name:"Madona"}


interface MathFunc {
    (x:number,y:number):number
}
// interface with function
// with the interface we don't need to define the type of everything in function 
//  because we already define the type and return in interface
const add:MathFunc = (x:number, y:number):number=> x + y 
const sub:MathFunc = (x:number, y:number):number=> x - y 

const dev:MathFunc = (x,y)=>x/y

console.log(dev(10,5))

interface Messagefnc {
    (message:string):string
}
   
const myStr:Messagefnc = (message)=> message

console.log(myStr("hello"))