import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import React, { Suspense } from "react";
import ThreeGallery from "./ThreeGallery";

function SceneContainer() {
  return (
    <Suspense>
      <Environment background={true} files={"textures/shanghai_bund_1k.hdr"} />
      <PerspectiveCamera
        makeDefault
        fov={50}
        position={[-1.75, 10.85, 20.35]}
      />
      <OrbitControls
        target={[1, 5, 0]}
        maxPolarAngle={Math.PI * 0.5}
        maxDistance={20}
        minDistance={10}
      />
      <ThreeGallery />
    </Suspense>
  );
}

export default SceneContainer;
