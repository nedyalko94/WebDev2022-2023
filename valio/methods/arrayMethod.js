// array method 
var result;
var myArr=[]
var myNumber = [5,2,3,5,11,7,1]
var myLetters = [ "k", "a", "c", "f", "d", "x" , "y"]

myArr.push(1)
myArr.push("a")
myArr.push(true)
myArr.push(null)
myArr.push ("hi")
myArr.push({name:"john"})
result = myArr

//pop method  remove the last element from array 
myArr.pop()

// shift method first added element is removed
myArr.shift()

//join method  join the array
result = myArr.join("+")

//sort
result = myLetters.sort() //alphabetical order

result = myNumber.sort(function(a,b){return a-b})   // or b-a so sort in reverse  function needed for numbers

//concat is for merge 2 string or array 
result=myNumber.concat(myLetters)


//iteration method { for , forEach, map, filter, reduce, every , some }


// for
        for(var i=0 ; i<result.length ; i++){
       // console.log(result[i])
        }




var total=0
     for(let i=0;i<myNumber.length;i++){
    //console.log(myNumber[i])
    total+=myNumber[i]
   // console.log(total)  // if it's inside will show every loop
}
  // console.log(total)// when is outside will show only result 


  //for each

  myNumber.forEach((num)=>{
    total+=num

  })
  //myNumber.forEach((e)=> total+=e)

   //console.log(total)

//filter method is to filter and req function inside 
result = myNumber.filter((e)=> e >5 )

//another example 
let myWord = [ "hello", "bye", "you", "house", "televisor","kitchen"]

// filter and return word that have length bigger than 4 letter
result = myWord.filter((word)=>{
   let shortWord =  word.length > 4
 return shortWord
})


 // map  is taking value and convert it to another   // in this case we get length of every single word 
 result = myWord.map((word)=>{
    let shortWord =  word.length 
  return shortWord
 })

 //reduce  // have 4 value total number array and index 
 // reduce reduce to single value 


// reduce myNumber array  to sum of it 
 result = myNumber.reduce((total,number)=>total+number ,0)


// some  check if any of it is true and return boolean
result = myNumber.some((number)=> number >10)

//every check if every one is true  return boolean  1 false = false 
result = myNumber.every((number)=> number>5)



// indexOf("value",start)

result = myWord.indexOf("house",1)

// find   return first that is true 
result=myNumber.find((num)=> num >5 )

 //findIndex() loop and return the index 
  myWord = [ "hello", "bye", "you", "house", "televisor","kitchen"]

 result = myWord.findIndex((word)=> word.length>5)

 // Array.from("ABCDEFG");
 // creating array from string 

 let myString = " hello my name is "

 result = Array.from(myString)

 // include() check and   return boolean 
result = myWord.includes("hello")
 console.log(result)

