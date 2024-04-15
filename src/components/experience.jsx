import { OrbitControls } from "@react-three/drei";
import { Avatar } from "./Avatar";

export const Experience = () => {
  return (
    <>
      <OrbitControls />

      {/* <ambientLight intensity={0.1} /> */}
      <pointLight position={[1, -1, 1]} />

      <pointLight position={[1, 1, -1]} />
      <Avatar />
      <ambientLight intensity={1} />
    </>
  );
};
