

/*Set

A set is a data structure that can hold a collection of values. The values however
must be unique.

Set can contain mix of different data types. You can store  mix values in same set 

Set are dynamically sized. You don't have to declare the size of a set before creating it 

Set do not maintain an insertion order 

Sets are iterables. They can be used with a for of loop



Set vs Array

Arrays can contain duplicate values whereas Sets cannot 
Insertion order is maintained in arrays but is not the case with sets
Searching and deleting an element in the set is faster compared to arrays


*/


const set = new Set([1,2,3])

set.add(4) //add value 
set.add(4) //can't be add twice duplicate value 
console.log(set.has(4)) // check if it has value
set.delete(3) // delete
console.log(set.size) // size check
set.clear() // clear the set


for(const item of set){
    console.log(item)
}
