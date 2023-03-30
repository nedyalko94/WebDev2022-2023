// process object

let commands = process.argv

console.log(commands)

// $ node tool.js  testt
// [
//   'C:\\Program Files\\nodejs\\node.exe',
//   'C:\\Users\\USER1\\Desktop\\work\\WebDevMay\\nodejs\\tutorial3\\tool.js',
//   'testt'
// ]


// function getSumOfTwoNumber (a,b){
//     return a+b
// }

// console.log(getSumOfTwoNumber(parseInt(commands[2]) ,parseInt(commands[3])))




// let users = ['jane','joe','maria']

// function getUser(name){
//     return users.filter(user=>user===name)
// }

// let result  = getUser(commands[1])
// console.log(result)

// useful for token becus can't be seen 
// useful for coment line as well



// for security
// always in gitignore  // just file name 

// require('dotenv').config()
// console.log(process.env.TOKEN)


// node youtubedl.js --link  https://www.google.com/ -- convert mp3 ^C


// const link  = commands[3]
// const fileFormat  = commands[5]

// console.log(` --link${link} --convert ${fileFormat}`)

//$ node tools.js --link https://www.youtube.com/watch?v=bPYYskNTmL8 --conver mp3



//ytdl-core
 // for download youtube 
 // https://www.npmjs.com/package/ytdl-core 

 const fs= require ('fs')
 const ytdl = require ('ytdl-core')

 
    const asd = commands[5]

    ytdl = (link) 
    .pipe(fs.createWriteStream (asd))


   // $ node tool.js --link "https://www.youtube.com/watch?v=bPYYskNTmL8"  --filename haha.mp4 



   //
   fs.readFile ( commands[2],'utf-8',(err,data)=>{
    console.log(data)
    let links = data.split(`\n `)
    console.log(links)
    links.forEach(link,index=>{
        ytdl(links).pipe(fs.createWriteStream(`video-${index}.mp4`))

    })

   })

   //$ node tool.js playlist.txt 


   // node.js URL MODULE