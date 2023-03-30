
// Problem give a natural number 'n' determine if number is prime or not 


function isPrime (n){
    if (n<2) return false

    for(let i = 2;i <n; i++){
           if(n%i == 0 ){
            return false
           } 
    }
   return true
    
}

console.log(isPrime(1))
console.log(isPrime(5))
console.log(isPrime(4))


// Big-O is O(n) Linear

//better
// big-o = O(sqrt(n))


function isPrime2 (n){
    if (n<2) return false

    for(let i = 2;i <=Math.sqrt(n); i++){
           if(n%i == 0 ){
            return false
           } 
    }
   return true
    
}