import { usePlane } from "@react-three/cannon";
import React from "react";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";

function Plane(props) {
  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
  }));
  // keep the object to not fall throw
  const colorMap = useLoader(TextureLoader, "./textures/neptune.jpg");

  return (
    <>
      <mesh
        position={[0, 0, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        ref={ref}
      >
        <planeBufferGeometry attach="geometry" args={props.size} />
        <meshBasicMaterial attach="material" map={colorMap} />
      </mesh>
    </>
  );
}

export default Plane;
