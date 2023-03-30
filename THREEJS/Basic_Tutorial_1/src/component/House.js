import React, { useEffect, useState } from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'


export default  function House() {
    const [model,setModel]=useState()
    useEffect(()=>{
        // first parameter is the location
       new GLTFLoader().load('./scene.gltf',setModel)
       console.log(model)

    },[])
  return (
    console.log(model),

    model?<primitive object={model.scene}/>:null
  )
}


