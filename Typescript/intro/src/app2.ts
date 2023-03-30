
// classes

// public -same as leave empty
// private - can't access
// protected - can access only in the class or in extend class

//  class + interface

interface PersonInterface {
     id:number,
    name:string,
   register():string
}


class Person implements PersonInterface{
    id:number 
   public name:string
   protected age:number

    constructor(id:number,name:string,age:number){
        console.log(123)
        this.id = id 
        this.name = name
        this.age = age
    }
    register(){
        return `${this.name} is now register`
    }
}

const brad = new Person(1,"brad",10)
const Mike = new Person(2,"mike",20)

console.log(brad,Mike)

brad.name = "5"
console.log(brad,Mike)
console.log(brad.register())


//Subclasses
class Employee extends Person {
    position : string
    constructor(id:number, name:string,age:number,position:string){
        super(id,name,age) // we are getting the value from Person
        this.position = position
    }
}

const emp = new Employee(3,"Ned",16,"Developer")

console.log(emp)
console.log(emp.register())

// generics

// we are making "variable for type" and then define it when we need it 

function getArray<T>(items:T[]):T[]{
    return new Array().concat(items)
}

let numArray = getArray<number>([1,2,3,4,5])
let strArray = getArray<string>(["john","maria","george"])