import { useLoader } from "@react-three/fiber";
import React, { useEffect } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/gltfloader";

function ThreeGallery() {
  const gltf = useLoader(GLTFLoader, "/models/gallery.glb");

  useEffect(() => {
    if (!gltf) return;

    gltf.scene.children[0].material.map =
      gltf.scene.children[0].material.emissiveMap;
  }, [gltf]);

  return <primitive object={gltf.scene} />;
}

export default ThreeGallery;
