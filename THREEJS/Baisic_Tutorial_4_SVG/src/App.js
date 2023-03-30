import React, { Suspense,  useRef} from 'react'
import { Canvas, extend, useThree, useFrame } from 'react-three-fiber'
import Box from './component/Box'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
// import { Fog } from 'three'
//! that root 
// import House from './component/House'
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import Scene from './component/Scene'



export default function App() {
  extend({ OrbitControls })



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

    <Canvas camera={{position:[5,5,10]}}  fov={975} near={200}

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
<Box  position={[-50,0,130]} letterIndex=  {[0,6,12,12,0,8]}/>

<Box  position={[-30,0,130]} letterIndex=  {[6,4,9,8,1,1]}/>

<Box  position={[-10,0,130]} letterIndex=  {[6,12,10,4,2,5]}/>

<Box  position={[10,0,130]}  letterIndex=  {[6,5,11,5,3,1]}/>

<Box  position={[30,0,130]}  letterIndex=  {[6,7,1,1,4,1]}/>

<Box  position={[50,0,130]}  letterIndex=  {[6,12,12,12,5,1]}/>

<Box  position={[70,0,130]}  letterIndex=  {[6,12,12,12,1,1]}/>
      <Plane position={[0,4660,0]} />
      <Scene/>
   
{/* welcome */}
</Suspense>

    </Canvas>
    </>
    



  )
}
