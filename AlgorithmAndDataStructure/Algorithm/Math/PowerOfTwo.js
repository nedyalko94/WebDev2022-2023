

// problem  given a positive integer "n" determine if the number is a power of 2 or not 
// an integer is a power of two if there exist an integer "x" such that "n" === 2x

// isPowerOfTwo(1) = true (2^0)



function isPowerOfTwo(n){
    if(n<1) return false;

    while(n>1){

        if(n%2 !== 0){

            return false
        }

        n=n/2
    }
 return true
}

console.log(isPowerOfTwo(1)) // true
console.log(isPowerOfTwo(2)) // true
console.log(isPowerOfTwo(5)) // false 


//big-O  O(log n ) because is / by 2 


function BitwisePowerOfTwo(n){
    if(n<1) return false 
    return(n & (n-1)) === 0
}

//Constant O(1)