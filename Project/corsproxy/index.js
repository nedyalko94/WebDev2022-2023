//c433bc96538b4ae4b922f161e10a3114
//$ npm i --save-dev http-proxy-middleware
// intecbrussel    https://newsapi.org/account

const express = require("express")
const cors = require("cors")
const {createProxyMiddleware}= require("http-proxy-middleware")
const app = express()

// middleware 
app.use(cors())
app.use(express.json())

// proxy server

app.use('/myProxy',createProxyMiddleware({
    target:'https://raspberry-eel-wear.cyclic.app/',
    pathRewrite:{['/myProxy']:''} , // http://localhost:4000/news
    // http://localhost:6969/
     changeOrigin:true,
     secure:true
}))
// https://raspberry-eel-wear.cyclic.app/
// app.use('/jsonplaceholder',createProxyMiddleware({
//     target:'https://jsonplaceholder.typicode.com/',
//     pathRewrite:({['/jsonplaceholder']:''}),
//     changeOrigin:true,
//     secure:true
// }))
//http://localhost:6969/news
app.listen(6969,()=>{
    console.log('server is running at 6969')
})



//http://localhost:6969/