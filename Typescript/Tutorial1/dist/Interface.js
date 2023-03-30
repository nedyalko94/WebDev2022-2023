"use strict";
//Interface
const user2 = {
    id: 2,
    name: "Shakira",
    age: 10
};
const user3 = {
    id: 2,
    name: "Shakira",
    age: 10
};
// optional value ?
const user4 = { id: 14, name: "Madona" };
// interface with function
// with the interface we don't need to define the type of everything in function 
//  because we already define the type and return in interface
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
const dev = (x, y) => x / y;
console.log(dev(10, 5));
const myStr = (message) => message;
console.log(myStr("hello"));
