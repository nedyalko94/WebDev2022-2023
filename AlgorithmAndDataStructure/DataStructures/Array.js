

/*
Array
     can hold collection of value
     mix of different value
     size is resizable
     zero-indexed and the insertion order is maintained
     array is iterables they can be used with a for of loop



*/



const arr = [1,2,3,'Dishwasher']

// console.log(arr[0])

arr.push(4) // add at back
arr.unshift(0) // add at start
arr.pop() // remove from end 
arr.shift() // remove from start
arr.splice(1,0,"hello") // add element/s or remove element/s first value for add second for remove and 3..4...5.. for what to add 
//The slice() method returns selected elements in an array, as a new array.
//array.slice(start, end)
 const myArr=arr.slice(0,2) //default start is 0   2 is not include
console.log(myArr)
for(const item of arr){
    console.log(item)
}

// map ,filter ,reduce ,concat ,slice , splice


/*Big-O
insert remove from end (push , pop)   O(1)
Access O(1)
Big-O is constant

insert/remove O(n)
Search O(n)

shift,unshift,concat,slice,splice ,forEach , map , filter ,reduce - O(n) Linear

with for each /map and loop inside  is quadratic
*/