var students = [
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
// console.log(students) 

// for(let i =0 ; i <students.length; i++ ){
//     console.log(students[i])
// }

 
// for( let i in students){ 
//     console.log(students[i])
// }

let car = {
    model:"c200",
    brand:"mercedes",
    color:"blue"
}

for(let value in car ){
    console.log(value)
    console.log(car[value])
}



// for( let value of students){
//     console.log(value.name)
// }