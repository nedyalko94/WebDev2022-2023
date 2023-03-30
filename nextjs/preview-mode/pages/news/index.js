import React from 'react'

export default function index({data}) {
  return (
    <div className='content'>{data}</div>
  )
}


export async function getStaticProps(context){
    console.log("Running getStaticProps",context.previewData)


     
    return{
        props:{
            data: context.preview
            ?"list of draft article"
            :"list of published article"
        }  
    }
}