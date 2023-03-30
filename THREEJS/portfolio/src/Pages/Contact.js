import React, { useRef, useState } from 'react'
import { Row } from 'react-bootstrap';
import Container from 'react-bootstrap/esm/Container';
import CanvasComponent from '../Components/Canvas';
import { FaQuestion, FaPowerOff, FaWpforms } from 'react-icons/fa'
import ContactModal from '../Components/ContactModal'


export default function Contact() {
  const subject = useRef('')
  const email = useRef('')
  const message = useRef('')
  const [HideShow, setHideShow] = useState(true)
  const [Instruction, setInstruction] = useState(false)
  const [Form, setForm] = useState(false)
  const [modalShow, setModalShow] = useState(false);
  const [ModalMsg,setModalMsg] = useState()

  const HideAnimation = () => {
    if (HideShow) {
      setHideShow(false)
    } else {
      setHideShow(true)
    }
  }
  const HideInstruction = () => {
    if (Instruction) {
      setInstruction(false)
    }
    else {
      setInstruction(true)
      setForm(false)

    }
  }
  const hideForm = () => {
    if (Form) {
      setForm(false)
    } else {
      setForm(true)
      setInstruction(false)
    }
  }


  const sendEmail = async () => {
    if (subject.current.value === '' || email.current.value === '' 
    || message.current.value === ''||subject.current.value === undefined) {

      return setModalMsg(`  The Spaceship is out of fuel Captain. Please ...
        Fill all input field ..... `)

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
        .then(result => setModalMsg(` Captain , Captain ...The Spaceship somehow manage to make it .${result.msg}`))
    }
  }


  const camera_position = [30, -80, 350]
  const earth_position = [0, 1, 1]

  return (
    <Container fluid className='m-0 p-0'>

      <Row>
        {Instruction ? <div className='  Container'>
          <div >
            <p className='CenteredDiv'>
                <h5>Welcome in Contact page </h5>
                If you have read the instruction at landing page thats great 
           <b className='fs-5 mx-1 '>👍</b>  here you have the same possibility
           and Some Surprise you have access to<FaWpforms className='fs-4 text-info mx-2'/> 
            and this amazing Spaceship you can <b className='text-info'>Hover  </b> for <b className='text-danger'>pause</b> but be careful with the clicks.
            </p>
          </div>
        </div>
          : null}

        {Form ? <FaWpforms className='formIcon fs-2 text-warning' onClick={hideForm} /> :
          <FaWpforms className='formIcon fs-2 text-info' onClick={hideForm} />}

        {Instruction ? <FaQuestion className='instruction fs-2 text-primary' onClick={HideInstruction} /> :
          <FaQuestion className='instruction fs-2 text-light' onClick={HideInstruction} />}

        {HideShow ? <FaPowerOff className='Off_On_Icon text-danger fs-2' onClick={HideAnimation} /> :
          <FaPowerOff className='Off_On_Icon text-success fs-2' onClick={HideAnimation} />}
         { Form ?
        <div className='Container'>
          <div className=''>
            <div className='CenteredDiv'>
              <h4>Send Email </h4>
              <form className='d-flex flex-column w-100'>
                <input type="text" name="subject" placeholder='Subject' ref={subject}></input><br></br>
                <input type="email" name="email" placeholder='email' ref={email} ></input><br></br>
                <textarea placeholder='Message' ref={message}></textarea><br></br>
                {/* <button onClick={sendEmail}>testButton</button> */}
                <p>use the <b className='text-primary'>Spaceship</b> for express email delivery</p>
              </form>
            </div>
          </div>
        </div>:null}

      </Row>
      <ContactModal
      ModalMsg={ModalMsg}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />

      <CanvasComponent camera_position={camera_position} earth_position={earth_position} setModalShow={setModalShow} send_email={sendEmail} isContact={true} HideShowSpaceship={HideShow}/>
    </Container>
  )
}


// https://nodemailer-sglm.onrender.com/
//{
// 	"email":"ersin@gmail.com",
// 	"subject":"we have to talk",
// 	"message":" we can't come soooo early to school"
// }