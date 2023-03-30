const path = require('node:path')
// node prefix is optional
// require("path") is fine fine as well 
/* 14
__filename , _dirname
path.basename()
path.extname(__filename)) - extension name of the file 
path.parse(__filename) - object with root ,dir,base,ext,name
path.isAbsolute(__filename) - check if the path is absolute (boolean)
path.format(path.parse(__filename)) -Returns a path string from an object - the opposite of parse().


path.join('folder1','folder2','index.html') - join the path / file


*/

console.log(__filename) // full path of the file 
console.log(__dirname) // full path to the folder

console.log(path.basename(__filename)) // only the name of the file
console.log(path.basename(__dirname))   // only the name of the folder 
 

console.log(path.extname(__dirname))  // folder don't have file extension
console.log(path.extname(__filename)) //  file extension .js

console.log(path.parse(__filename))
 // object with

// {
//     root: 'E:\\',
//     dir: 'E:\\Programing\\GitHub\\WebDevMay\\nodejs\\BuildInModules\\Path',
//     base: 'index.js',
//     ext: '.js',
//     name: 'index'
//   }


console.log(path.format(path.parse(__filename))) // we get original path of __filename and we reverse the effect of parse

  

console.log(path.isAbsolute(__filename)) // boolean  return true/false if is full path
console.log(path.isAbsolute("./index")) // boolean  return true/false if is full path

// joint 


console.log(path.join('folder1','folder2','index.html'))  //     folder1\folder2\index.html
console.log(path.join('/folder1','folder2','index.html'))  //   \folder1\folder2\index.html

console.log(path.join('/folder1','//folder2','index.html')) //   \folder1\folder2\index.html
console.log(path.join('/folder1','folder2','../index.html'))  //  \folder1\index.html

console.log(path.join(__dirname,'../index.html')) // E:\Programing\GitHub\WebDevMay\nodejs\BuildInModules\index.html


//resolve

/*
resolve try to make it full path (absolute)
    if i don't have any \ will connected to the root of the local disck
    if i have // will start from there 
    if  i have ../ will travel as well 

*/
console.log('resolve')

console.log(path.resolve('folder1','folder2','index.html'))  //E:\Programing\GitHub\WebDevMay\nodejs\BuildInModules\Path\folder1\folder2\index.html
console.log(path.resolve('folder1','folder2','index.html'))  //   E:\Programing\GitHub\WebDevMay\nodejs\BuildInModules\Path\folder1\folder2\index.html
console.log(path.resolve('folder1','//folder2','index.html')) //    E:\folder2\index.html
console.log(path.resolve('/folder1','folder2','../index.html'))  // E:\folder1\index.html 
console.log(path.resolve(__dirname,'index.html')) //  E:\Programing\GitHub\WebDevMay\nodejs\BuildInModules\Path\index.html
console.log(path.join(__dirname,'../index.html')) //E:\Programing\GitHub\WebDevMay\nodejs\BuildInModules\index.html