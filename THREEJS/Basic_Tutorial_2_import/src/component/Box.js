import React, { useRef, useState } from 'react'
import { Canvas,useFrame } from 'react-three-fiber'
import { useSpring, a } from '@react-spring/three'
import { Camera } from 'three'
// a  // is shortcut for animate 



export default function Box() {

    const [hovered, setHovered] = useState(false)
    const [Clicked, setClicked] = useState(false)
    const meshRef = useRef()
    // making animation smooth
    const props = useSpring({
        scale: Clicked ? [1.5, 1.5, 1.5] : [1, 1, 1],
        color: hovered ? 'hotpink' : 'gray'

    })
    //react spring can turn static value to  animated 
    console.log('hello world')

    //react animation // normal for react but not for three js 

    // three js 
    // game loop in loop have time stamp messing 


    //canvas normally have gpu driven canvas  and  try to make 60 frs 
    // can be hook function component

//! animation
// useFrame(()=>{
//     // we can mutate // animate // the mesh so we need ref
//     meshRef.current.rotation.y += 0.01
//     meshRef.current.rotation.z += 0.01
//     meshRef.current.rotation.x += 0.01
//     //execute on every frame 

// })
//!
// this can be stopped only render when need it 

//! castShadow for shadow on the light, plane  and the element and on canvas oncreated
    return (
        
    <a.mesh
        onPointerOver={() => setHovered(true)} //hover
        onPointerOut={() => setHovered(false)} // hover out 
        onClick={() => { setClicked(!Clicked) }} // click
        //  has position rotation and scale 
        // scale={Clicked?[1.5,1.5,1.5]:[1,1,1]}
        scale={props.scale}
        ref={meshRef}
        castShadow
    >
        <ambientLight/>
        {/* penumbra make the light little bit more soft */}
        <spotLight position={[0,5,10]} penumbra={1} castShadow/>

        <a.boxBufferGeometry attach='geometry' args={[1, 1, 1]} />
        <a.meshPhysicalMaterial attach="material" color={props.color} on />
{/* Basic material is not good for light / shadow */}
    </a.mesh>
    )
}



//thekitze twitter sizzy app