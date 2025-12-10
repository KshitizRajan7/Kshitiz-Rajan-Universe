"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import * as THREE from "three";
import { useEffect, useState, useMemo } from "react";

// Earth Component
const Earth = () => {

  // Load textures safely
  const dayTexture = useMemo(
    () => new THREE.TextureLoader().load("/earthDay.jpg"),
    []
  );
  const nightTexture = useMemo(
    () => new THREE.TextureLoader().load("/earthNight.jpg"),
    []
  );

  // Create shader
  const shaderMaterial = useMemo(
    () =>
      new THREE.ShaderMaterial({
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
      }),
    [dayTexture, nightTexture]
  );

  return (
    <mesh material={shaderMaterial}>
      <sphereGeometry args={[1.5, 32, 32]} />
    </mesh>
  );
};

// Sun Component (Massive Glowing Star)
const Sun = () => {
   const sunTexture = new THREE.TextureLoader().load('https://upload.wikimedia.org/wikipedia/commons/c/cb/Solarsystemscope_texture_2k_sun.jpg');
  return (
    <mesh position={[200, 0, 200]}>
      <sphereGeometry args={[100, 100, 100]} />
      <meshBasicMaterial map={sunTexture} />
    </mesh>
  );
};

// Main Scene
const SpinningEarthScene = () => {
  const [cameraPos, setCameraPos] = useState([5, 2, 5]);

  useEffect(() => {
    const updateCamera = () => {
      if (window.innerWidth < 768) {
        setCameraPos([8, 3, 8]); // mobile view
      } else {
        setCameraPos([5, 2, 5]); // desktop view
      }
    };
    updateCamera();
    window.addEventListener("resize", updateCamera);
    return () => window.removeEventListener("resize", updateCamera);
  }, []);

  return (
    <Canvas camera={{ position: cameraPos, fov: 50 }}>
      {/* Ambient light for soft lighting */}
      <ambientLight intensity={0.3} />

      {/* Sun emits strong light */}
      <pointLight position={[10, 0, 10]} intensity={4} distance={50} />
      <directionalLight position={[10, 0, 10]} intensity={3} />

      {/* Objects */}
      <Sun />
      <Earth />
      <Stars radius={100} depth={50} count={2000} factor={4} fade />

      <OrbitControls autoRotate autoRotateSpeed={0.5} />
    </Canvas>
  );
};

export default SpinningEarthScene;
