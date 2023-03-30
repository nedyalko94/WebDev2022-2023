"use strict";
// compiler
// npm i typescript
// npm i  -g typescript // for global
// tsc -v for version
// tsc nameofthefile
// default is es5
// tsc --watch nameofthefile
/*
in tsconfig
 "rootDir": "./src",    is for ts files
 "outDir": "./dist",    and for already compile file
*/
//basic types
let id = 5;
let company = "ned";
let isPublish = true;
let x = "hello";
let age;
age = 30;
let ids = [1, 2, 3, 4, 5];
let arr = [1, 2, true, "hello"];
// - error ids.push("hi")
//  id = "asd" error
// Tuple  exact value of array
let person = [1, "Swag", true];
let employee;
employee = [
    [1, "Swag"],
    [2, "john"],
    [3, "jill"]
];
// union 
let pid;
pid = 2;
// Enum 
var Direction1;
(function (Direction1) {
    Direction1[Direction1["up"] = 1] = "up";
    Direction1[Direction1["down"] = 2] = "down";
    Direction1[Direction1["left"] = 3] = "left";
    Direction1[Direction1["right"] = 4] = "right";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["up"] = "up";
    Direction2["down"] = "down";
    Direction2["left"] = "left";
    Direction2["right"] = "right";
})(Direction2 || (Direction2 = {}));
console.log(Direction1.up);
console.log(Direction2.down);
// object
const user = {
    id: 1,
    name: "john"
};
const user2 = {
    id: 2,
    name: "Maria"
};
// type Assertion 
let cid = 1; // is any type
let customerId = cid; // is equal to cid but is require to be  number
customerId = 2;
// option 2 for assertion
let customerNumber = cid;
// in function 
function addNum(x, y) {
    return x + y;
}
console.log(addNum(2, 3));
// void type no return value
function myLog(message) {
    console.log(message);
}
const user3 = {
    id: 2,
    name: "Maria"
};
const p1 = 1;
const user4 = {
    id: 2,
    name: "Maria"
};
// interface with function
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
console.log("id", id);
