import React, { useState } from 'react'
import { useGLTF } from "@react-three/drei";
import { useSpring, a } from '@react-spring/three'

function Model() {
    const [spread, setSpread] = useState(false)

    const keycaps = useGLTF("keycaps.gltf", true);
    const top = useGLTF("top.gltf", true);
    const bottom = useGLTF("bottom.gltf", true);
    const plate = useGLTF("plate.gltf", true);

    top.scene.traverse(function(node) {
      if (node.isMesh) {
        node.castShadow = true
      }
    })
    bottom.scene.traverse(function(node) {
      if (node.isMesh) {
        node.castShadow = true
      }
    })
    keycaps.scene.traverse(function(node) {
      if (node.isMesh) {
        node.castShadow = true
      }
    })
    plate.scene.traverse(function(node) {
      if (node.isMesh) {
        node.castShadow = true
      }
    })

    const handleSpread = () => {
      setSpread(!spread)
    } 

    const spreadAnimation = useSpring({
      capPosition: spread ? [0, 3, -2] : [0, 0, 0],
      topPosition: spread ? [0, 2.25, -1] : [0, 0, 0],
      platePosition: spread ? [0, 1.5, 0] : [0, 0, 0],
      botPosition: spread ? [0, 0.75, 2] : [0, 0, 0],
      plateRotation: spread ? [0.2, 0, 0] : [0, 0, 0]
    })

    return(
      <group onClick={handleSpread}>
        <mesh castShadow>
          <a.primitive rotation={spreadAnimation.plateRotation} position={spreadAnimation.capPosition} object={keycaps.scene} dispose={null} />
        </mesh>
        <mesh>
          <a.primitive position={spreadAnimation.topPosition} object={top.scene} dispose={null} />
        </mesh>
        <mesh>
          <a.primitive position={spreadAnimation.botPosition} object={bottom.scene} dispose={null} />
        </mesh>
        <mesh>
          <a.primitive position={spreadAnimation.platePosition} object={plate.scene} dispose={null} />
        </mesh>
      </group>
    )
  }
  

function model() {
  return (
    <>
        <group>
          <Model />
        </group>
    </>
  )
}

export default model