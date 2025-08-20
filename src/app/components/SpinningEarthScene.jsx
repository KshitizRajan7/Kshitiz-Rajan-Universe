"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { useRef, Suspense } from "react";
import * as THREE from "three";

const Earth = () => {
    const earthRef = useRef();

    const dayTexture = new THREE.TextureLoader().load("/earthDay.jpg");
    const nightTexture = new THREE.TextureLoader().load("/earthNight.jpg");

    useFrame((state, delta) => {
        if (earthRef.current) {
            earthRef.current.rotation.y += delta * 0.2;
        }
    });

    return (
        <mesh ref={earthRef}>
            <sphereGeometry args={[1.5, 64, 64]} />
            <meshStandardMaterial
                map={dayTexture}            // Day texture
                emissiveMap={nightTexture}
                emissiveIntensity={2}
                metalness={0.8}
                roughness={1}
            />
        </mesh>
    );
};

const Sun = ({ position = [500, 5, 10], intensity = 2 }) => {

    const sunMap = new THREE.TextureLoader().load('/sun.jpg')
    return (
        <>
            {/* Directional light acts as the Sun */}
            <directionalLight
                position={position}
                intensity={intensity}
                castShadow
                shadow-mapSize-width={1024}
                shadow-mapSize-height={1024}
            />
            {/* Visual Sun */}
            <mesh position={position}>
                <sphereGeometry args={[100, 320, 320]} /> {/* bigger radius */}
                <meshBasicMaterial map={sunMap} />
            </mesh>
        </>
    );
};
const Moon = ({ position = [1, 5, 10], intensity = 2 }) => {

    const moonMap = new THREE.TextureLoader().load('/moon.jpg')
    return (
        <>
            {/* Directional light acts as the Sun */}
            <directionalLight
                position={position}
                intensity={intensity}
                castShadow
                shadow-mapSize-width={1024}
                shadow-mapSize-height={1024}
            />
            {/* Visual Sun */}
            <mesh position={position}>
                <sphereGeometry args={[0.5,  64, 64]} /> {/* bigger radius */}
                <meshBasicMaterial map={moonMap} />
            </mesh>
        </>
    );
};

const SpinningEarthScene = () => {
    return (
        <div className="w-screen h-screen bg-black">
            <Canvas camera={{ position: [5, 2, 5], fov: 50 }} shadows>
                <ambientLight intensity={2} />

                <Suspense fallback={null}>
                    <Earth />
                    <Stars radius={100} depth={50} count={5000} factor={4} fade />
                </Suspense>

                <Sun position={[500, 5, 10]} intensity={2} />
                <Moon position={[1, 5, 10]} intensity={2} />

                <OrbitControls enableZoom enableRotate enablePan />
            </Canvas>
        </div>
    );
};

export default SpinningEarthScene;
