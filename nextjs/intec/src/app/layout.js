import './globals.css'
import Link from 'next/link'
import { Montserrat } from '@next/font/google'

// import font directly from google 
const montserrat =Montserrat({
  weight:["400","700"],
  subsets:['latin'],// can be cyrillic as well
  variable:"--font-montserrat"
})
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
   
      
      
      <body className={`${montserrat.className}`}> 
      {/*  apply font style  to everything */}
      <nav>
        <h1>logo</h1>
        <ul style={{listStyle:"none",display:"flex"}}>
          <li style={{marginLeft:"5px"}}>
           <Link href='/'>home</Link> 
            </li>
          <li style={{marginLeft:"5px"}}>
         
           <Link href='/about'>about</Link> 
            
            </li>
          <li style={{marginLeft:"5px"}}>
            <Link href={"/hello"} className='font-montserrat'>hello</Link> 
            {/* apply font style to single element with extended tailwind font  */}
            </li>
        </ul>
      </nav>
 
        {children} 
        </body>
     
    </html>
  )
}
