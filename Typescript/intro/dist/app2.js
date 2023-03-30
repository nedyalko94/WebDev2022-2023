"use strict";
// classes
class Person {
    constructor(id, name, age) {
        console.log(123);
        this.id = id;
        this.name = name;
        this.age = age;
    }
    register() {
        return `${this.name} is now register`;
    }
}
const brad = new Person(1, "brad", 10);
const Mike = new Person(2, "mike", 20);
console.log(brad, Mike);
brad.name = "5";
console.log(brad, Mike);
console.log(brad.register());
//Subclasses
class Employee extends Person {
    constructor(id, name, age, position) {
        super(id, name, age); // we are getting the value from Person
        this.position = position;
    }
}
const emp = new Employee(3, "Ned", 16, "Developer");
console.log(emp);
console.log(emp.register());
// generics
// we are making "variable for type" and then define it when we need it 
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4, 5]);
let strArray = getArray(["john", "maria", "george"]);
