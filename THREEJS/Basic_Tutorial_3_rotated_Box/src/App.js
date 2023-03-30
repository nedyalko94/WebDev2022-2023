import React, { Suspense, useEffect, useRef, useState } from 'react'
import { Canvas, extend, useThree, useFrame } from 'react-three-fiber'
import { useSpring, a } from '@react-spring/three'
import Box from './component/Box'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
// import { Fog } from 'three'
//! that root 
import * as THREE from 'three'
// import House from './component/House'
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'



export default function App() {
  extend({ OrbitControls })

  //component

//   const  House1=()=> {
//     const [model,setModel]=useState()
//     useEffect(()=>{
//         // first parameter is the location
//        new GLTFLoader().load('./scene.gltf',setModel)
//     })
//   return (
//     model?<primitive object={model.scene}/>:null
//   )
// }

//component

  const Plane = () => {

   return(
     <mesh rotation={[-Math.PI/2,0,0]} position={[0,-0.5,0]} >
      <planeBufferGeometry attach='geometry' args={[100, 100]} />
      <meshPhysicalMaterial attach="material" color="grey" />
    </mesh>)
  }

//component

  const Controls = () => {
    const { camera, gl } = useThree()
    const orbitCameraRef = useRef()
    useFrame(() => {
      orbitCameraRef.current.update()
      // orbitCameraRef.current.scale.y +=1
    }
    )
    // for shadow we need to tell to material that can receive shadow
    // in our case that is on plane mesh 
    return (
      <orbitControls
        args={[camera, gl.domElement]}
        // we need to update on every element 
        ref={orbitCameraRef}
        // autoRotate
        // limit the rotation only to spin can be rotate
        // if we decrease the /3 to /2 we can a little bit 
        // maxPolarAngle={Math.PI /2.5}
        // minPolarAngle={Math.PI / 3}
      />
    )

  }


  return (
<>
<h1>hello world</h1>
    <Canvas camera={{position:[5,5,10]}} 

    // onCreated={({gl})=>{
    //   gl.shadowMap.enabled=true
    //   gl.shadowMap.type=THREE.PCFSoftShadowMap
    //   }}
      >

               <Suspense fallback ={null} >

      {/* <ambientLight intensity={0.5}/> */}
      {/* <spotLight position={[10,15,10]} penumbra={1} /> */}
      {/* <fog attach='fog' args={["white",100,500]}/> */}
      <Controls />
              <ambientLight/>
{/* [WT /0,ET/1,LT/2,CT/3,OT/4,MT/5,TT/6,YT/7,HT/8,PT/9,AT/10,GT/11]  */}
      <Box  position={[0,10,0]} letterIndex=  {[0,1,0,4,1,1]}/>
      <Box  position={[1.5,10,0]} letterIndex={[6,4,1,4,2,1]}/>
      <Box  position={[3,10,0]} letterIndex=  {[6,4,2,4,2,1]}/>
      <Box  position={[4.5,10,0]} letterIndex={[6,4,3,4,2,1]}/>
      <Box  position={[6,10,0]} letterIndex=  {[6,4,4,4,2,1]}/>
      <Box  position={[7.5,10,0]} letterIndex={[6,4,5,4,2,1]}/>
      <Box  position={[9,10,0]} letterIndex=  {[6,4,1,4,2,1]}/>
      <Plane position={[0,0,0]} />
   
{/* welcome */}
</Suspense>

    </Canvas>
    </>
    



  )
}
