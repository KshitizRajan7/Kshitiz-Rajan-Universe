"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import * as THREE from "three";
import { useEffect, useState } from "react";

// Earth Component
const Earth = () => {
    const dayTexture = new THREE.TextureLoader().load("/earthDay.jpg");
    const nightTexture = new THREE.TextureLoader().load("/earthNight.jpg");

    const shaderMaterial = new THREE.ShaderMaterial({
        uniforms: {
            dayTexture: { value: dayTexture },
            nightTexture: { value: nightTexture },
            lightDirection: { value: new THREE.Vector3(5, 0, 5).normalize() },
        },
        vertexShader: `
      varying vec3 vNormal;
      varying vec2 vUv;
      void main() {
        vNormal = normalize(mat3(modelMatrix) * normal);
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
        fragmentShader: `
      uniform sampler2D dayTexture;
      uniform sampler2D nightTexture;
      uniform vec3 lightDirection;
      varying vec3 vNormal;
      varying vec2 vUv;
      void main() {
        float dotNL = dot(normalize(vNormal), normalize(lightDirection));
        dotNL = clamp(dotNL, 0.0, 1.0);
        vec4 dayColor = texture2D(dayTexture, vUv);
        vec4 nightColor = texture2D(nightTexture, vUv);
        gl_FragColor = mix(nightColor, dayColor, dotNL);
      }
    `,
    });

    return (
        <mesh material={shaderMaterial}>
            <sphereGeometry args={[1.5, 32, 32]} />
        </mesh>
    );
};

// Main Scene
const SpinningEarthScene = () => {
    const [cameraPos, setCameraPos] = useState([5,2,5]); // default desktop

  useEffect(() => {
    const updateCamera = () => {
      if (window.innerWidth < 768) {
        // Mobile
        setCameraPos([8, 3, 8]);
      } else {
        // Desktop
        setCameraPos([5,2,5]);
      }
    };

    updateCamera(); // initial
    window.addEventListener("resize", updateCamera);

    return () => window.removeEventListener("resize", updateCamera);
  }, []);
    return (
        <Canvas camera={{ position: cameraPos, fov: 50 }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[5, 0, 5]} intensity={2} />

            <Earth />
            <Stars radius={100} depth={50} count={2000} factor={4} fade />

            <OrbitControls autoRotate autoRotateSpeed={0.5} />
        </Canvas>
    );
};

export default SpinningEarthScene;
