import React, { useRef, Suspense } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF, Html } from "@react-three/drei";
import "./index.css";

// Custom loader animation shown while the model loads
function Loader() {
  return (
    <Html center>
      <div className="loader">
        <div className="spinner" />
        <p className="loading-text">Loading shoe...</p>
      </div>
    </Html>
  );
}

// 3D Shoe Model component
function ShoeModel() {
  const shoeRef = useRef();
  const { scene } = useGLTF("/shoe.glb");

  useFrame(() => {
    if (shoeRef.current) {
      shoeRef.current.rotation.y += 0.005; // Rotate continuously
    }
  });

  return (
    <primitive
      object={scene}
      ref={shoeRef}
      position={[0, 0.8, 0]}
      scale={1.5}
      castShadow
      receiveShadow
    />
  );
}

// Viewer containing model and scene objects
function ShoeViewer() {
  return (
    <>
      {/* Show loader while model loads */}
      <Suspense fallback={<Loader />}>
        <ShoeModel />
      </Suspense>

      {/* Display Stand */}
      <mesh position={[0, 0.3, 0]} receiveShadow castShadow>
        <cylinderGeometry args={[1.2, 1.2, 0.2, 32]} />
        <meshStandardMaterial color="#222" />
      </mesh>

      {/* Floor with shadow */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
        <planeGeometry args={[10, 10]} />
        <shadowMaterial opacity={0.3} />
      </mesh>
    </>
  );
}

export default ShoeViewer;
