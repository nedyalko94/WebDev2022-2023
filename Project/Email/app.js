const express = require('express')
const {SendEmail} = require('./Nodemailer')
const cors = require('cors')

require("dotenv").config()
const app = express()
app.use(express.json())
app.use(cors({
    origin:"*",
    'Access-Control-Allow-Origin':"*"
}))



app.post('/',async(req,res)=>{
    console.log(req.body)

    const html = ` <h1> Subject: ${req.body.subject}</h1>
                    <h4>Send from :${req.body.email}</h4>
                    <p>${req.body.message}</p>`
   try {
    await SendEmail(req.body.subject,html,req.body.message)
    // req.body.email,
    res.json({msg:'email was send successfully'})
    
   } catch (error) {
    res.json({msg:'fail to send email'})
    
   }
   
})

const port = process.env.PORT || 10000
app.listen(port,()=>{
    console.log(`server is running at  ${port}`)
})     
 
//SenderEmail,subject,text
