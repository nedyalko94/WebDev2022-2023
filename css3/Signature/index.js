

let signature = document.querySelectorAll(".cls-1")
let signature0 = document.querySelectorAll(".cls-0")
let ned = document.querySelectorAll(".cls-4")

console.log(signature0)

let Total0 = 0 

signature0.forEach((ele)=>{
    Total0+= ele.getTotalLength()

   console.log(ele.getTotalLength())
   }
   )

   console.log(` Total for 0 : ${Total0}`)


let Total = 0 

signature.forEach((ele)=>{
    Total+= ele.getTotalLength()

   console.log(ele.getTotalLength())
   }
   )

   console.log(`Total for 1 :${Total}`)


//   another test


let NedTotal = 0 

ned.forEach((ele)=>{
    NedTotal+= ele.getTotalLength()

   console.log(ele.getTotalLength())
   }
   )

   console.log(` Total for NedTotal : ${NedTotal}`)



