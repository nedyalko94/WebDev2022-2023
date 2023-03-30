import React from 'react'
import {  Container, Nav, Navbar,Row,Col} from "react-bootstrap"
import {Link} from "react-router-dom"

 function Header() {
  return (
<Container fluid  className='bg-light'>
  <Row className='bg-dark text-light'>
    <Col>
     
        <Link to='/' className="nav-link text-decoration-none mx-2 mt-4" sm={6} md={1}><h5 >ICTsiktir Admin Panel</h5></Link>
        </Col>
       
    

     
    </Row>
  <Row>
   <Navbar bg="dark"  expand="lg">
      <Container fluid >
        {/* <Navbar.Brand ><Link to='/' className="nav-link text-decoration-none mx-2">ICTsiktir</Link></Navbar.Brand> */}
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="lg-0"
            style={{ maxHeight: '100px', minWidth:'80%' }}
            navbarScroll
          >
            <Nav.Link><Link to="/"className="nav-link text-decoration-none mx-2 text-light">Home</Link></Nav.Link>
            <Nav.Link ><Link to="/AddProduct"className="nav-link text-decoration-none mx-2 text-light">Add Product</Link></Nav.Link>
           
            <Nav.Link><Link to="/ModifyProduct"className="nav-link text-decoration-none mx-2 text-light">ModifyProduct</Link></Nav.Link>
            <Nav.Link><Link to="/Contact"className="nav-link text-decoration-none mx-2 text-light">Contact</Link></Nav.Link>
            <Nav.Link><Link to="/AddUser"className="nav-link text-decoration-none mx-2 text-light">AddUser</Link></Nav.Link>
            <Nav.Link><Link to="/ModifyUser"className="nav-link text-decoration-none mx-2 text-light">ModifyUser</Link></Nav.Link>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </Row>
    </Container>
 

  )
}
export default Header

