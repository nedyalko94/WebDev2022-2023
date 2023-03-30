const express = require('express')
const app = express()
const port = 3000
const {db} = require('./MySQL') 

app.use(express.json())

// https://stackoverflow.com/questions/50093144/mysql-8-0-client-does-not-support-authentication-protocol-requested-by-server

  // create db

//   db.query("CREATE DATABASE cars",function(err,result){
//     if (err) throw err;
//     console.log("db created")
// })


// db.query("CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))",(err,result)=>{
//     if (err )throw err
   
//     console.log(result);

// })



app.get('/', (req, res) => res.send('Hello World!')) 

app.get('/1', (req, res) => {
    db.query("SELECT * FROM mercedes",(err,result)=>{
        console.log( result)
        //  взимаш ресултата от едната  база дани 

        //  и пишеш в другата .....  било то Mongo ili  SQL 
        
        // .....
        res.json({queryResult:result})

    })


})
app.post('/2',(req,res)=>{
    console.log(req.body)
    const {model,year_of_production,price,car_description} = req.body
    db.query(`INSERT INTO mercedes (model,year_of_production,price,car_description)
    VALUES("${model}",${year_of_production},${price},"${car_description}");`,(err,result)=>{
        if (err) throw err
        res.json({data:result})
    })
    
})
app.post('/login',(req,res)=>{
    console.log(req.body)
    const {username,password} = req.body
    db.query(`SELECT * FROM Users WHERE userName ="${username}" AND userPassword ="${password}";`,(err,result)=>{
        if (err) throw err
        res.json({data:result})
    })
})
//  sql injection work with 	
// "id":"105 OR 1=1"

app.post('/id',(req,res)=>{
    console.log(req.body)
    const {username,password,id} = req.body
    db.query(`SELECT * FROM Users WHERE id = (${id});`,(err,result)=>{
        if (err) throw err
        res.json({data:result})
    })
})


app.put('/3',(req,res)=>{ 
    console.log(req.body)
    const {model,year_of_production,price,car_description,id} = req.body
    db.query(`UPDATE mercedes
    SET model="${model}", year_of_production=${year_of_production},price=${price},
    car_description="${car_description}" WHERE id = ${id};`,
    (err,result)=>{
        if (err) throw err
        db.query(`SELECT * FROM mercedes WHERE id = ${id}`,(err,result)=>{
            if(err)throw err
            res.json({changes:result})
        })
     
        // res.json({data:result.info})
    })


})
app.get('/model', (req, res) => {
    db.query("SELECT model AS Model FROM mercedes ",(err,result)=>{
        if(err) console.log(err)
        res.json({result:result})
    })


})

app.get('/modelAndPrice', (req, res) => {
    db.query("SELECT model AS Model,price AS Price  FROM mercedes ",(err,result)=>{
        if(err) console.log(err)
        res.json({result:result})
    })


})

app.listen(port, () => console.log(`sql test server is running at  ${port}!`)) 