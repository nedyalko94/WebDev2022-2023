
// first two number is 0 and 1 
// and following 2 are  sum of previous 2 

//base case F0 = 0 and F1 = 1 
// Fn = Fn-1 + Fn-2


// no base case  infinitive loop


// function recursiveFibonacci(n){
//  return recursiveFibonacci(n-1)+recursiveFibonacci(n-2)
// }

// with 

function recursiveFibonacci(n){
    if(n<2) return n 
    return recursiveFibonacci(n-1)+recursiveFibonacci(n-2)
   }

console.log(recursiveFibonacci(0))
console.log(recursiveFibonacci(1))
console.log(recursiveFibonacci(3))


/*
with normal function big O is O(n)
with recursive big O  is O(2^n) very bad 
*/