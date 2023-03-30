import React,{useState} from 'react'
import Container from 'react-bootstrap/esm/Container';
import {Row} from 'react-bootstrap'
import CanvasComponent from '../Components/Canvas';
import {FaQuestion,FaPowerOff,FaWpforms} from 'react-icons/fa'
// import  Loader from '../Loader'
// import vale from '../Components/BoxTexture/vale.svg'


export default function Home() {
  const [HideShow,setHideShow]= useState(true)
  const [Instruction,setInstruction]= useState(true)



  
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
  

    // let msg = ["W","E","L","C","O","M","E"]
    // ," ","I",' ',"L","I","K","E",' ',"T","O",' ' 
    // ,"M","A","K","E",' ',"T","H","I","N","G","S",' ',"H","A","P","P","E","N","I","N","G"
    const camera_position=[0, 0 ,240]

   

   

    return (

<Container fluid className='m-0 p-0'>


    <CanvasComponent camera_position={camera_position} HideShowBox={HideShow}/>
    <Row>
    {/* <h1 className="welcomeDiv ">
    <div className=' d-flex justify-content-center align-items-center welcomeContainer  p-2'>
         {msg !== undefined?  msg.map((letter,index)=>
         (<span key={index} id={index}  className='p-2'
         >{letter}</span>)
         ):'' }
   </div>
   </h1>  */}
       {Instruction? <div className='Container'>
        <div >
          <div className='CenteredDiv'>
           <h4>Instruction</h4>    
          Welcome to 3D React-Three-Fiber you can find instruction On/Of control icon <FaQuestion className='text-primary mb-2 fs-4'/> on every page in bottom right corner.
          You can find also animation On/Of/Reset there <FaPowerOff className='text-danger fs-4 mb-2'/> and email Form on Contact Page <FaWpforms className='fs-4 mb-2 text-warning'/>
          <h5 className='my-2'>Now to the Fun part !</h5>
          <ol>
            <li> With <b className='text-info'>Scroll</b> you can zoom in and out the Camera. </li>
            <li> With <b className='text-info'>Left Click</b> and hold you can rotate the Camera. </li>
            <li> With <b className='text-info'>Right Click</b> and hold you can move the Camera. </li>
            <li> With <b className='text-info'>Hover</b> on one of the Cube you can pause the animation. </li>
            <li>Don't forget to check the instruction while visiting the other pages.</li>
            <li>Now <b className='text-danger'>Close</b> this  from <FaQuestion className='text-primary mb-2 fs-4'/> and have fun exploring!</li>
          </ol>
          
          


           
        </div>
        </div>
        </div>
        :null}

     {Instruction?<FaQuestion className='instruction fs-2 text-primary' onClick={HideInstruction}/>:
     <FaQuestion className='instruction fs-2 text-light' onClick={HideInstruction}/>}
    {HideShow?<FaPowerOff className='Off_On_Icon text-danger fs-2' onClick={HideAnimation}/>:
    <FaPowerOff className='Off_On_Icon text-success fs-2' onClick={HideAnimation}/>}


   </Row>
   


    
    
</Container>

  )
}
 