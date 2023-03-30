import React, { Suspense, useRef, useState } from 'react'
import { Canvas,useFrame } from 'react-three-fiber'
import { useSpring, a } from '@react-spring/three'
import { BackSide, Camera, FrontSide, TwoPassDoubleSide } from 'three'
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import W from './BoxTexture/W.png'
import E from './BoxTexture/E.png'
import L from './BoxTexture/L.png'
import C from './BoxTexture/C.png'
import O from './BoxTexture/O.png'
import M from './BoxTexture/M.png'
import T from './BoxTexture/T.png'
import Y from './BoxTexture/Y.png'
import H from './BoxTexture/H.png'
import P from './BoxTexture/P.png'
import A from './BoxTexture/A.png'
import G from './BoxTexture/G.png'


// a  // is shortcut for animate 



export default function Box(props) {
    // const [map1, map2] = useLoader(TextureLoader, ["./BoxTexture/1.jpg", "./BoxTexture/1.jpg"]);
    // const TT = useLoader(TextureLoader,T)
    // const OT = useLoader(TextureLoader,O)

    const[WT,ET,LT,CT,OT,MT,TT,YT,HT,PT,AT,GT] = useLoader(TextureLoader,[W,E,L,C,O,M,T,Y,H,P,A,G])
// @ first letter relet to te letter second to texture

 const texture = [WT,ET,LT,CT,OT,MT,TT,YT,HT,PT,AT,GT]
    const letterIndex = props.letterIndex


    const [hovered, setHovered] = useState(false)
    const [Clicked, setClicked] = useState(false)
    const meshRef = useRef()
    // making animation smooth
    const prop = useSpring({
        scale: Clicked ? [1.5, 1.5, 1.5] : [1, 1, 1],
        color: hovered ? 'red' : 'blue'

    })
    //react spring can turn static value to  animated 
    // console.log('hello world')

    //react animation // normal for react but not for three js 

    // three js 
    // game loop in loop have time stamp messing 

    //canvas normally have gpu driven canvas  and  try to make 60 frs 
    // can be hook function component

//! animation
useFrame(()=>{
//     // we can mutate // animate // the mesh so we need ref
    // meshRef.current.rotation.y += 0.01

    // meshRef.current.rotation.z += 0.01

    meshRef.current.rotation.x += 0.01


//     //execute on every frame 

})
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
        scale={prop.scale}
        ref={meshRef}
        // castShadow
        position={props.position}
        
    >
        {/* penumbra make the light little bit more soft */}
        {/* <spotLight position={[0,5,10]} penumbra={1} castShadow/> */}

        <a.boxBufferGeometry attach='geometry' args={[1, 1, 1]}  />
        {letterIndex !== undefined ? letterIndex.map((letter,index)=>
                    <a.meshBasicMaterial  attach={`material-${index}`} map={texture[letter]} /> 

        ) :null}

            {/* <a.meshBasicMaterial  attach="material-0" map={letterIndex[1]} />  */}
            {/*right*/}
            {/* <a.meshBasicMaterial  attach="material-1"  map={OT}/>  */}
            {/* left */}
            {/* <a.meshBasicMaterial  attach="material-2" map={TT}/>  */}
            {/* top  */}
            {/* <a.meshBasicMaterial  attach="material-3" map={TT}/>  */}
            {/* bottom */}
            {/* <a.meshBasicMaterial  attach="material-4"  color={prop.color}/> */}
             {/* front */}
            {/* <a.meshBasicMaterial  attach="material-5" map={LT}/> */}
             {/* back */}
       
{/* Basic material is not good for light / shadow */}

    </a.mesh>

    )
}



//thekitze twitter sizzy app