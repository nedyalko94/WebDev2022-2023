myArr = [19,2,3,44,5,6,10]
myLetters=["x","b","a","e","f","g"]

myLetters.push("N") //add to the end
myLetters.pop() // remove from end
myLetters.shift() // remove from front 
 var result=myLetters.join( "2") // you have to save it to new var
 //console.log(result)

 myLetters.sort()  // alphabetical order
 myArr.sort(function(a,b){return a-b})   // or b-a so sort in reverse  function needed for numbers


console.log(myArr)


const items=[
    {
    name:'bike',
    price:100
    },
    {
        name:'tv',
        price: 200
    },
    {
        name:'Album',
        price:10
    },
    {
        name:'Book',
        price:5
    },
    {
        name:'Phone',
        price:500
    },
    {
        name:'Computer',
        price:1000
    },
  
]

//filter

// const itemName = items.filter((item)=>{return item.price <=100})
// console.log(itemName)

//map

// const itemName2 = items.map((item)=>{return item.name})
// console.log(itemName2)

//find

const itemName3 = items.find((item)=>{return item.name =='Album'})
console.log(itemName3)


const itemName4 = items.find((item)=> item.name =='Album')
console.log(itemName4)

// forEach

 items.forEach((e)=> console.log(e.name))
 items.forEach((e)=>{ console.log(e.name)})

 //some check if one of  is true return True /false
   let ItemPrice= items.some((e)=> e.price>1000)
    console.log(ItemPrice)

 //every check every single one and return true/false

 let ItemPrice1= items.every((e)=> e.price>0)
 console.log(ItemPrice1)


// reduce 

var totalPrice = items.reduce((currentTotal,item)=>{
 
    return  item.price + currentTotal
},0)

console.log(totalPrice)

// option 2 reduce
const total = items.reduce((currentTotal, item) =>  item.price + currentTotal , 0)
console.log(total)

// includes 
let number = [ 1,2,3,4,5,6,76] 

 let check=number.includes(5)
console.log(check)