// test and learn bcrypt module
const bcrypt =require('bcryptjs')

const user_passwords = 'abs123'
// hashing plaintext passwords 
bcrypt.hash(user_passwords,10)
.then(result=>{
    // console.log(result)
    console.log(` before \n ${user_passwords} \n afther \n ${result}`)
})

 const passwordSendFromFront = 'abs123'
 //$2a$10$X9k/9QFG.32O968fHTacKOuJIXryzS8QGoHItvkDFB5ZShquGWgoG


 // compare 2 password from front end and from DB 
 bcrypt.compare(passwordSendFromFront,'$2a$10$X9k/9QFG.32O968fHTacKOuJIXryzS8QGoHItvkDFB5ZShquGWgoG')
 .then(result=>{
    console.log(result)
    // return boolean if it's same or not  true/false 
 })