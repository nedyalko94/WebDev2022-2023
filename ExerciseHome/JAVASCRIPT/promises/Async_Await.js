// Async Await 

function makeRequest(location){
    return new Promise ((resolve,reject)=>{
        console.log(`making request to ${location}`)
        if (location=='google')
        resolve('hi google')
        else{
            reject(' we can talk only to google')
        }
    })
}

// promise that  always resolve 
function processRequest(response){
    return new Promise((resolve,reject)=>{
        console.log('processing response')
        resolve(`Extra information ${response}`)})
}
// call the Promises

makeRequest('google')
.then(response=>{
    console.log('response receive')
   return  processRequest(response)
})
.then(processResponse=>{  console.log(processResponse)})
.catch(error=>{ console.log(error)})


// 1 is calling makeRequest function (but don't resolve it) 
//2 then execute .then 
//3 then second .then and return processRequest 
//4 and go back to resolve makeRequest



//always in function can be arrow as well // need to have async and await 

async function doRequest(){
    try{
 const response = await makeRequest('google')
 console.log('response receive')
  const processResponse = await processRequest(response)
 console.log(processResponse)
}
catch(error) { console.log(error)}
}
doRequest()