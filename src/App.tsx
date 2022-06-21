import {
  Html,
  OrbitControls,
  PerspectiveCamera,
  Stars,
  Text,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import "./App.css";
import Park from "./Components/Park";
import Loader from "./Components/Loader";

function App() {
  return (
    <>
      <Canvas id="three-container" shadows>
        <color attach={"background"} args={["#9A5DE6"]} />
        <PerspectiveCamera makeDefault position={[1.75, 1.75, 1.75]} />

        <React.Suspense fallback={<Loader />}>
          <Park scale={0.2} />

          <Stars radius={200} depth={50} count={1000} factor={10} />
          {/* Light */}
          {/* <primitive object={new THREE.AxesHelper(10)} /> */}

          <ambientLight args={["#9A5DE6", 0.5]} />
          {/* <rectAreaLight position={[0, 2, 0]} args={["#9A5DE6", 2, 3, 3]} /> */}
          <pointLight
            castShadow
            position={[0, 1, 0]}
            args={["#FF8666", 4, 3]}
          />
          {/* <rectAreaLight /> */}
          <OrbitControls makeDefault enablePan={false} />
        </React.Suspense>
      </Canvas>
      <a href="https://github.com/dachieu2k2" className="top-left">
        <h1>SUMMER PARK</h1>
      </a>
      <a
        href="https://www.facebook.com/hieu.hiihihaha/"
        className="top-right"
        children="@facebook"
      />
      <a
        href="https://github.com/pmndrs/react-three-fiber"
        className="bottom-left"
        children="@react-three/fiber"
      />
      <a
        href="https://github.com/dachieu2k2"
        className="bottom-right"
        children="@github"
      />
    </>
  );
}

export default App;
