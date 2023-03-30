import { Button } from 'react-bootstrap'
import React, { useEffect, useRef, useState } from 'react'

function Blog() {
    const [post ,setPost] = useState ([])
    const getAllPosts = async () =>{
        let response = await fetch ('https://jsonplaceholder.typicode.com/posts')
        let post = await response.json()
        setPost(post)
       
    }
    const buttonRef = useRef()
    const inputRef = useRef()
    useEffect(()=>{getAllPosts()
    console.log(buttonRef.current)
    console.log(inputRef.current)
    },[])
  return (
 
    <div>
      
<Button onClick = {getAllPosts} ref={buttonRef}>get and print  </Button>
<input type='text' ref={inputRef} value='enter something' ></input>
{ 
post.map( (post,index)=>{
 return   <a href={`/blog/${post.id}`} key={post.id} className="d-block">{post.title}</a>
}
    )
}

    </div>
   
  )
}

export default Blog