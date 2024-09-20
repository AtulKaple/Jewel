import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment } from '@react-three/drei'
import { StartingRingModal } from './StartingRingModal'

const StartingRing = () => {
  return (
    <div className='h-full w-full flex items-center justify-center bg-transparent '>
        <Canvas>
            <Environment preset='dawn' />
            <OrbitControls enableZoom={false}  />
            <StartingRingModal scale={[2, 2, 2]}/>
        </Canvas>
    </div>
  )
}

export default StartingRing