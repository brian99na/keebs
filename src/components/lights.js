import React from 'react'

function lights() {
  return (
    <>
        <directionalLight intensity={1} position={[0, 10, -5]}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-far={20}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
          castShadow
        />
        <ambientLight intensity={0.4}/>
        <pointLight intensity={0.2} position={[0, 5, 0]}/>
        <pointLight intensity={0.4} position={[-5, 5, 0]}/>
        <pointLight intensity={0.4} position={[0, 5, 2]}/>
        <pointLight intensity={0.2} position={[0, 5, -3]}/>
    </>
  )
}

export default lights