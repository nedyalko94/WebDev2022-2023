




let num1:any = 10
let num2 = <number>num1 // is equal to num1 but now is not any type but a number
console.log(num2) 
let str1 = <string>num1
console.log(str1) // no error strange



// option 2 for assertion
let num3 = num1 as number

