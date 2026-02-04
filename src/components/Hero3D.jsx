import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";

function AnimatedSphere() {
    return (
        <Sphere args={[1, 100, 200]} scale={2.2}>
            <MeshDistortMaterial
                color="#7c3aed"
                attach="material"
                distort={0.4}
                speed={2}
                roughness={0}
            />
        </Sphere>
    );
}

export default function Hero3D() {
    return (
        <Canvas camera={{ position: [0, 0, 5] }}>
            <ambientLight intensity={0.8} />
            <directionalLight position={[2, 1, 1]} />
            <AnimatedSphere />
            <OrbitControls enableZoom={false} />
        </Canvas>
    );
}
