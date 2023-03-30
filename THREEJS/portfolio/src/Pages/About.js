import React,{useState} from 'react'
import Container from 'react-bootstrap/esm/Container';
import CanvasComponent from '../Components/Canvas';
import {Row} from 'react-bootstrap'
import {FaQuestion,FaPowerOff} from 'react-icons/fa'


export default function About() {
  const [HideShow,setHideShow]= useState(true)
  const [Instruction,setInstruction]= useState(false)
  const HideAnimation = ()=>{
    if (HideShow){
      setHideShow(false)
    }else{
      setHideShow(true)
    }
  }
  const HideInstruction = ()=>{
    if (Instruction){
      setInstruction(false)
    }
        else{
          setInstruction(true)
        
      }
    }


  const camera_position = [0, 90 ,640]
  return (
    <Container fluid  className='m-0 p-0'>
        <Row >
        {Instruction? <div className='  Container'>
        <div >
          <div className='CenteredDiv'>
           <h5 className='my-3'> Welcome in About Page.</h5>
           If you have read the instruction at landing page thats great 
           <b className='fs-5 mx-1 '>👍</b> because here you have the same possibility
           on top of that you can <spam className='text-danger'>pause</spam> the text with <spam className='text-info'>Hover </spam>
            if animation is to fast to read.
        </div>
        </div>
        </div>
        :null}


        {Instruction?<FaQuestion className='instruction fs-2 text-primary' onClick={HideInstruction}/>:
     <FaQuestion className='instruction fs-2 text-light' onClick={HideInstruction}/>}
    {HideShow?<FaPowerOff className='Off_On_Icon text-danger fs-2' onClick={HideAnimation}/>:
    <FaPowerOff className='Off_On_Icon text-success fs-2' onClick={HideAnimation}/>}

        </Row>
      
  <CanvasComponent camera_position={camera_position} HideShowText={HideShow} isAbout={true}/>
    </Container>
  )
}
