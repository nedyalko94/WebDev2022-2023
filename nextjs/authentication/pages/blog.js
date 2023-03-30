import React from 'react'
import { getSession } from 'next-auth/react'

export default function blog({data}) {
  return (
    <h1>blog - {data}</h1>
  )
}


// server side auth 
export async function getServerSideProps(context){
  const session = await getSession(context)

  //--------------------- server side secure page 
  //  if session doesn't exist redirect
  if (!session){ 
    return {
      redirect:{
        destination:`/api/auth/signin?callbackUrl=${process.env.ROOT}/blog`,
        permanent:false,
      }
    }
  }

  return{
    props:{
      data: session 
      ? ' You\'re log in and get 100 personalize blog post'
      :' you\'re not log in you get 100 random free post ',
      session,


    }
  }

}
