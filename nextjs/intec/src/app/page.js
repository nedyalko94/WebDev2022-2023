"use client"
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })
//! /movie/popular
//      https://api.themoviedb.org/3/movie/popular
// search/movie?api_key=07a61de5b731a869bc9cec8e25d2c8a8&language=en-US&page=1&query=Joker


export default async function Home() {
  const  data = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY2}`)
  const res = await data.json()
  console.log(res)
  return (
    <main className={styles.main}>
     <h1 className='bg-red-400 text-xl '>hello Next.js 13</h1>
    </main>
  )
}
