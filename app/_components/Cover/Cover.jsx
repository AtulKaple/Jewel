import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment } from '@react-three/drei'
import { CoverModel } from './CoverModel'

const Cover = () => {
  return (
    <div className='h-full w-full '>
        <Canvas>
            <Environment preset='city' />
            <OrbitControls enableZoom={false} enablePan={false} />
            <CoverModel scale={[0.25, 0.25, 0.25]}/>
        </Canvas>
    </div>
  )
}

export default Cover