function getDomainNameFromURL(url){
const urlObject = new URL(url)
// property can be check at https://developer.mozilla.org/en-US/docs/Web/API/URL 
return urlObject.hostname
}

const MyURL = "https://www.youtube.com/watch?v=VgMB7bCbjo4"
const DomainName = getDomainNameFromURL(MyURL)
console.log(` the domain name for ${MyURL} is ${DomainName}`)

//ICANN organization for dns 
//https://www.youtube.com/watch?v=2JYT5f2isg4 1:17