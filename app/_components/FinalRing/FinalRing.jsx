import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment } from '@react-three/drei'
import { FinalRingModel } from './FinalRingModel'


const FinalRing = () => {
  return (
    <div className='h-[100vh] w-full '>
        <Canvas>
            <Environment preset='city' />
            <OrbitControls enableZoom={false} enablePan={false} />
            <FinalRingModel scale={[0.15, 0.15, 0.15]}/>
        </Canvas>
    </div>
  )
}

export default FinalRing