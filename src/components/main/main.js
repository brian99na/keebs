import { Suspense } from "react";
import { softShadows, Loader } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Lights from "../lights";
import Model from '../model'
import Floor from '../floor';
import './main.css'

softShadows();

function Main() {

  return (
    <div className="main">
      <Canvas
        shadows
      camera={{ position: [-20, 15, 25], fov: 70 }}
      >
        <Lights />
        <Suspense fallback={null}>
          <Model/>
          <Floor />
        </Suspense>
      </Canvas>
      <Loader />
    </div>
  );
}

export default Main;
