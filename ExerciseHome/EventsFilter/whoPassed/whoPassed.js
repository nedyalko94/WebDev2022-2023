

var _students = [
    {
        id:1,
        name:'avarel',
        course:'javascript',
        score:45
    },
    {
        id:1,
        name:'mike',
        course:'java',
        score:55
    },
    {
        id:1,
        name:'george',
        course:'javascript',
        score:66
    },
    {
        id:1,
        name:'joe',
        course:'python',
        score:70
    }
]
var myInput = document.getElementById("myInput")
var myButton=document.getElementById("myButton")
var myResult=document.getElementById("myResult")

function whoPassedExam (PassedStudent){
    var myInputNum = parseFloat(myInput.value) 
 var PassedStudent=_students.filter(pass=>pass.score>=myInputNum)
 

  console.log(PassedStudent)

    myResult.innerHTML=PassedStudent.map(pass=>pass.name+ " " + pass.score)
}
myButton.addEventListener("click",whoPassedExam)



// whoPassedExam?
// function whoPassedExam(param){

// }
// 
// console.log(whoPassedExam(_students))

// https://stackabuse.com/how-to-filter-an-object-by-key-in-javascript/



// var array = 
//         [-1, -4, 5, 6, 8, 9, -12, -5, 4, -1];
//     var new_array = array.filter(element => element > 5)
//         console.log(new_array)


 //filter  + arrow function 
        // var age = [5,3,10,18,26,65]

        // var old = age.filter(num1=>num1>=18)
        // console.log(old)

        

