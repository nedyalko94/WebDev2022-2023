var MyClickVar =document.getElementById("ClickHandler")
var MyInputVar = document.getElementById("InputHandler")
var myResultVar= document.getElementById("myResult")
var num= 0

//function for button click 

// function add ()
// {
    
//     num++
//     console.log( "hi there ", num)
// }

// function for text input 

// function myTextValue (){
//     console.log("hi" , MyInputVar.value)
// }

// MyInputVar.addEventListener("change",myTextValue)
// MyClickVar.addEventListener("click",add)

// Register function with  input and button click 

// function RegisterClickHandler(event){
//     console.log("register button clicked",MyInputVar.value)
// }
// MyClickVar.addEventListener("click", RegisterClickHandler)

// try 2 
// function register() {
//     console.log(" hello my friend", MyInputVar.value)
// }
// MyClickVar.addEventListener("click",register)

// try 3 with return my input value after button click in div
// function register() {
//     myResultVar.innerHTML = "hello " + MyInputVar.value   // work with + 
//   //  console.log(" hello my friend", MyInputVar.value)
// }
// MyClickVar.addEventListener("click",register)

// try 4 adding number on top of try 3

// var myNumber = 9


// function calc (){
//    var myInputNum = parseFloat(MyInputVar.value)
// myResultVar.innerHTML= myNumber + myInputNum

// }
//  MyClickVar.addEventListener("click",calc)

//try 5 with filter



function Drink(){
 age=parseFloat(MyInputVar.value)

myResultVar.innerHTML= "you can drink " + age
}
MyClickVar.addEventListener("click",Drink)







