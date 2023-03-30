// Numbers methods

let x = 999999999999999;   //15  x will be 999999999999999
let y = 9999999999999999;  //16 y will be 10000000000000000 
// up to 15 digit 
let z = 0.9999999999999999 //decimal is up to 17  including  before the point 

// Floating point arithmetic is not always 100% accurate:
let e = 0.2 + 0.1;
// To solve the problem above, it helps to multiply and divide:
let r = (0.2 * 10 + 0.1 * 10) / 10;

let n1 = 10
let n2 = "20"
let n3 = "10.5"
let n4 = 10.5
let result;

// toString () transform number to string 
result = n1.toString()

//parseInt() string to round number (10.5 return  10 )

result = parseInt(n1)
result = n1 + parseInt(n3)
result = parseInt(n3)

// parsefloat()  string to floating number
 result= parseFloat(n3)

//The toExponential() method returns a string representing the Number object in exponential notation. 10.5  == 1.05e+1

 result = n4.toExponential()

 // to fixed round the number // toPrecision()
 //toFixed() returns a string, with the number written with a specified number of decimals:

  let n5 = 10.8
  let n6 = 10.4
 result= n6.toFixed()



 //All number methods return a new value. They do not change the original variable.

 // valueOff
 result = (50+5).valueOf()
 //console.log(result)


 // fixed method
 result = n6.toFixed(1); //  10.4 to 10 
 result = Number("10"); //10
 result=Number(undefined) // NaN
 result = Number(null);  // 0
 result=Number(true)  //1
 result=Number(false) // 0 
 result = Number.MAX_VALUE //1.7976931348623157e+308
 result = Number.MIN_VALUE // 5e-324
 result = Number.MIN_SAFE_INTEGER // -9007199254740991
 result = Number.MAX_SAFE_INTEGER // 9007199254740991
 result = Number.NEGATIVE_INFINITY // -Infinity
result = Number.POSITIVE_INFINITY // Infinity
result=Number.NaN // NaN

//isFinite() converts the value to a number before testing it.
result =Number.isFinite(10) // true 
result =Number.isFinite(Infinity) // false 
result =Number.isFinite(NaN)  // false 
result= Number.isInteger("10") // false 
result= Number.isInteger(10) // true 
result=Number.isNaN(10/NaN) // true 
result= Number.isNaN("10"/"10") //false 
result=Number.isSafeInteger(10) // true 

//Number() can also convert a date to a number


console.log(result)


