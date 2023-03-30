let people = [
    {
        name:"john",
        age: 35,
        job: "web Developer"
    },
    {
        name:"Anna",
        age: 25,
        job: "Nurse"
    },
    {
        name:"Bruce",
        age: 35,
        job: "Electrician"
    }
]

//map take array with objects and return array  with only the names
// same length just conversion
const names = people.map((person)=> person.name)

//console.log(names)

// filter method

const over30 = people.filter ((person)=> person.age >30)

//console.log(over30)


// chain map and filter  for getting  array with exact information (array with only names of people over 30 )

let peopleOver30 = people.filter((person)=> person.age >30).map((person)=> person.name)


//console.log(peopleOver30)

//reduce   //is use to reduce down array to single value 
// reduce((total,person,index,array)) 4 possible value

//total is our variable where we gonna store our final result
// you can set value for total mine is 0 at end of arrow function
const totalAge = people.reduce((total,person)=>{return total+person.age},0)

//console.log(totalAge)

// another example of reduce wit string

const allName = people.reduce((total,person)=>{return total + " "+ person.name},"")

//console.log(allName)

//reduceRight 

const numbers = [2, 45, 30, 100]; 
 let numbersResult = numbers.reduceRight(getSum);

 // with function outside
function getSum(total, num) {
  return total - num;
}

//console.log(numbersResult)

// inside no declaration of variable take first value as default
let num = numbers.reduceRight((total,num)=>total-num)

console.log(num)

// reduce with object 

const peopleGr = people.reduce((groupedPeople,person)=>{
    const age = person.age
    if(groupedPeople[age]==null)
    // check if we have  key with the age of person 
    groupedPeople[age]=[]
    // if we don't have it we make new array 
    groupedPeople[age].push(person)
    // push the person  in  the object with his age key 
    return groupedPeople
},{})

console.log(peopleGr)


