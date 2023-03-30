
/*
ES Modules Summary

Es Module is the ECMAScript standard for modules 
it was introduced with es2015 
node.js 14 and above support es module
instead of module.exports, we use the export keyword
the export can be default or named 
we import the exported variables or function using import keyword
 
if it is a default export , we can assign any name while importing 
if it is a named export , the import name must be same 

IMPORTANT file must me   .mjs 
*/










// import add from './mathEsm.mjs' // first wait to import
import math from './mathEsm.mjs' // 2 way to import 
// import * as  math from './mathEsm.mjs' //3
// import {add,subtract} from './mathEsm.mjs' //4
const {add,subtract} = math  // destructuring 
// with this math.add is not need it just add is enough


// es module no package json

console.log(add(4,3))
console.log(subtract(4,3))
 
console.log(math.add(4,3))
console.log(math.subtract(4,3))

 