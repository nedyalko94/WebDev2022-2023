/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: Alena Shek (https://sketchfab.com/ShekAlena)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/sea-house-bc4782005e9646fb9e6e18df61bfd28d
title: Sea House
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/House.gltf')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Object_2.geometry} material={materials['11112_sheet_Material__25']} />
        <mesh geometry={nodes.Object_3.geometry} material={materials['11112_sheet_Material__25']} />
        <mesh geometry={nodes.Object_4.geometry} material={materials['11112_sheet_Material__37']} />
        <mesh geometry={nodes.Object_5.geometry} material={materials['11112_sheet_Material__37']} />
        <mesh geometry={nodes.Object_6.geometry} material={materials['default']} />
      </group>
    </group>
  )
}

useGLTF.preload('/House.gltf')
