

// factorial of 0 is equal to 1
// factorial is  factorial of 4 is 1*2*3*4  = 24
//factorial(5)  1*2*3*4*5 =120

// base case 
// figure out how to break down the problem into smaller versions of the same problem
/*

Factorial(0) =1 //1
Factorial(1)=1*1 // 1*1
Factorial(2)=2*2 // 2*1
Factorial(3)=3*2 // 3*2*1
Factorial(4)=4*3 // 4*3*2*1
Factorial(5)=5*4 // 5*4*3*2*1

*/





//Fn =  n*(n-1)

function recursiveFactorial (n){
    if (n ===0) return 1 ;
    return n*recursiveFactorial(n-1)

}

console.log(recursiveFactorial(0))
console.log(recursiveFactorial(1))
console.log(recursiveFactorial(5))

// big O is O(n)
