import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function BlogDetails() {
    const { id } = useParams()
    const [detail, setDetail] = useState([])
     
  

    const fetchingData = async()=>{
        console.log('hi')
        let response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        let data = await response.json()
        setDetail(data)

    }
    // you need that array to stop loop of useEffect

    useEffect(() => {
        fetchingData()
        



    }, [])

    return (
        <div>   {detail.title}</div>
     
    )
}

export default BlogDetails