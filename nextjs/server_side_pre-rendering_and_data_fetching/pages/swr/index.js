import React from 'react'
import useSWR from 'swr'

// npm add swr




export default function index() {
    // useSWR('dashboard', async ()=>{
    //     const response = await fetch('http://localhost:4000/dashboard')
    //     const data = await response.json()
    //     return data
    // })

const fetcher =  async ()=>{
    const response = await fetch('http://localhost:4000/dashboard')
    const data = await response.json()
    return data
}
    const {data,err} = useSWR('dashboard',fetcher)

if(err) return "an error has  occurred"
if(!data) return "Loading ..."

return(
    <div>
        <h2>Dashboard</h2>
        <h2>Posts - {data.posts}</h2>
        <h2>Likes - {data.likes}</h2>
        <h2>Followers - {data.followers}</h2>
        <h2>Following - {data.following}</h2>

    </div>
)
}
