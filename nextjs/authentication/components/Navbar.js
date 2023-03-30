import Link from 'next/link'
import { signIn, signOut, useSession } from 'next-auth/react'

function Navbar() {
  const { data: session, status } = useSession(); 
  console.log(session, status);

  return (
    <nav className='header'>
      <h1 className='logo'>
        <a href='#'>NextAuth</a>
      </h1>
      <ul  className={`main-nav `} >
        <li>
          <Link href='/'>
            Home
          </Link>
        </li>
        <li>
          <Link href='/Dashboard'>
            Dashboard
          </Link>
        </li>
        <li>
          <Link href='/blog'>
            Blog
          </Link>
        </li>

        {!session && status == "unauthenticated" && (  
                  <li>
            <Link href='/api/auth/signin' onClick={e => {
                  e.preventDefault()
                  signIn('github')
                  // with specify github we skip the menu  normally can without that and we can have more options
                }}>
              
                Sign In
             
            </Link>
          </li>
         )} 
        {session && status == 'authenticated' && (
          <li>
            <Link href='/api/auth/signout' onClick={e => {
                  e.preventDefault()
                  signOut()
                }}>
             
                Sign Out
              
            </Link> 
          </li>
        )} 
      </ul>
    </nav>
  )
}

export default Navbar