
import React, {  useState } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import {InputGroup,Form} from 'react-bootstrap'

function App() {
  const IncreaNumber = (e) => { console.log('test +')
  setCount(count+5) // update state value 
}
  const DecreaseNumber = (e) => { console.log('test -')
  if(count!==0){
  setCount(count-5)
  }
  else{ alert('The number is 0')}



}
  const [count, setCount] = useState(0)
  const [UserName,setUserName] = useState('none')
  const HandleChange = (e)=>{
    console.log(e.target.value)
    setUserName(e.target.value)
  }






  return (
  
   

    <Container fluid={false}>
      <Row className='Justify-content-center align-item-center '>
        <Col md={5} className=' p-5  bg-success text-center' >
        <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">asd</InputGroup.Text>
        <Form.Control
          onChange={HandleChange}
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
          <Button size='lg' onClick={HandleChange} variant='dark'>Display UserName</Button>
          <Button size='lg' onClick={IncreaNumber} variant='dark'>increase number</Button>
         
        </Col>
        <Col md={5} className=' p-5  bg-warning text-center'>
          <Button size='lg' onClick={DecreaseNumber} variant='dark'>decrese number</Button>
        </Col>

      </Row>
      <Row className='Justify-content-center align-item-center '>
        <Col md={5} className=' p-5  bg-danger text-center' >
          <h1>{count}</h1>
        </Col>
        <Col md={5} className=' p-5  bg-primary text-center'>
        <h1 >{UserName}</h1>
        </Col>

      </Row>
    </Container>
   
  )
}

export default App

// rfce for creating 