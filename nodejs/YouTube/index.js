
const fs = require('node:fs');
const ytdl = require('ytdl-core');

// https://www.npmjs.com/package/ytdl-core
// process object
let commands = process.argv 

// console.log(typeof parseInt(commands[2]),commands[3]) 
// console.log(commands[1])

// require('dotenv').config()
// console.log(process.env.TOKEN)

const link = commands[3] // youtube link
// const fileFormat = commands[5] // file format 
const fileName = commands[5]

// console.log(`--link ${link} --convert ${fileFormat}`)



// work take the link from links.txt and download it but replace the video if is run multiple time
// some problem with some links maybe is because of format
fs.readFile('./Links.txt','utf8',async(err,data)=>{
    if(err) console.log(err)

    let links = data.split('\n')  
   console.log(links) 
 
   let info = await ytdl.getInfo('https://www.youtube.com/watch?v=N2Cj-c8mLFs')
//    let VideoInfo = await ytdl.getBasicInfo('https://www.youtube.com/watch?v=RfXt_qHDEPw')
//    console.log(VideoInfo.videoDetails.title)  
    let format = ytdl.chooseFormat(info.formats, { quality: '137' }); /// 1080p
        console.log('Format found!', format);
        let BestFormat = info.formats
        // console.log(BestFormat)
    
    links.forEach(async(link,index)=>{ 
       let Info = await ytdl.getBasicInfo(link)
        // console.log(info)

        console.log('downloading...',VideoInfo.videoDetails.title)
        ytdl(link,{}).pipe(  fs.createWriteStream(  `./download/${Info.videoDetails.title}.mp4`))
    })
})   

 
 
// ytdl(link)
//   .pipe(fs.createWriteStream(fileName));

// var {asyncsleep, sleep} = require('sleep');

// while(true){
//     console.log('hello')
//     sleep(3000)  
//  } 
 


// work but very simple 
   
// ytdl('https://www.youtube.com/watch?v=iEx3fQSv3LQ')
//   .pipe(fs.createWriteStream('./download/video.mp4'));   