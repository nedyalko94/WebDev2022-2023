// import { useBox } from '@react-three/cannon'
import React,{useState,useRef} from 'react'
// import {useFrame}from '@react-three/fiber'
// import {BoxBufferGeometry,MeshBasicMaterial} from '@react-three/fiber'
import { useLoader } from "@react-three/fiber";
import { 
  TextureLoader,
  MeshBasicMaterial,
  DoubleSide,
  Group,
  ShapeGeometry,
  Mesh,
  Scene,
  Material,
  // ShapeGeometry,
  // Scene,
  //  Mesh
   } from "three";
   import{SVGLoader}from 'three/examples/jsm/loaders/SVGLoader'
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
import{extend} from '@react-three/fiber'
import{svg} from '@react-three/cannon'


function Box(props) {
  // instantiate a loader
const loader = new SVGLoader();

// load a SVG resource
loader.load(
	// resource URL
	'./BoxTexture/vale.svg',
	// called when the resource is loaded
	function ( data ) {

		const paths = data.paths;
		const group = new Group();

		for ( let i = 0; i < paths.length; i ++ ) {

			const path = paths[ i ];

			const material = new MeshBasicMaterial( {
				color: path.color,
				side: DoubleSide,
				depthWrite: false
			} );

			const shapes = SVGLoader.createShapes( path );

			for ( let j = 0; j < shapes.length; j ++ ) {

				const shape = shapes[ j ];
				const geometry = new ShapeGeometry( shape );
				const mesh = new Mesh ( geometry, material );
				group.add( mesh );

			}
      // return material

		}
    // console.log(data.xml)
    //  console.log(Material)


		// Scene.add( group );

	},
	// called when loading is in progresses

	// function ( xhr ) {

	// 	console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

	// },
	// called when loading has errors

	// function ( error ) {

	// 	console.log( 'An error happened' );

	// }
);

  //   const [ref,api] = useBox(()=> ({mass:0.1,position:[0,0,0]}))
  //  const meshRef = useRef<Mesh>(!null)
  const meshRef = useRef()
// const vsgLoader = SVGLoader()
  const[WT,ET,LT,CT,OT,MT,TT,YT,HT,PT,AT,GT,NullT] = useLoader(TextureLoader,[W,E,L,C,O,M,T,Y,H,P,A,G,Null])
  const texture = [WT,ET,LT,CT,OT,MT,TT,YT,HT,PT,AT,GT,NullT]
  const letterIndex = props.letterIndex

  const [hovered, setHovered] = useState(false)
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
    const animation = useSpring({
     
      from:{ scale:2 , rotation:[0, 0, 0],color:"red"},
      to:[
        {scale:1 ,  rotation:[0, 0, 0] ,color:"red" },
        {scale:1 ,  rotation:[0, 1.6, 0] ,color:"blue"},
        {scale:2 ,  rotation:[0, 1.6, 0] ,color:"red" },
        {scale:1 ,  rotation:[-Math.PI/2, 0, 0]  ,color:"yellow"},
        {scale:2 ,  rotation:[-Math.PI/2, 0, 0]  ,color:"green"},
        {scale:2 ,  rotation:[Math.PI/2, 0, 0]  ,color:"purple"}
    ],

      pause: hovered, 
      loop:false,
      config:{duration:2000}

    })

 
extend(loader)


  return (
    <a.mesh
    onPointerOver={() => setHovered(true)} //hover
    onPointerOut={() => setHovered(false)} // hover out 
    // onClick={() => { setClicked(!Clicked) }} // click
    //  has position rotation and scale 
    // scale={Clicked?[1.5,1.5,1.5]:[1,1,1]}
    // scale={Animation.scale}
    ref={meshRef}
    {...animation}
    // castShadow
    position={props.position}
    // {...prop}
    
    
>
  {/* <loader position={[0,0,440]}/> */}
  

           {/* penumbra make the light little bit more soft */}
        {/* <spotLight position={[0,5,10]} penumbra={1} castShadow/> */}

        <a.boxBufferGeometry attach='geometry' args={[10, 10, 10]}  />
        {letterIndex !== undefined ? letterIndex.map((letter,index)=>
                    <a.meshBasicMaterial key={index}  attach={`material-${index}`} map={texture[letter]} color={animation.color }/> 

        ) :null}

</a.mesh>  
)
}

export default Box