import fetch from 'node-fetch'

// https://api.iplocation.net/?ip=XX.XX.XX.XX
// Or
// https://api.iplocation.net/?cmd=ip-country&ip=XX.XX.XX.XX

// example of ip 104.20.22.46

async function FindLocation (ipAddress){
    const res = await fetch(`https://api.iplocation.net/?cmd=ip-country&ip=${ipAddress}`)
    const data = await res.json()
        console.log(data) 
   
} 

FindLocation("104.20.22.46")    


async function FindLocation2 (ip){
    const res = await fetch(`https://api.iplocation.net/?ip=${ip}`)
    const data = await res.json()
        console.log(data)
  
}
 
// FindLocation2("94.110.24.175")   


// very slow api and prone to errors 