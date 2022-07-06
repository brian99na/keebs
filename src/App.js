import "./App.css";
import { Suspense } from "react";
import { softShadows, OrbitControls, Loader } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { BsMouse2 } from "react-icons/bs";
import Lights from "./components/lights";
import Model from './components/model'
import Floor from './components/floor';

softShadows();

function App() {
  return (
    <>
      <div className="message">
        <BsMouse2 className="icon" />
        <h1>click + drag to move</h1>
      </div>
      <nav>
        <h1>no.1</h1>
      </nav>
      <Canvas
        shadows
        camera={{ position: [-20, 15, 25], fov: 70 }}
      >
        <Lights />
        <Suspense fallback={null}>
          <Model />
          <Floor />
        </Suspense>
        <OrbitControls minPolarAngle={0-Math.PI/2} maxPolarAngle={0+Math.PI/2}/>
      </Canvas>
      <Loader />
    </>
  );
}

export default App;
