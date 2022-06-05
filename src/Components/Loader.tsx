import { Html, useProgress } from "@react-three/drei";
import React from "react";

const Loader = () => {
  const { progress } = useProgress();
  console.log(progress);

  return (
    <Html center style={{ fontSize: "2rem" }}>
      <div className="wrapper">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="shadow"></div>
        <div className="shadow"></div>
        <div className="shadow"></div>
        <span>Loading</span>
      </div>
    </Html>
  );
};

export default Loader;
