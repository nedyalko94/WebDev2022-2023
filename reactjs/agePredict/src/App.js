import React from 'react'
import { useState } from 'react'
import { Badge, Col, Container, Form, InputGroup, Row } from 'react-bootstrap'


function App() {
    
    const [user, setUsers] = useState([]) // username // number 5[]
    // fetching data in react.js
    const fetchingData = async () => {
        console.log('retrieving data...')
        let response = await fetch('https://who1am.herokuapp.com/atilla ')
        let data = await response.json()
        setUsers(data)
    }
   const handleInput = (e)=>{
    console.log(e.target.value,user)
   }
    
    return(
        
        <Container>
            <h1>Enter your name and let The with Do Her JoB </h1>
            <Row>
                <Col>
                <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1"> Name </InputGroup.Text>
        <Form.Control
          onChange={handleInput} 
          placeholder="Enter your name"
          aria-label="Enter your name"
          aria-describedby="basic-addon1"
        />
      </InputGroup>


                </Col>
                </Row>
                <Row>
                <Col>
                <Badge bg="primary">Name</Badge> <p></p>
                <Badge bg="primary">AGE:</Badge><p></p>
                <Badge bg="primary"> Nationalite</Badge> <p></p>
                <Badge bg="primary">Gender</Badge> <p></p>
                

                </Col>
                </Row>
        </Container>
    )
 
}

export default App;
