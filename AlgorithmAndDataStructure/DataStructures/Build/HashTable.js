

/* Hash Table

A hash table also know as hash map , is data structure that is used store key-value pairs 

Given a key , you can associate a value with that key very fast lookup

Javascript object is a special implementation of the hash table data structure.
However , Object class adds its own keys. Keys that input may conflict and overwrite the inherited default properties


Map which were introduce in 2015 allow you to store key-value pairs 
Writing your own hash table implementation is a very popular JS interview question

Hash Table contd.

1. 'in' =>"india"
2. 'au'=>"Australia"
3. "fr"=>"France"
4. "it"=>"Italy"

We store the key value pairs in a fix sized array

Array have a numeric index

How do we go from using string as an index to number as an index ?

A hashing function accepts the string key, converts it into a hash code using a defined logic and then maps it into a 
numeric index that is within the bounds of the array 
Using the index , store the value
The same hashing function is reused to retrieve the value given a key 


hash table support 3 main function

    set to store a key-value pair 
    get to retrieve a value given its key
    remove to delete a key value pair 


Usage 
    Hash table are typically implemented where constant time lookup and insertion
    are require 
        
        Database indexing 
        Caches

*/

class HashTable{
    constructor(size){
        this.table = new Array(size)
        this.size = size
    }
    hash(key){
        let total = 0
        for(let i = 0 ; i <key.length; i++){
            total += key.charCodeAt(i)
        }
        return total % this.size
    }

    set(key,value){
        const index = this.hash(key)
        this.table[index] = value
    }
    get(key){
        const index = this.hash(key)
        return this.table[index]
    }
    remove(key){
        const index = this.hash(key)
        this.table[index] = undefined
    }
    display(){
        for(let i = 0; i< this.table.length;i++){
            if(this.table[i]){
                console.log(i,this.table[i])
            }
        }
    }


}

const table = new HashTable(50)

table.set('name','bruce') 
table.set('age',25)
table.display()  // display all 
console.log(table.get('name')) // get the value at key name

table.remove('name')
table.display()


// there is a bug  we use very simple hash function so if the key length is the same length 
// like the another one will overwrite example 'name' can be overwrite with 'mane'  this is call Collision
