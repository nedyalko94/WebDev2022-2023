

const express =require("express")
const mongoose=require("mongoose")


// connect to mongo 
mongoose.connect('mongodb://localhost:27017/TODOAPI',(err)=>{
    console.log('connected to MongoDB')
})
const app = express()

app.use(express.json())


// schema 

const todoSchema =mongoose.Schema({
    userId:Number,
    title:String,
    completed: Boolean,

})


// compile the schema from module
 const Todo = mongoose.model('Todo',todoSchema)


 const {home,poster} = require('./controller.js')
// test
app.get('/',home)

// post  new todo 

app.post('/todos',poster)

//get all  todos
app.get("/todos" , (req,res)=>{
    //retrive all post from mongodb and response  them as json

    Todo.find({})
    .then(todos=>{
        console.log(todos)
        res.json({
            message:'ok',
            data:todos
        })
    })


})

//modify

app.put('/todos/:id',(req,res)=>{
    const {id} =req.params
    Todo.findByIdAndDelete(id,req.body)
    .then(result=>{
        res.json({
            msg:'update',
            data:result
        })
    })
})

// delete 

app.delete('/todos/:id',(req,res)=>{
    const{id}= req.params
    Todo.findByIdAndDelete(id)
    .then(result=>{
        res.json({
            msg:'deleted',
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

// lisen the server   // port

app.listen(6969,()=>{
    console.log('welcome to ToDo server is running at 6969')
})    