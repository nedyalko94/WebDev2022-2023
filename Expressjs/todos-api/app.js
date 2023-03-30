const express = require("express")
const mongoose = require("mongoose")
require('dotenv').config()
const app = express()
const TodoModel = require("./model")
mongoose.connect(process.env.MONGO_URI, (err) => console.log("connected"))
const {home,todos,saveTodo,notfound} = require('./controller')
app.use(express.json())


// for all http  /// dns ... // middleware
const cors=require('cors')
app.use(cors({
    origin:"*"
    // origin:"http://yourdns.com"
}))

app.get('/', home)

// get all todos
app.get('/todos', todos)

// save a todo
app.post('/todo', saveTodo)

// not found endpoint
app.get('*', notfound)

app.listen(process.env.PORT)


