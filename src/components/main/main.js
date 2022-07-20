import { Suspense } from "react";
import { softShadows, Loader, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import Lights from "../lights";
import Model from '../model'
import Floor from '../floor';
import './main.css'
import { useSpring, a } from '@react-spring/three'

softShadows();

function Main(props) {

  const handleModel = useSpring({
    "position": props.page === -1 ? [-500, 0, 500] : props.page === 0 ? [-50, 20, 50] : [0, 20, 15],
    "scenePosition": props.page === 0 ? [0, 0, 0] : [-7, 0, 0]
  })

  const Dolly = () => {
    useFrame((state) => {
      // state.camera.position.z = 50 + Math.sin(state.clock.getElapsedTime()) * 30
      state.camera.lookAt(0, 0, 0)
      state.camera.updateProjectionMatrix()
    })
    return null
  }

  return (
    <div className="main">
      <Canvas
        shadows
      >
        <a.group position={handleModel.position}>
          <PerspectiveCamera makeDefault fov={30} rotation={[0, 0, 0]} position={[0, 15, 0]}/>
        </a.group>
        <Suspense fallback={null}>
          <a.group position={handleModel.scenePosition} rotation={[0, 0, 0]}>
            <Lights />
            <Model/>
            <Floor />
          </a.group>
        </Suspense>
        <OrbitControls enablePan={false} enableRotate={false} target={[0, 0, 0]}/>
        <Dolly />
      </Canvas>
      <Loader />
    </div>
  );
}

export default Main;
