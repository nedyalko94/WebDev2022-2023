// src 
// https://www.youtube.com/watch?v=coqQwbDezUA&list=PLC3y8-rFHvwiRYB4-HHKHblh3_bQNJTMa&index=2&t=0s

/*
 1 What is Algorithm
     1.1 Math 
     1.2 Sort
     1.3 Search
     1.4 Misc. Algorithms and problem solving
    
 2 Measuring performance 
 3 Time Space complexity 
 4 Big O notation
*/


/* 1 What is algorithm  set of well-defined instruction


input  follow by - algorithm and  - output 

algorithm should be language independent set of  (instruction) 


*/


/*Algorithm Time and space complexity

Analysis Algorithm
count
* Program lang 
* the pc running 
* other program running at same time 
* quality of operating system
* and other factor

time complexity -  amount the time taken by an algorithm to run , as function of input size
space complexity -  amount of memory taken by an algorithm to run , as function of input size 

how to represent comlexity ? 

Asymptotic notations
    - Mathematical tools to represent time and space complexity 
    1. Big-O Notation (O-notation) - Worst case complexity 
    2. Omega Notation ( Ω - notation) - Best case complexity
    3. Theta Notation ( Θ -notation) - average case complexity


    we are primary focus on worst case  big-O
*/

//  Big-O notation -worst case complexity of algorithm

/* it has 2 important  characteristics
1 it is expressed in terms of the input
2 it focusses on the bigger picture without caught up in the minute details 


*/
// Big-O time complexity  calc

function summation (n){
    let sum = 0 
    for (let i = 1 ; i <=n;i++){
        sum  += i
    }
    return sum

}

//example 
console.log(summation(4)) // 1+2+3+4 = 10

// count the number of times a statement executes based on the input size 

// the function has 3 think to do 1. declare the variable (sum) ; 2. make the calculation sum += i ;  3 return the value  

function summation (n){   //  n=4
    let sum = 0  // execute 1 time 
    for (let i = 1 ; i <=n;i++){
        sum  += i //execute 4 time 
    }
    return sum // 1 time 

}

// total time is n + 2 

// + 2 is not important because is static 

/* 
Time complexity is 

    O(n) - Linear 
    with means as n grown  the time complexity grown
*/

// another example 

function summation2(n){
    return (n*(n+1))/2 // Time complexity is 1  no matter of n because this line execute once  O(1)
}

// if there is 2  loop time complexity is quadratic O(n2) 3n2+5n+1
let n = 1
for( let i = 1; i<=n; i++){
    for( let j=1; j<=i ; j++){

    }
}

// if there are 3 nested loop is cubic time complexity O(n3)

// if size reduces by half every iteration time complexity O(logn) Logarithmic


//Space complexity the idea sta same  
// if algorithm don't need extra space or don't depend of input size  is constant


/*
 O(1) - Constant
example will be sorting algorithm  that sort in to  array and don't  need to declare another array
O(n) - Linear as input size grows
O(logn) - Logarithmic grown but not  in the same rate as input size 

 
*/

/*Big O trend
best to worst performance 
O(1) -Constant 
O(log n) - Logarithmic
O(n) - Linear
O( n log n)
O(n^2)
O(2^n)
O(n!)

*/

//  there is no perfect solution depends of the situation