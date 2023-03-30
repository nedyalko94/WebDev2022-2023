import React from 'react'
import { Button, Container } from 'react-bootstrap'
import {Link} from 'react-router-dom'

export default function Header() {
  return (
    <Container className=' bg-dark px-7   py-4 ' fluid>
       <Link to='/' className='text-dark'><Button className=' bg-warning px-5 btn'>Todo</Button> </Link>
       <Link to='/About' className='text-dark'><Button className=' bg-danger px-5 mx-2  btn'> About</Button></Link>
    </Container>
  )
}
