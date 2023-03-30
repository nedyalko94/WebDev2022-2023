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

app.use('/news',createProxyMiddleware({
    target:'https://newsapi.org/v2/everything?q=tesla&from=2022-08-29&sortBy=publishedAt&apiKey=c433bc96538b4ae4b922f161e10a3114',
    pathRewrite:{['/news']:''} ,
    // http://localhost:6969/
     changeOrigin:true,
     secure:true
}))

app.use('// https://jsonplaceholder',createProxyMiddleware({
    target:'// https://jsonplaceholder.typicode.com/',
    pathRewrite:({['/jsonplaceholder']:''}),
    changeOrigin:true,
    secure:true
}))
//http://localhost:6969/news
app.listen(6969,()=>{
    console.log('server is running at 6969')
})



//http://localhost:6969/