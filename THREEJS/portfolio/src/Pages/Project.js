import React, { useState } from 'react'
import Container from 'react-bootstrap/esm/Container'
import CanvasComponent from '../Components/Canvas';
import {Row} from 'react-bootstrap'
import projectUrl from '../ProjectLinks';
import {FaQuestion,FaPowerOff} from 'react-icons/fa'


export default function Project() {
  const camera_position = [0, 0 ,440]
  // const earth_position = [2, 1, 2]
  const earth_position=[1.2, 1, 2]

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
          setHideShow(false)
        
      }
    }


  

  return (
    <Container fluid  className='m-0 p-0'>
    <Row >
    {Instruction? <div className='  Container'>
        <div >
          <div className='CenteredDiv'>
           <h5 className='my-3'> Welcome in Project Page.</h5>
           Here you can find my project and directly interact with them check 
           on top of that you can <spam className='text-danger '>pause</spam> the rotation with <spam className='text-info'>Hover </spam>
           and little bonus if you made it soo far go to About page and zoom into inside the planet because someone is waiting for you .
                    

        </div>
        </div>
        </div>
        :null}
    {HideShow?
      <div className='wrapContainer'>
        <div className='  ProjectContainer'>
    <div className='carousel'>
      <div className='box'>

  {  projectUrl !== undefined ? projectUrl.map((url,index)=>
  <div id={index}>
    
    <iframe className={`${"project"+index}`} key={index} src={url[0]}
     title={`project ${index} `}>
    <p>Your browser does not support iframes.</p>
    </iframe> 
    {/* <div><a href={`${url[0]}`} target='_blank' rel="noreferrer"> {url[1]}</a></div> */}
    
</div>
):<h1> No Project have been found</h1>
    
    }

</div>

   
    </div>
    </div>
    </div>
    :null}
    {Instruction?<FaQuestion className='instruction fs-2 text-primary' onClick={HideInstruction}/>:
     <FaQuestion className='instruction fs-2 text-light' onClick={HideInstruction}/>}
    {HideShow?<FaPowerOff className='Off_On_Icon text-danger fs-2' onClick={HideAnimation}/>:
    <FaPowerOff className='Off_On_Icon text-success fs-2' onClick={HideAnimation}/>}
    </Row>
  
<CanvasComponent camera_position={camera_position} earth_position={earth_position}/>
</Container>
  )
}
