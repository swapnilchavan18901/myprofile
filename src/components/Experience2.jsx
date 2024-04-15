import { OrbitControls } from "@react-three/drei";
import { Avatar2 } from "./Avatar2";

export const Experience2 = () => {
  return (
    <>
      <OrbitControls />

      {/* <ambientLight intensity={0.1} /> */}
      <pointLight position={[1, -1, 1]} />

      <pointLight position={[1, 1, -1]} />
      <Avatar2 />
      <ambientLight intensity={1} />
    </>
  );
};
