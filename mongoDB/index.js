/* 
npm i express --save
npm i mongoose --save

or together

npm i express mongoose --save 


*/

 const express = require("express")
 const mongoose = require("mongoose")

 const app = express()


 //express module for parse  
app.use(express.json())

// create post schema

const postSchema = mongoose.Schema({
    title:String,
    content: String,
    date: String

})

// compile
const Post= mongoose.model('posts',postSchema)



// mongoDB
mongoose.connect('mongodb://localhost:27017/DBExpress',(err)=>{
    console.log('connected to db')
})


app.get("/",(req,res)=>{

    res.send("Newspaper base api page  ")
    // res.json({
    //     data:req.body
    // })
})

app.get("/post" , (req,res)=>{
    //retrive all post from mongodb and response  them as json

    Post.find({})
    .then(posts=>{
        console.log(posts)
        res.json({
            message:'ok',
            data:posts
        })
    })


})

//http://localhost:8080/post/6332a8ab8aca5b4333a81fb9
app.post('/post',(req,res)=>{
    const { title,content} = req.body
    const post = new Post({title,content,date:new Date()})
    post.save()
    .then(answer => {
        res.json({
            msg:'saved',
            data:answer
        })
    })
})


app.delete('/post/:id',(req,res)=>{
    const{id}= req.params
    Post.findByIdAndDelete(id)
    .then(result=>{
        res.json({
            msg:'delete',
            data:result
        })
    })
})

app.put('/post/:id',(req,res)=>{
    const {id} =req.params
    Post.findByIdAndDelete(id,req.body)
    .then(result=>{
        res.json({
            msg:'update',
            data:result
        })
    })
})




// not exist
app.all('*',(req,res)=>{
    res.json({
        msg:"not found"
    })
})


 //set lisen port

 app.listen(8080,()=>{
     console.log(" server is running on 8080")
 })