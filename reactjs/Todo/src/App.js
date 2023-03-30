import React, { useState } from "react";
import { Button, InputGroup, Row, Col, Form } from "react-bootstrap";

function App() {
  const [todo, setTodo] = useState('')
  const [todos, setTodos] = useState([])


  const handleInput = (e) => {

    setTodo(e.target.value)
  }

  const handleClick = (e) => {
    setTodos([...todos, todo])
  }
  const DeleteOne = (todo) => {
    const myFilter = todos.filter(todos => todos !== todo)



    setTodos([...myFilter])

  }

  const DeleteAll = () => {
    return setTodos([])

  }


  return (
    <Row className="justify-content-center my-5">
      <Col md={6}>
        <InputGroup className="mb-3 customInput">

          <Form.Control
            onChange={handleInput}
            placeholder="Task"
            aria-label="Task"
            aria-describedby="basic-addon1"
          />
          <Button onClick={handleClick}>Add</Button>
        </InputGroup>
        <hr />
        <ul>
          {
            todos.map((todo, index) => (
              <li key={index}>{todo} <Button onClick={() => DeleteOne(todo)} id={index}>Del</Button></li>
            ))
          }
        </ul>
        <Button onClick={DeleteAll}> Dell aLL</Button>
      </Col>
    </Row>
  );
}

export default App;
