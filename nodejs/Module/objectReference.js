

const obj1  = {
    name:'Bruce'
}

const obj2 = obj1
// change the obj2  is the  same like just  export thats why is better to use module.exports to prevent mistake
obj2.name = 'Clark' // this change obj1


console.log(obj1)


let obj3 = obj1
obj3 = {name:'Maria'} // this don't change obj1 

console.log(obj1,obj3)

