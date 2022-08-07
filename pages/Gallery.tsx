import { Canvas } from "@react-three/fiber";
import {
  Bloom,
  DepthOfField,
  EffectComposer,
  Noise,
  Vignette,
} from "@react-three/postprocessing";
import React from "react";
import SceneContainer from "../components/three/SceneContainer";

function Gallery() {
  return (
    <main className="w-full h-screen">
      <section className="absolute top-0 left-0 right-0 z-40 py-8 bg-black/0 hover:bg-black/20 hover:backdrop-blur-md cursor-pointer">
        <h1 className="flex-full-center text-white text-5xl font-bold uppercase cursor-pointer">
          Welcome to my image gallery
        </h1>
        <p className="flex-full-center text-white text-2xl">Work In Progress</p>
      </section>
      <Canvas className="w-full h-full hidden sm:block">
        <EffectComposer>
          {/* <DepthOfField
            focusDistance={0}
            focalLength={0.02}
            bokehScale={1}
            height={720}
          />
          <Noise opacity={0.1} /> */}
          <Vignette eskil={false} offset={0.1} darkness={0.2} />
          <Bloom intensity={10} />
        </EffectComposer>
        <SceneContainer />
      </Canvas>
    </main>
  );
}

export default Gallery;
