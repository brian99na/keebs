import React from 'react'

function lights() {
  return (
    <>
        <directionalLight intensity={1} position={[0, 10, 5]}
          shadow-mapSize-width={2024}
          shadow-mapSize-height={2024}
          shadow-camera-far={20}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={20}
          shadow-camera-bottom={-10}
          castShadow
        />
        <ambientLight intensity={0.6}/>
        <pointLight intensity={1} position={[0, 5, -2]}/>
        <pointLight intensity={1} position={[2, 5, -2]}/>
        <pointLight intensity={1} position={[-2, 5, -2]}/>
        <pointLight intensity={1} position={[0, 13, -7]}/>
        <pointLight intensity={1} position={[2, 13, -7]}/>
        <pointLight intensity={1} position={[-2, 13, -7]}/>
    </>
  )
}

export default lights