
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function StartingRingModal(props) {
  const { nodes, materials } = useGLTF('/ringring.glb')
 
  return (
    <group {...props} dispose={null}>
      <group position={[0, -0.043, -0.093]}>
        <group rotation={[-0.3, -0.3, 0.98]} scale={1.063}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.diamonds002.geometry}
            material={nodes.diamonds002.material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.diamonds001.geometry}
            material={nodes.diamonds001.material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.diamonds003.geometry}
            material={nodes.diamonds003.material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.diamonds005.geometry}
            material={nodes.diamonds005.material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.diamonds.geometry}
            material={nodes.diamonds.material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.diamonds004.geometry}
            material={nodes.diamonds004.material}
          />
          <mesh castShadow receiveShadow geometry={nodes.gold.geometry} material={materials.gold} />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.silver.geometry}
            material={materials.silver}
          />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/ringring.glb')