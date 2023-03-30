import React,{useRef} from 'react'
import Ubuntu_Bold_Italic from './Font/Ubuntu_Bold_Italic.json'
import {FontLoader} from 'three/examples/jsm/loaders/FontLoader';
import { TextGeometry }  from 'three/examples/jsm/geometries/TextGeometry'
import{extend} from '@react-three/fiber'
import { a, useSpring } from '@react-spring/three';

export default function AboutText() {

  extend({TextGeometry})

  const font = new FontLoader().parse(Ubuntu_Bold_Italic);
  const [animation,api] = useSpring(()=>({
    from:{position:[-80, -110, 450],rotation:[-Math.PI/2.9,0,0.01]},
    to:{position:[-80, 910, -830],rotation:[-Math.PI/2.9,0,0.01]},
    // pause:Pause?api.pause():api.resume(),
    loop:true,
    config:{duration:30000}

  }))
  const textOptions = {
    font,
    size:15,
    height:1.1,
    bevelEnabled: true,
		bevelThickness: 1,
		bevelSize: 0.4,
		bevelOffset: 0.1,
		bevelSegments: 4
  }
const meshRef = useRef()
  return (

<>
<group>
    {/* <pointLight position={[0,100,440]} /> */}
    
    <a.mesh  ref={meshRef} {...animation}
    onPointerEnter={()=>{api.pause()}}
    onPointerLeave={()=>{api.resume()}}
    >
    <a.textGeometry attach='geometry' args={[
`Hi! my name is Nedyalko
   i'm from Bulgaria 
and like to create things
 that provoke people to
            wonder
       how they are 
          made it !
if you have question 
 you can contact me
  meanwhile keep 
     exploring 
  there are still,
a lot to be seen !
    `, textOptions]} />
    <a.meshBasicMaterial attach='material' color={"green"} />
  </a.mesh>
  </group>
  </> 
  )
}
