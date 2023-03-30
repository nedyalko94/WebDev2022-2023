const fs = require('node:fs/promises')

// promise fs module

console.log("first")
// promise
fs.readFile('file.txt','utf-8')
.then(data=> console.log(data))
.catch(err =>console.log(err))

console.log("second")

// with async await
async function File(){
    try {
        const data = await fs.readFile("file.txt","utf-8")
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

File()