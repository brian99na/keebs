import React from 'react'

function floor() {
  return (
    <>
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
            <planeBufferGeometry attach='geometry' args={[200, 200]}/>
            <shadowMaterial attach='material' opacity={.4}/>
        </mesh>
    </>
  )
}

export default floor