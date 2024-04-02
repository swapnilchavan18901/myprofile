import { Canvas } from "@react-three/fiber";
import { Experience } from "./experience";
import {
  ContactShadows,
  Environment,
  OrbitControls,
  Sky,
} from "@react-three/drei";
import { Avatar } from "./Avatar";
const LoadAvatar = () => {
  return (
    <Canvas shadows camera={{ position: [0, 2, 5], fov: 20 }}>
      <mesh>
        <color attach={"background"} args={["#ececec"]} />
        <Experience />
      </mesh>
    </Canvas>
  );
};

export default LoadAvatar;
