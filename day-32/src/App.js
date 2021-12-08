import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { useSpring, animated } from '@react-spring/three';

function Sphere() {
  const [active, setActive] = useState(true);
  const { color } = useSpring({
    config: { duration: 900 },
    color: active ? '#caa316' : '#5c4a0a',
  });
  return (
    <animated.mesh scale={1.5} onPointerOver={() => setActive(!active)}>
      <sphereBufferGeometry attach='geometry' />
      <animated.meshStandardMaterial attach='material' color={color} />
    </animated.mesh>
  );
}

export default function App() {
  return (
    <Canvas>
      <OrbitControls />
      <Stars radius={200} />
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 15, 10]} angle={0.3} />
      <Sphere />
    </Canvas>
  );
}
