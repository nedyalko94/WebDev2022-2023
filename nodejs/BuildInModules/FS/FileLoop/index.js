

const fs = require('node:fs')


console.log(__filename,`${__dirname}/files`)



// fs.readdir('./files',(err,files)=>{ // read the dir and return the files in array
//     console.log(files)
//     if(err) console.error(err)
//     files.forEach( file=>{  // for each file  
//         fs.readFile(`./files/${file}`,'utf-8',(err,data)=>{ // read the file  
//             if(err) console.error(err)
//             console.log(data)
//                 fs.writeFile('./FullSentence.txt',data,{flag:"a"},(err,)=>{
//                     if (err) console.log(err)
//                     else{
//                         console.log(`success read and write from ${file}`)

//                     }
//                 })
//         })
//     })   
// })                     
 
//  read multiple files and write in single one but there is a problem  because is not sync and my sentence don't make sense


const AllFiles = fs.readdirSync(`./files`, {encoding:'utf-8', flag:'r'}) 

console.log(AllFiles) 

AllFiles.forEach(file=>{
    if(file.endsWith(".txt")){ // if the file is txt write it to SyncSentence else in SyncJavascriptCode
    const data = fs.readFileSync(`${__dirname}/files/${file}`,
              {encoding:'utf8', flag:'r'});
              console.log(data)
              fs.writeFileSync(`${__dirname}/SyncSentence.txt`,Data(data), {flag:'a'})
            }
            else{
                const data = fs.readFileSync(`${__dirname}/files/${file}`,
                {encoding:'utf8', flag:'r'});
                console.log(data)
                fs.writeFileSync(`${__dirname}/SyncJavascriptCode.js`,data, {flag:'a'})
              }

            
})                

function Data(data){
    if(data.endsWith(".")){
       return `${data} \n `
    }else{
      return  data 
    }
}   
    

// sync way work       
   
// `\n${data}`  