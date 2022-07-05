import React from 'react'
import { useGLTF } from "@react-three/drei";

function Model() {
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

    return(
      <>
        <mesh castShadow>
          <primitive object={keycaps.scene} dispose={null} />
        </mesh>
        <mesh>
          <primitive object={top.scene} dispose={null} />
        </mesh>
        <mesh>
          <primitive object={bottom.scene} dispose={null} />
        </mesh>
        <mesh>
          <primitive object={plate.scene} dispose={null} />
        </mesh>
      </>
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