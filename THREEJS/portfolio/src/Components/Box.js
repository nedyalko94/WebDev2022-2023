// import { useBox } from '@react-three/cannon'
import React,{useRef} from 'react'
// import {useFrame}from '@react-three/fiber'
// import {BoxBufferGeometry,MeshBasicMaterial} from '@react-three/fiber'
import { useLoader } from "@react-three/fiber";
import { 
  TextureLoader,
  // MeshBasicMaterial,
  // DoubleSide,
  // Group,
  // ShapeGeometry,
  // Mesh,
  // Scene,
  // Material,
  // ShapeGeometry,
  // Scene,
  //  Mesh
   } from "three";
  //  import{SVGLoader}from 'three/examples/jsm/loaders/SVGLoader'
  //  RGBELoader
import { useSpring, a } from '@react-spring/three'

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
import Null from './BoxTexture/NULL.png'
// import vale from './BoxTexture/vale.svg'
// import{extend} from '@react-three/fiber'
// import{svg} from '@react-three/cannon'


function Box(props) {


  //   const [ref,api] = useBox(()=> ({mass:0.1,position:[0,0,0]}))
  //  const meshRef = useRef<Mesh>(!null)
  const meshRef = useRef()
// const vsgLoader = SVGLoader()
  const[WT,ET,LT,CT,OT,MT,TT,YT,HT,PT,AT,GT,NullT] = useLoader(TextureLoader,[W,E,L,C,O,M,T,Y,H,P,A,G,Null])
  const texture = [WT,ET,LT,CT,OT,MT,TT,YT,HT,PT,AT,GT,NullT]
  const letterIndex = props.letterIndex

  // const [hovered, setHovered] = useState(false)
  // const [Clicked, setClicked] = useState(false) 

  // const prop = useSpring({
    // scale: Clicked ? [1, 1, 1] : [2, 2, 2],
    // color: hovered ?  'blue':'red' 

// })

  // useFrame(()=>{
        // meshRef.current.rotation.y += 0.01
    
        // meshRef.current.rotation.z += 0.01
    
        // meshRef.current.rotation.x += 0.01

    // })
    const [animation,api] = useSpring(()=>({
     
      from:{ scale:2 ,position:props.position[0], rotation:[0, 0, 0],color:"red",opacity:1},
      to:[
        {scale:1 ,position:props.position[0],  rotation:[0, 0, 0]           ,color:"red" },
        {scale:1 ,position:props.position[1],  rotation:[0, 1.6, 0]         ,color:"blue"},
        {scale:2 ,position:props.position[1],  rotation:[0, 1.6, 0]         ,color:"red" },
        {scale:1 ,position:props.position[2],  rotation:[-Math.PI/2, 0, 0]  ,color:"yellow"},
        {scale:2 ,position:props.position[2],  rotation:[-Math.PI/2, 0, 0]  ,color:"green"},
        {scale:2 ,position:props.position[0],  rotation:[Math.PI/2, 0, 0]   ,color:"purple"},
        { scale:2 ,position:props.position[0], rotation:[0, 0, 0],color:"red",opacity:1}
    ],

      
      loop:true,
      config:{duration:2000}

    }))

 


  return (
    <a.mesh
    onPointerOver={() => api.pause()} //hover
    onPointerOut={() => api.resume()} // hover out 
    // onClick={() => { setClicked(!Clicked) }} // click
    //  has position rotation and scale 
    // scale={Clicked?[1.5,1.5,1.5]:[1,1,1]}
    // scale={Animation.scale}
    ref={meshRef}
    {...animation}
    // castShadow
    // position={props.position[0]}
    // opacity={1}
    // {...prop}
    
    
>
  {/* <loader position={[0,0,440]}/> */}
  

           {/* penumbra make the light little bit more soft */}
        {/* <spotLight position={[0,5,10]} penumbra={1} castShadow/> */}

        <a.boxBufferGeometry attach='geometry' args={[10, 10, 10]}  />
        {letterIndex !== undefined ? letterIndex.map((letter,index)=>
                    <a.meshPhongMaterial key={index}  attach={`material-${index}`} map={texture[letter]} color={animation.color } /> 

        ) :null}

</a.mesh>  
)
}

export default Box

//
 