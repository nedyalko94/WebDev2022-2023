let student = {
  name: "Ned",
  age: 30,
  city: "Brussel",
  origin: "Bulgaria",
  courses: ["html", "css", "js"],
  address: {
    city: "Lviv",
    street: "Shevchenko",
  },
};

//display nested object value 
// for(var key in student){
//    //  console.log(key)
//     // console.log(student[key])
//      if(key === 'address'){
//          for(var key2 in student[key]){
//             // console.log(student[key][key2])

//          }
//      }
//  }



// for in loop go throw  keys
// for in loop change the value of key

// for (var key in student) {
//   if (key == "origin") {
//     student[key] = "This key value was change ";
//   }
// }

// console.log(student);



// function UpdateData(obj,key,newValue){
//     return obj[key] = newValue;
// }
// UpdateData(student,'address',{city:'Brussels',street:'Stalingrad'})
// UpdateData(student,'courses',['python','django'])
// UpdateData(student,'origin','Belgium')
// console.log(student)


// delete the key 


//for of 
let arr = [1,2,3,4,5]

for(var key of Object.keys(student)){
    console.log(student)
}

for (var key of arr){
    console.log(key)
   
}
for(var key in arr){
   console.log(key)
}
