import {
  Html,
  OrbitControls,
  PerspectiveCamera,
  Stars,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import "./App.css";
import Park from "./Components/Park";
import Loader from "./Components/Loader";

function App() {
  return (
    <>
      <h1>What happens?</h1>
      <Canvas id="three-container" dpr={[1.5, 2]} shadows>
        <color attach={"background"} args={["#9A5DE6"]} />

        <React.Suspense fallback={<Loader />}>
          <PerspectiveCamera makeDefault position={[2, 2, 2]} />

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
        </React.Suspense>
        <OrbitControls makeDefault enablePan={false} />
      </Canvas>
      <a
        href="https://github.com/dachieu2k2"
        className="top-left"
        children="Github"
      />
      <a
        href="https://www.facebook.com/hieu.hiihihaha/"
        className="top-right"
        children="facebook"
      />
      <a
        href="https://github.com/pmndrs/react-three-fiber"
        className="bottom-left"
        children="@react-three/fiber"
      />
    </>
  );
}

export default App;
