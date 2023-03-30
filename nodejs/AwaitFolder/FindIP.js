// const fetch =require('node-fetch')
import fetch from 'node-fetch'
async function fetchIPAddress(domain){
    const resp = await fetch(`https://cloudflare-dns.com/dns-query?name=${domain}&type=A`,{
        headers:{
            'accept':'application/dns-json'
        }
    })
    const respOBject = await resp.json()
    return respOBject
    // respOBject.Answer[0].data
}

const domain = 'nodejs.org'
// domain  has to be only origin no http no www or query
fetchIPAddress(domain)  
const ipAddress = await fetchIPAddress(domain)
if (!ipAddress){
    console.log('something went wrong in fetchIPAddress')

}else{
    console.log(ipAddress.Answer)   
}

