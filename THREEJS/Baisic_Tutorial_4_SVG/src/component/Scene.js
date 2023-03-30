import * as THREE from 'three'
import { SVGLoader } from 'three/examples/jsm/loaders/SVGLoader'
import React, { Suspense, useState, useEffect, useMemo } from 'react'
import { Canvas, useLoader, useThree } from '@react-three/fiber'
import { useTransition, useSpring, a } from '@react-spring/three'
import vale3  from './BoxTexture/vale.svg'
import flower  from './BoxTexture/flower.svg'


function Shape({ shape, rotation, position, color, opacity, index }) {
    if (!position) return null
    return (
//         <a.mesh rotation={rotation} position={position}>
//         <a.boxBufferGeometry attach='geometry' args={[10, 10, 10]}  />
//   <a.meshBasicMaterial attach="material" color={color} opacity={opacity}  depthWrite={false} transparent  map={shape}/> 
// </a.mesh>  

      <a.mesh rotation={rotation} position={position}>
        <a.meshBasicMaterial color={color} opacity={opacity} side={THREE.DoubleSide} depthWrite={false} transparent  />
        <shapeGeometry args={[shape]} />
      </a.mesh>
    )
  }

function Scene() {
  
  
    const data = useLoader(SVGLoader, vale3)
    const shapes = useMemo(() => data.paths.flatMap((g, index) => 
    g.toShapes(true).map((shape) => ({ shape, color: g.color, index }))), [
      data
    ])

  
 
  return (
    <>
      
      <group position={[0,55,0]} scale={0.1} rotation={[0, 0, 3.1]} >
       
        {  shapes.map((shape , index)=>
        <Shape key={index} position={[0,0,0]}  
           {...shape} {...shape.uuid} opacity={1}
           />
           )
           }
       
        { console.log(shapes)}
        {/* { console.log(data)} */}
        {/* https://codesandbox.io/s/wonderful-chandrasekhar-8l9rrj36j0?file=/src/App.js:844-849 */}
      </group>
    </>
  )
}

export default Scene



	 	   