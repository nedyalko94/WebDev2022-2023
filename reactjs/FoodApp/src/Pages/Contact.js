import React, { useRef } from 'react'
import { Container, Form,Button, FloatingLabel, Row, Col} from 'react-bootstrap'


function Contact() {
  const email = useRef('')
  const message = useRef('')
  const subject = useRef('')


  const sendEmail = async (e) => {
    e.preventDefault()
    if (subject.current.value === '' || email.current.value === '' 
    || message.current.value === ''||subject.current.value === undefined) {

      return alert("fill all field")
    } else {

      await fetch('https://nodemailer-sglm.onrender.com/', {
        method: "post",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "email": email.current.value,
          "subject": subject.current.value,
          "message": message.current.value

        })
      })
        .then(res => res.json())
        .then(result => alert(result.msg))
    }
  }
 
  return (
    <Container className='mainContainer bg-light' fluid>
<Row className='d-flex justify-content-center align-content-start mt-5 pt-5'>
  <Col  sm={12} md={2}>
<Form className='bg-success p-4 border rounded-4'>
      <Form.Group className="mb-3 " controlId="formBasicText">
        <Form.Label className='text-dark'>Subject</Form.Label>
        <Form.Control type="text" placeholder=" Subject" ref={subject} />
       
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className='text-dark'>Email</Form.Label>
        <Form.Control type="email" placeholder="Email Address"  ref={email}/>
      </Form.Group>
      <FloatingLabel controlId="floatingTextarea2" label="Message">
        <Form.Control
          as="textarea"
          placeholder="Leave your message here"
          style={{ height: '100px' }}
          ref={message}
        />
      </FloatingLabel>
     
      <Button className='bg-dark border-0 m-2 justify-self-start'  type="submit" onClick={sendEmail}>
        Submit
      </Button>
    </Form>
    </Col>
    </Row>
    </Container>
  )
}

export default Contact