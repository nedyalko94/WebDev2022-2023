// Math.E        // returns Euler's number
// Math.PI       // returns PI
// Math.SQRT2    // returns the square root of 2
// Math.SQRT1_2  // returns the square root of 1/2
// Math.LN2      // returns the natural logarithm of 2
// Math.LN10     // returns the natural logarithm of 10
// Math.LOG2E    // returns base 2 logarithm of E
// Math.LOG10E   // returns base 10 logarithm of E

let result = Math.PI //3.141592653589793
result = Math.E //2.718281828459045
result = Math.SQRT2 // 1.4142135623730951
result = Math.SQRT1_2 // 0.7071067811865476
result = Math.LN2 // 0.6931471805599453
result = Math.LN10 //2.302585092994046
result = Math.LOG2E // 1.4426950408889634
result = Math.LOG10E // 0.4342944819032518

// Math.round(x)	//Returns x rounded to its nearest integer
// Math.ceil(x)	    //Returns x rounded up to its nearest integer
// Math.floor(x)	//Returns x rounded down to its nearest integer
// Math.trunc(x)	//Returns the integer part of x (new in ES6)
result = Math.round(5.5) // 5.5 = 6  5.4 = 5 
result = Math.ceil(5.4) // 6 
result = Math.floor(5.6) // 5
result = Math.trunc(5.6) // 5

result=Math.sign(-1)  // -1 ???   on negative return -1 on positive return 1 

//Math.pow(8,2) return 8*8 = 64
result = Math.pow(8,2) // 64
result = Math.pow(4,3) // 4*4*4 =  64

//Math.sqrt()
result = Math.sqrt(64) // 8

// Math.abs(x) returns the absolute (positive) value of x:
// transform negative in to positive 

result = Math.abs(-10.2)

//Math.sin(x) returns the sine (a value between -1 and 1) of the angle x (given in radians).
// If you want to use degrees instead of radians, you have to convert degrees to radians:
// Angle in radians = Angle in degrees x PI / 180.

result = Math.sin(90 * Math.PI / 180);     // returns 1 (the sine of 90 degrees)

// Math.cos(x) returns the cosine (a value between -1 and 1) of the angle x (given in radians).
// If you want to use degrees instead of radians, you have to convert degrees to radians:
// Angle in radians = Angle in degrees x PI / 180.

result = Math.cos(0 * Math.PI / 180);     // returns 1 (the cos of 0 degrees)

//Math.min() and Math.max() can be used to find the lowest or highest value in a list of arguments:

result = Math.min(0, 150, 30, 20, -8, -200); // - 200

result= Math.max(0, 150, 30, 20, -8, -200); //150

//Math.random() returns a random number between 0 (inclusive), and 1 (exclusive):

result = Math.random() // 0.8964546116123875

result = Math.round(Math.random()*10) //0-10
result = Math.floor(Math.random()*10)+1 //1-10 // better chance to get 10

// Math.log(x) returns the natural logarithm of x.
// The natural logarithm returns the time needed to reach a certain level of growth:
// Math.E and Math.log() are twins.

result =Math.log(1);// 0
result =Math.log(10); //2.302585092994046
result = Math.E //2.718281828459045
result =Math.log(8);// 2.0794415416798357

//The Math.log2() Method // returns the base 2 logarithm of x.
//How many times must we multiply 2 to get 8?  2*2*2

result = Math.log2(8); //3

//How many times must we multiply 10 to get 1000?

result = Math.log10(1000) // 3  10*10*10
 
result = Math.log2(16) // 4 // 2*2*2*2=16
console.log(result)