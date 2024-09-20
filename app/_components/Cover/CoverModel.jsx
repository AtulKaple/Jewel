
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function CoverModel(props) {
  const { nodes, materials } = useGLTF('/Cover.glb')
  return (
    <group {...props} dispose={null} rotation={[0, 0, 3.14]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_2.geometry}
        material={materials.silver}
        position={[-22.178, 23.983, -14.019]}
      />
    </group>
  )
}

useGLTF.preload('/Cover.glb')