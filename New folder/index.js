const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
const multer = require('multer');
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})

const uploader = multer({ storage: storage })

app.get('/', (req, res) => res.send('Hello World!'));

app.post('/save',uploader.single('file'),(req,res)=>{
    const obj ={
        name:req.body.username,
        filename:req.file.filename
    } 
    res.json({
        message:'File Uploaded Successfully',
        data:obj
    })
})

app.listen(port,()=>{
    console.log(`server is running at ${port}`)
})