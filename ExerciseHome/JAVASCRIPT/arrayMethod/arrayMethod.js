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
