import Head from 'next/head'
import React from 'react'

export default function id({title,description}) {
  return (
    <div>
        {/* <Head>
        <title> {title} </title>
        <meta name='custom head ' content={description}/> */}
        {/* Warning: A title element received an array with more than 1 element as children. In browsers 
        title Elements can only have Text Nodes as children. If the children being rendered output more
         than a single text node in aggregate the browser will display markup and comments
         as text in the title and hydration will likely fail and fall back to client rendering 
         
         */}
        {/* </Head> */}


        <h1 className='content'> Dynamic Head </h1>
    </div>
  )
}


export async function getServerSideProps(context){
    const {params} = context
    const {id} = params

    return{
        props:{
            title:`Article Title ${id}`,
            description:`Article Description ${id}`
        }
    }   
}  