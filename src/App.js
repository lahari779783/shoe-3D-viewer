import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import ShoeViewer from "./ShoeViewer";
import "./index.css";

function App() {
  return (
    <Canvas
      shadows
      camera={{ position: [0, 1.5, 4], fov: 45 }}
      style={{ height: "100vh" }}
    >
      {/* Ambient Light */}
      <ambientLight intensity={0.3} />

      {/* Spotlights for highlighting the model */}
      <spotLight
        position={[3, 5, 2]}
        angle={0.5}
        penumbra={1}
        intensity={1.2}
        castShadow
        color={"white"}
      />
      <spotLight
        position={[-3, 5, 2]}
        angle={0.5}
        penumbra={1}
        intensity={1}
        castShadow
        color={"#f7d488"}
      />

      {/* 3D Content */}
      <ShoeViewer />

      {/* Studio Environment */}
      <Environment files="/studio.exr" background />

      {/* Camera Controls */}
      <OrbitControls />
    </Canvas>
  );
}

export default App;
