import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Menu() {
  return (
             <Container className='header d-flex justify-content-center' fluid> 

    <Navbar variant='dark' bg='dark' expand="lg" className='header2' collapseOnSelect={true} >
      <Container  className='p-0 d-flex justify-content-center' fluid>
        <Navbar.Brand href="/" className='linkStyle '>React-Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="d-flex align-content-end justify-content-end">
            <Nav.Link href='#'><Link to='/' className='linkStyle text-decoration-none'>Home</Link></Nav.Link>
            <Nav.Link href='#'> <Link to='/About' className='linkStyle text-decoration-none'>About</Link></Nav.Link> 
            <Nav.Link href='#'> <Link to='/Contact' className='linkStyle text-decoration-none'>Contact</Link></Nav.Link>
            <Nav.Link href='#'> <Link to='/Project' className='linkStyle text-decoration-none'>Project</Link></Nav.Link>
            <Nav.Link href='https://github.com/nedyalko94' className='linkStyle text-decoration-none' target={"_blank"}>Github </Nav.Link>
            <Nav.Link href='https://www.linkedin.com/in/nedyalko-todorov-719662178/' className='linkStyle text-decoration-none ' target={"_blank"}> Linkedin</Nav.Link>
           
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
             </Container> 

  );
}

export default Menu;