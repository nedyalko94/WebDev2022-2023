/*
Map

A map is an unordered collection of key-value pairs. Both keys and value can be of any data type

To retrieve  a value, you can use the the corresponding key 

Map are iterables. They can be used with a for of loop

---------------Map vs Object---------------------------------

Object are unordered whereas maps are ordered.

Keys in object can only be string or symbol type whereas in maps , they can be of any type.

An object has prototype and may contain a few default keys which may collide with your own keys
if you're not careful. A map on the other hand does not contain any keys by default
Objects are not iterables where as maps are iterables.
The number of items in an object must be determined manually where as it is readily available 
with the size property in a map 
Apart from storing, data you can attach functionality to an object whereas maps are restricted to just 
storing data .


*/


const map = new Map([["a",1],["b",2]])

map.set("c",3) // add value
// console.log(map.has("a")) // check if it has 
map.delete('c') // delete
// console.log(map.size) // size
// map.clear() // clear the map
 console.log(map.get("a")) 

for(const [key,value]of map){
    console.log(`key:${key} : value: ${value}`)
}

