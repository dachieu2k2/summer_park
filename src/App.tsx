import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import "./App.css";
import Park from "./Components/Park";
import * as THREE from "three";

function App() {
  return (
    <Canvas id="three-container" shadows>
      <color attach={"background"} args={["#9A5DE6"]} />
      <React.Suspense fallback={null}>
        <OrbitControls makeDefault />
        <PerspectiveCamera makeDefault position={[2, 2, 2]} />

        <Park scale={0.2} />
        {/* Light */}
        <primitive object={new THREE.AxesHelper(10)} />

        <ambientLight args={["#9A5DE6", 0.5]} />
        {/* <rectAreaLight position={[0, 2, 0]} args={["#9A5DE6", 2, 3, 3]} /> */}
        <pointLight castShadow position={[0, 1, 0]} args={["#FF8666", 4, 3]} />
        {/* <rectAreaLight /> */}
      </React.Suspense>
    </Canvas>
  );
}

export default App;
