import React, { useState } from 'react'
import { Container, InputGroup,Button ,Form,ListGroup} from 'react-bootstrap'
export default  function Cryptocurrency (){
    const handleClick = (e) => {
        console.log('click click testing => ')
        
        
    }



return (
<Container>
    
<InputGroup className="mb-3">
        <Form.Control
          placeholder="Crypto currency"
          aria-label="Crypto currency"
          aria-describedby="basic-addon2"
        />
        <Button onClick={handleClick} variant="outline-secondary" id="button-addon2">
          Search
        </Button>
      </InputGroup>

      <ListGroup>
      <ListGroup.Item>Cras justo odio</ListGroup.Item>
      <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
      <ListGroup.Item>Morbi leo risus</ListGroup.Item>
      <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
      <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
    </ListGroup>
    </Container>
)
}