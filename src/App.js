import './App.css';
import React, { useEffect, useState} from 'react';
import { softShadows, OrbitControls, useGLTF } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { BsMouse2 } from 'react-icons/bs'


softShadows()

function Model() {
  const gltf = useGLTF('my_keyboard_postjoin.gltf', true)
  return (<primitive object={gltf.scene} dispose={null}/>)
}

function App() {

  const [camPos, setCamPos] = useState([0, 0, 25])

  useEffect(() => {
    setTimeout(() => {
      setCamPos([-5, 10, 20])
    }, 1200)
  }, [])

  console.log(camPos)

  return (
    <>
      <div className='message'>
        <BsMouse2 className='icon'/>
        <h1>click + drag to move</h1>
      </div>
      <nav>
        <h1>no.1</h1>
      </nav>
      <Canvas shadows camera={{ position: camPos, fov: 70}}>
        <directionalLight intensity={1} position={[0, 10, -5]}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
          castShadow
        />
        <ambientLight intensity={0.5}/>
        {/* <pointLight intensity={0.4} position={[0, 5, 0]}/> */}
        {/* <pointLight intensity={0.4} position={[-5, 0, 0]}/>
        <pointLight intensity={0.4} position={[0, 0, 2]}/>
        <pointLight intensity={0.2} position={[0, 0, -3]}/> */}
        <group>
          <mesh receiveShadow position={[0, -10, 0]} rotation={[-Math.PI / 2, 0, 0]}>
            <planeBufferGeometry attach='geometry' args={[100, 100]}/>
            <shadowMaterial attach='material' opacity={1}/>
          </mesh>
          <mesh position={[0, 0, 0]}>
              <Model castShadow />
          </mesh>
        </group>
        <OrbitControls/>
      </Canvas>
    </>
  );
}

export default App;
