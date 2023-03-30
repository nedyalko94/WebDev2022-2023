
// fs module
// process > global object 
// patch > global object
// url module
// dotenv module

//rename file or files 

const fs = require('fs') // import module
// fs.rename('test1.txt','test1Node.js',(err)=>{
//     if (err) throw err
//     console.log('file rename')
   
// })


// find multiple files  and rename them 

let count = 1 

fs.readdir ('./',(err,files)=>{
    console.log(files)
    let filesName = files.filter(file=>file.includes('test'))
    console.log(filesName)
    filesName.forEach(file=>{
        console.log(file) // print here 
        count ++
        console.log(count)
        // rename here
        let newName = `tutorial ${count}.js`
        console.log(newName)
         fs.rename(file,newName,(err)=> console.log('renamed'))

    })
})



//delete file 

// fs.rm('text2.js' , (err)=>{
//     console.log('deleted')
// })


// unlink method for delete as well 

// fs.unlink('tutorial 2.js' , ( err)=>{ 
//     console.log('deleted tutorial 1 ')
// })

//delete a folder 

// fs.rmdir('./test', (err)=>{ console.log('folder is deleted')} )




//if we have subfolder

//fs.rmdir('/'      will delete windows  bcs / with no dot(.) is root folder  


// fs.rmdir('./test',{
//     recursive : true, // to ignore  if there is a subbfolder
//     force: true // to force delete 
// }, (err)=>{ console.log('folder is deleted')} )


//exist method

fs.exists('tutorial 14.js' , (err)=>{
    console.log( err? 'exist': 'file do not exist')
})


