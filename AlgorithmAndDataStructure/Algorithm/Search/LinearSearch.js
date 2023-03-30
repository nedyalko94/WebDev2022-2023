// problem 
// solve 
// determine big O



/*
problem given an array of "n" elements and a target element "t" find the index of "t" in the array
Return -1 if the target element is not found

arr = [-5,2,10,4,6] 
t = 10
should return 2 

*/

// option 1 

let arr = [-5,2,10,4,6] 
function LinearSearch(input){
    for(let i = 0;i<=arr.length;i++ ){
        if(arr[i]==input) return i

    }
    return -1
}

console.log(LinearSearch(20))


// option 2 
function LinearSearch2(arr,input){
    for(let i = 0;i<=arr.length;i++ ){
        if(arr[i]==input) return i

    }
    return -1
}


console.log(LinearSearch2([-5,2,10,4,6] ,6))
console.log(LinearSearch2([-5,2,10,4,6] ,10))
console.log(LinearSearch2([-5,2,10,4,6] ,20))


// big O  is O(n)