import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function FinalRingModel(props) {
  const { nodes, materials } = useGLTF("/Final.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes._0.geometry}
        material={materials.diamond}
        rotation={[-0.37, -0.003, 5.747]}
        position={[-1.178, 1.983, 3.019]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Diamond_Round_1.geometry}
          material={materials.pink}
        />
      </mesh>
    </group>
  );
}

useGLTF.preload("/Final.glb");
