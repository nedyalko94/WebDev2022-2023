let product = [
    {
        "_id": "635b0f499e897544b33951b6",
        "Name": "1",
        "Brand": "1",
        "CountOfStock": 2,
        "Categories": "1",
        "Description": "sdfsd",
        "Price": 2,
        "Rating": 0,
        "NumberOfVote": 0,
        "Picture": "storage\\electriciti.JPG",
        "__v": 0
    },
    {
        "_id": "635b0f4a9e897544b33951b8",
        "Name": "1",
        "Brand": "1",
        "CountOfStock": 2,
        "Categories": "1",
        "Description": "sdfsd",
        "Price": 2,
        "Rating": 0,
        "NumberOfVote": 0,
        "Picture": "storage\\electriciti.JPG",
        "__v": 0
    },
    {
        "_id": "635b0f4a9e897544b33951ba",
        "Name": "1",
        "Brand": "1",
        "CountOfStock": "2",
        "Categories": "1",
        "Description": "sdfsd",
        "Price": 2,
        "Rating": 0,
        "NumberOfVote": 0,
        "Picture": "storage\\electriciti.JPG",
        "__v": 0
    },
    {
        "_id": "635b0f4a9e897544b33951bc",
        "Name": "1",
        "Brand": "1",
        "CountOfStock": 2,
        "Categories": "3",
        "Description": "sdfsd",
        "Price": 2,
        "Rating": 0,
        "NumberOfVote": 0,
        "Picture": "storage\\electriciti.JPG",
        "__v": 0
    },
    {
        "_id": "635b0f4a9e897544b33951be",
        "Name": "1",
        "Brand": "1",
        "CountOfStock": 2,
        "Categories": "55",
        "Description": "sdfsd",
        "Price": 2,
        "Rating": 0,
        "NumberOfVote": 0,
        "Picture": "storage\\electriciti.JPG",
        "__v": 0
    },
    {
        "_id": "635b0f4a9e897544b33951c0",
        "Name": "1",
        "Brand": "1",
        "CountOfStock": 2,
        "Categories": "3",
        "Description": "sdfsd",
        "Price": 2,
        "Rating": 0,
        "NumberOfVote": 0,
        "Picture": "storage\\electriciti.JPG",
        "__v": 0
    },
    {
        "_id": "635b7df49e897544b33951cd",
        "Name": "asdasd",
        "Brand": "asdasd",
        "CountOfStock": 1,
        "Categories": "2",
        "Description": "1",
        "Price": 1,
        "Rating": 1,
        "NumberOfVote": 1,
        "Picture": "storage\\favi.JPG",
        "__v": 0
    }
]

// date 
let today = new Date("2022-12-28T06:21:23.319Z").toLocaleString('nl-BE', { timeZone: 'Europe/Brussels', day: '2-digit', month: 'long', year: 'numeric' })	

  
console.log(today) 

newArray = array.map(e=>e.test)

// console.log(newArray) 

 
let lil = [1,2]
let pass = "alkjsdnalks3"
let rea = [...lil,10]

// /[a-zA-Z]/
// console.log(rea)   
// array
// result = string.match(/e+/g) 

// console.log(lil.includes(/^([0-9]+[a-zA-Z]+|[a-zA-Z]+[0-9]+)[0-9a-zA-Z]*$/))  
// console.log(password.match(/\d/g))  
// console.log(password.match(/[0-9]|[A-Z]/g))  
// console.log(password.match(/[A-Z]/g))  


// /\d/
let password = 'nedyalkotodorovgmailcomA!1'

function PasswordCheck (){
if (password.match(/[A-Z]/g) ===null  
|| password.match(/[1-9]/g) ===null 
|| password.match(/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/g) === null 
)
{
  return console.log("error")
}else{
  return console.log("success")

}
}
// PasswordCheck() 

let email = "nnt1494@gmailcom"
function EmailCheck (){
  if (
 
    // email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/g) === null 
    email.match(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/g) === null 
  )
  {
    return console.log("error")
  }else{
    return console.log("success",email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/g))
  
  }
  }
  EmailCheck() 



  // Calm Down - Lyrics video | Rema and Selena Gomez
  // https://codepen.io/srepollock/pen/VjxRza
  // https://codepen.io/kristen17/pen/ExpZXLz
