// Packages
// const { application } = require('express');
// const express = require('express')
// const app = express()
const Instagram = require('instagram-web-api')
const FileCookieStore = require('tough-cookie-filestore2')
 
const { username, password } = process.env // Only required when no cookies are stored yet
 //, cookieStore:cookieStore
const cookieStore = new FileCookieStore('./cookies.json')
const client = new Instagram({ username:username, password:password , cookieStore:cookieStore})
 
;(async () => {
  // URL or path of photo
  const photo ='./photos/one.jpg'
 
  await client.login()
 
  // Upload Photo to feed or story, just configure 'post' to 'feed' or 'story'

// app.post('https://www.instagram.com/p/')

  const { media } = await client.uploadPhoto({ photo: photo, caption: 'testing', post: 'post' })
  console.log(`https://www.instagram.com/p/${media.code}`)})()

  app.listen(5000,()=>console.log('hi'))