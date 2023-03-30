import React from 'react'
import { comments } from '@/data/comments'
export default function SingleComment({comment}) {
  return (
    <div>
        {comment.map(comment=>
            <div key={comment.id}>
                <h1>
                    {comment.id}. {comment.text}
                </h1>

            </div>
            
            
            )}


    </div>
  )
}

export async function getStaticPath(){


    return{
        path:[
            {params:{commentId:"1"}},
            {params:{commentId:"2"}},
            {params:{commentId:"3"}},
        ],
        fallback:false
    }
}


export async function getStaticProps(context){
    const {params} = context
    const {commentId} = params

    // don't do this it's making it slower we should not call our own api for getStaticProps
    // const response = await fetch(`/api/comments/${commentId}`)
    // const data = await response.json()

    const comment = comments.find((comment)=> comment.id === parseInt(commentId))

    return{
        props:{
            comment
        }
    }

}