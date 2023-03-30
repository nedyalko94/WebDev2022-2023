/*
Object 
key-value
not iterable

*/

const obj={
    name:"Bruce",
    age:25,
    "key-three":true,
    sayMyName:function(){
        console.log(this.name)
    }
}
obj.hobby = "football" // add value
delete obj.hobby // delete value

console.log(obj.name)
console.log(obj["age"])
console.log(obj["key-three"]) // not accessible with  dot
console.log(obj)
obj.sayMyName() // call a function from object


// Object.keys() , Object.values() , Object.entries()


/* Big-O
insert/remove - O(1)
Access - O(1)
constant
Search- O(n)
Object.keys -O(n)
Object.values-O(n)
Object.entries-O(n)
 linear


*/