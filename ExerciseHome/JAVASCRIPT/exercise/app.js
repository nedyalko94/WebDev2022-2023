
//  //Bmi function
//  function BMI(weight, height) {
//     var bmi = weight / (height * height);
    
//     return bmi
//   }
//    console.log(BMI(90,174))
// Bmi function

//    const GetBMI  = (weight,height) =>weight /(height*height)
// console.log (GetBMI(90,174))

// Salary
// function Salary(GrossSalary, tax) {
//     var NetSalary = GrossSalary - ((tax / 100)*GrossSalary);
    
//     return NetSalary
//   }
//    console.log(Salary(3000,21))

// // salary 2 
  //  const SalaryNet =(GrossSalary,tax)=> GrossSalary - ((tax/100)*GrossSalary)

  //  console.log (SalaryNet(3000,21))
   



  //  const basket = (Price , number) => Price * number
    
  // console.log (basket(5,4))

//Average of three
//   function Average_of_three (num1, num2, num3)
//   {
//    var summary = num1+ num2+ num3
//    var average = summary/3
//    return average 
// }
// console.log (Average_of_three(5,10,15))

//Is Div by 5 

// function is_div_by_5 (number){

//   if (number % 5==0)
//   {

//   return true
// }

//   else
//   {
//     return false
//   }

//   }
// console.log (is_div_by_5())



// function is_div_by_5_Or_3 (number){

//   if (( number % 3==0 || number % 5 == 0) &&  !(number % 3==0 && number % 5 == 0))
//   {

//   return true
// }

//   else 
//   {
//     return false
//   }

//   }
// console.log (is_div_by_5(20))

//Function
// function is_div_by_3_5 (num)
// {
//   if ( num%3 ==0 || num%5==0 )
//   {
//     return true
//   }
//   else{
//     return false
//   }
// }
//console.log(is_div_by_3_5(20))

// function is_div_by (num){
// if ( (num %3 ==0 || num % 5 ==0) && !(num%3==0 && num%5 ==0))
// {
//   return true
// }
// else {return false }
// }
// console.log(is_div_by())


// function WordLength(word)
// {
//  return console.log(word.length)
// }
// console.log(WordLength("im"))


// Display numbers which are divisible by 5 and if you find number greater than 150 stop the loop iteration BO-WEBDEV-ENG-22-mei

// const numbers = [12, 15, 32, 42, 55, 75, 122, 132, 150, 180, 200]
//   let Right_num = numbers.filter(num=>num%5==0 && num<=150 )
//   console.log(Right_num)

  
  // function Factorial(n) {
  //   if (n <=0)
  //   return "Mission impossible";
  // for (let i = n - 1; i >= 1; i--)
  // n = n * i;
  // return n;
  // }
  // console.log(Factorial())

  // function Factorial(n) {
  //   if (n < 0) {
  //         return "Please don't use a negative number";
  //    }
  //   else if (n == 0) {
  //       return 1;
  //    }
  //     else {
  //         return (n * Factorial(n - 1));
  //    }
  // }
  // console.log(Factorial(3))

  // function SumNum (num){
  //   let i = 1
  //   let SumNumbers = 0
  //   while (i <=num)
  //   {
  //       SumNumbers +=i
  //        i+=1
  //   }
  //   return SumNumbers
  // }
  // console.log(SumNum(5))


//   function factorial(num){
// fac=1
//   i=1
//   while (i <=num)
//   {
//     fac*=i
//     i+=1
//   }
//   return fac 
// }
// console.log (factorial(5))

// function doubler(numbers){
//  let i=0
//  let arr=[]
//   while(i < numbers.length) 
//   {
//    let one = numbers[i]*2
//     arr.push(one) 
//     i+=1
// }
//   return arr

// }
// console.log (doubler([1, 2, 3, 4])) //# => [2, 4, 6, 8]

// console.log (doubler([7, 1, 8]))   // # => [14, 2, 16]


// Greatest Factor Array
// Write a method greatest_factor_array that takes in an array of numbers and returns a new array where every even number is replaced with it's greatest factor. A greatest factor is the largest number that divides another with no remainder. For example the greatest factor of 16 is 8. (For the purpose of this problem we won't say the greatest factor of 16 is 16, because that would be too easy,)


// function greatest_factor_array(arr){
// newArr=[]
// i=0
// while (){

// }

// return newArr
// }
// console.log(greatest_factor_array([16, 7, 9, 14])) // # => [8, 7, 9, 7]

// console.log(greatest_factor_array([30, 3, 24, 21, 10])) // # => [15, 3, 12, 21, 5]



let  myHeader= document.getElementById("h1")
myHeader.style.fontSize='40px'
myHeader.style.backgroundColor='red'

function changeWidth(){
  myHeader.style.width="400px"
  myHeader.style.borderRadius="10px"
  myHeader.innerHTML="Hi this is mod by js"
}

myHeader.addEventListener('mouseover',changeWidth) 
myHeader.addEventListener('mouseout',()=>{myHeader.style.width="100%",   myHeader.innerHTML="Hello world "
}) 