//!      new type of comment 
//Todo   nice 
//*      this comment 
//?      blue comment 
// @param myParam   

const express = require('express')
const app = express()
const port = process.env.PORT || 6969

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))

app.use(express.json())
app.use(express.static('public'))
app.get('/', (request, response) => {
     
})
