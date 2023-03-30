import React, { useRef } from "react";
import { InputGroup } from "react-bootstrap";
import {
  Container,
  Navbar,
  Nav,
  NavDropdown,
  Form
} from "react-bootstrap";
import { MdOutlineFoodBank } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";

function Header({ CategoriesFilter, setInputValue, Categories,inputValue }) {
  const InputRef = useRef()

  const x = useNavigate();
  const GoHome = (e) => {
    
    if (e.key === "Enter") {
      return x("/");
    }
  };
  const SearchHandler=(e)=>{setInputValue(e.target.value)  }

  return (
    <Navbar bg="light" expand="lg">
      <Container fluid> 
        <Navbar.Brand>
         
          <Link to={"/"}>
            <MdOutlineFoodBank
              fill="white"
              className="display-1 text-warning bg-danger p-1 rounded-1 mx-2"
            />
          </Link>{""}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            // navbarScroll
          >
            <Link
              to={"/"}
              className="nav-link text-decoration-none mx-2"
            >
              Home
            </Link>
            <Link
              to={"/contact"}
              className="nav-link text-decoration-none mx-2"
            >
              Contact
            </Link>
            <NavDropdown
              title="Categories"
              id="navbarScrollingDropdown"
              className="mx-2"
            >
              {Categories !== undefined ? 
              Categories.map((Category,index)=>
              <NavDropdown.Item   key={index} onClick={()=>{ InputRef.current.value =''}}>
                <Link to={'/'}  className='nav-link text-decoration-none' id={Category.strCategory} onClick={CategoriesFilter} >{Category.strCategory}</Link>
                </NavDropdown.Item>):''}
             


           
            </NavDropdown>
            <Link
              to={"/FeelLucky!"}
              className="nav-link text-decoration-none mx-2"
            >
            
              Feel Lucky !
            </Link>
          </Nav>

          <div  className="d-flex">
          <InputGroup className="mb-3 d-flex">
        <Form.Control
        onKeyDown={GoHome}
        onChange={SearchHandler}
        placeholder="Search"
        aria-label="Search"
          aria-describedby="inputGroup-sizing-default"
          ref={InputRef}
        />
      </InputGroup>
      </div> 
                {/* <div  className="d-flex">
            <Form.Control
              onKeyDown={GoHome}
              onChange={inputHandler}
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            </div> */}
        
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
