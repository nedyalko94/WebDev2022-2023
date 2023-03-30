import React from 'react'

export default function dashboard() {
  return (
    <div>dashboard
        <h1> public env  (id) {process.env.NEXT_PUBLIC_ID} with NEXT_PUBLIC_ ....</h1>


    </div>
  )
}

export async function getServerSideProps(){
    const user = process.env.DB_USER
    const password = process.env.DB_PASSWORD
    const {DB_USER,DB_PASSWORD} = process.env

    console.log(` connect to db  with username :${user} and password : ${password}`)
    console.log(` connect to db  with username :${DB_USER} and password : ${DB_PASSWORD}`)

    return{
        props:{
            title:"random title",
            description:"random desc"
        }
    }
}