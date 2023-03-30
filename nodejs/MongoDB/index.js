// https://www.npmjs.com/package/mongoose 

// npm i mongoose

//show dbs

//   https://mongoosejs.com/docs/index.html

//https://www.mongodb.com/try/download/tools shell 


//https://mongoosejs.com/docs/index.html


// 2 extension 


const mongoose = require('mongoose');


main().catch(err => console.log(err));
async function main() {


     mongoose.connect('mongodb://localhost:27017/myMongoDB', (err) => {
        if (err) {
            console.log('fail')
        }else{
            console.log('connected')
        }
    });


}


//create your schema here !
const users = new mongoose.Schema({
    username:{
        type:String,
        required:false},
    password:String,
    age:Number,
    isAdmin:Boolean,


})



//###################################################################### compile it to model 

//first is colect name 2 my schema model
//we use schema for creating our db
const Users = mongoose.model( 'Users',users)
//create record
const user1 = {
    username:'admin',
    password: 'myrandompassword',
    age:10,
    isAdmin: false 
}
const _user1 = new Users(user1)

//save to db

 _user1.save()
.then (res=>{
    console.log(res)
})

Users.findOne({
    username:'Admin' // look for  match if exist don't create 
})
.then(user=>{
if(user!==null )
{ console.log('this user exist ')}
else{
    console.log('username is unique')
    //save
    new Users({
        username:'Admin', // new user if findOne is == to null   
        password: '23232',
        age:20,
        isAdmin: true
    }).save().then((newUser)=>console.log(newUser))
}
}) 



// Users.find({})
// .then(res=>{
//     console.log(res) // all record
// })

// Users.find({
//     _id:'63285e68b2b0d3b5e5e429ed'
// })


// Users.find({})
// .then(res=>{
//     console.log(res) // all record
// })

// Users.find({
//     password:'1234'
// })

//find by id and delete

// Users.findByIdAndDelete('63285eabbfb1bf0a04f72a9a')
// .then(res=>{
//     console.log(res,'deleted')
// })

//delete many ##################### delete All

// Users.deleteMany({},(err)=>{
//      console.log('delete all')
// })



// user  user password  user 