

// Fibonacci 

// Problem ive a number 'n' find the first 'n' element of the fibonacci sequence

// what is fibonacci  each number is sequence of sum the preceding ones
// first 2 number is 0 and 1 

// fibonacci(2) = [0,1]
// fibonacci(3) = [0,1,1]
// fibonacci(7) = [0,1,1,2,3,5,8]

 function fibonacci (n){
    let result = [0,1]
  
    for(let i = 2 ; i<n; i++){
        result[i] = result[i-1]+ result[i-2]
    }
    return result

 } 

      
 console.log(fibonacci(2)) 
 console.log(fibonacci(3))    
 console.log(fibonacci(7))        
 
 // Big O(n) - Linear