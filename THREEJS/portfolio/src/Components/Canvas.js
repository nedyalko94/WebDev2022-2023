import React, { Suspense , useEffect, useState } from 'react' 

import {Canvas} from '@react-three/fiber'
// ,useFrame

// , useLoader
import PounUP from './PounUP'
import Box from './Box'; // my item
// import Plane from './Plane'; // my item 
import { Environment, OrbitControls,PerspectiveCamera,Stars} from '@react-three/drei' //  my background and my control 
// Stage,
import {Physics} from '@react-three/cannon'
import Earth from './Earth'
// import { TextureLoader } from 'three/src/loaders/TextureLoader'
// import Xwing from './X-wing'
import Legacy from './Legacy';
// import Nav_Bar from './Navbar';
// // Option 2: Import just the parts you need.
// import { Scene } from 'three';
import { Html, useProgress } from '@react-three/drei'
// useFBX
import AboutText from './AboutText'
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
// import { LoadingManager } from 'three';
import { ProgressBar } from 'react-bootstrap';
// import{RGBELoader} from 'three/examples/jsm/loaders/' // not found
// import {Dna} from 'react-loader-spinner'

export default function CanvasComponent(props) {
  const [Clicked,setClicked]= useState(false)

 const ModalOn = props.setModalShow
 const Send_Email = props.send_email
  useEffect(()=>{
    function EmailSend (){
      if (Clicked === true){
        // props.send_email()
        // props.setModalShow(true)
        Send_Email()
        ModalOn(true)
        setClicked(false)
      }else{
        return 

      }

    }
    EmailSend()
  },[Clicked,ModalOn,Send_Email])
 
// const loadingManager = new LoadingManager()
// const gltfLoader = new GLTFLoader(loadingManager) 
// const rgbeLoader = new RGBELoader()// not found


// loadingManager.onStart=(url,item,total)=>{
//   console.log(`loading....${url}`)
// }

// loadingManager.onProgress=(url,loaded,total)=>{
//   console.log(`loading....${url}`)
// }

// loadingManager.onLoad=()=>{
//   console.log(`just finished`)
// }
// loadingManager.onError=(url)=>{
//   console.error(`got problem ${url}`)
// }

function Loader() {
  // const { active, progress, errors, item, loaded, total } = useProgress()
  const { progress} = useProgress()
  return <Html center className='text-light progressBarContainer'>
    {/* <Dna 
  visible={true}
  height="100"
  width="400"
  ariaLabel="dna-loading"
  wrapperStyle={{}}
  wrapperClass="dna-wrapper"
/> */}
    <ProgressBar className='progressBar' bsPrefix="progress-bar" striped variant='success' now={progress.toFixed(1)} label={`${progress.toFixed(1)}%`}/>
   
    </Html>
}

 


  
 
// const cameraPosition = props.camera_position

 
  return (
      <Canvas id='three-canvas-container'>
   {/* fov={100} position={[10,100,-450]} near={0.3} aspect={[1.77]} */}
     {/* / that id is for full screen  */}
   <Suspense fallback ={<Loader />} >
          <Environment
              background={true} // Whether to affect scene.background
              files={'nebula n0.hdr'}
              path={'/'}
            />
       
    <PerspectiveCamera makeDefault fov={75} position={props.camera_position} near={0.1} aspect={[1.77]}  />
    <Stars radius={400} depth={10} count={6000} factor={10} saturation={10} fade speed={20} />
    <ambientLight intensity={0.9} />
    <spotLight  position={[0,10,10]} angle = {20} />
   
        <Physics>
        {/* <Plane /> */}
        {/* [WT/0,ET/1,LT/2,CT/3,OT/4,MT/5,TT/6,YT/7,HT/8,PT/9,AT/10,GT/11/NULLT/12] */}
        {/* right,left,top,bottom,front,back */}
        {props.HideShowBox ? <group>                {/*[right,left/2,top/4,bottom/3,front/1,back]*/}    
        {/* last 2 position aren't in use  */}
      <Box  position={
       [
         [-50,0,130], [-50,50,130], [-70,50,130], [-20,-50,130], [-50,0,130], [-50,0,130]
        ]
        } letterIndex=  {[0,6,12,12,0,8]}/>

      <Box  position={
        [
        [-30,0,130],[-50,30,130],[-50,30,130],[0,30,130],[-30,0,130],[-30,0,130]
        ]
      } letterIndex=  {[6,4,9,8,1,1]}/>

      <Box  position={
        [
        [-10,0,130], [-50,10,130], [-30,10,130], [0,10,130], [-10,0,130], [-10,0,130]
        ]
        } letterIndex=  {[6,12,10,4,2,5]}/>

      <Box  position={
        [
          [10,0,130], [-30,10,130], [-10,-10,130], [0,-10,130], [10,0,130], [10,0,130]
        ]
        }  letterIndex=  {[6,5,11,5,3,1]}/>

      <Box  position={
        [
          [30,0,130],[-10,10,130],[10,-30,130],[0,-30,130],[30,0,130],[30,0,130]
        ]
        }  letterIndex=  {[6,7,1,1,4,1]}/>

      <Box  position={
        [
          [50,0,130], [-10,-10,130], [30,-50,130], [0,-50,130], [50,0,130], [50,0,130]
        ]
          }  letterIndex=  {[6,12,12,12,5,1]}/>

      <Box  position={
        [
          [70,0,130],[-10,-30,130],[50,-70,130],[20,-50,130],[70,0,130],[70,0,130]
      ]}  letterIndex=  {[6,12,12,12,1,1]}/>
      
        </group>:null}


        {props.HideShowText?<AboutText/>:null}
        {props.isAbout?<PounUP/>:<Earth props={props}/>}

        {/* <Xwing/> */}
        <OrbitControls 
        // autoRotate
         />
       
      
    { props.HideShowSpaceship? <Legacy onClick ={()=>setClicked(!Clicked)} />:null}
     
        <spotLight  position={[-100,240,100]} angle={8} intensity={0.5}/>
        </Physics>
    </Suspense>
   </Canvas>
  )
}
