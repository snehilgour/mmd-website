import React, { useRef, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

export function CarModel() {
  const carRef = useRef<THREE.Group>();
  const wheelRefs = useRef<(THREE.Mesh | null)[]>([]);
  const { setKeyboard } = useThree();
  
  // Simulated driving parameters
  const speed = useRef(0);
  const steering = useRef(0);
  const maxSpeed = 0.1;
  const acceleration = 0.001;
  const deceleration = 0.0005;
  
  // Initialize keyboard controls
  useEffect(() => {
    // Initialize keyboard state
    setKeyboard({
      forward: false,
      backward: false,
      left: false,
      right: false
    });

    const handleKeyDown = (e: KeyboardEvent) => {
      setKeyboard((state) => ({
        ...state,
        forward: e.key === 'w' || e.key === 'ArrowUp' ? true : state.forward,
        backward: e.key === 's' || e.key === 'ArrowDown' ? true : state.backward,
        left: e.key === 'a' || e.key === 'ArrowLeft' ? true : state.left,
        right: e.key === 'd' || e.key === 'ArrowRight' ? true : state.right,
      }));
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      setKeyboard((state) => ({
        ...state,
        forward: e.key === 'w' || e.key === 'ArrowUp' ? false : state.forward,
        backward: e.key === 's' || e.key === 'ArrowDown' ? false : state.backward,
        left: e.key === 'a' || e.key === 'ArrowLeft' ? false : state.left,
        right: e.key === 'd' || e.key === 'ArrowRight' ? false : state.right,
      }));
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [setKeyboard]);
  
  useFrame((state) => {
    if (!carRef.current) return;

    const keyboard = state.keyboard as { forward: boolean; backward: boolean; left: boolean; right: boolean };

    // Update speed based on keyboard input
    if (keyboard.forward) {
      speed.current = Math.min(speed.current + acceleration, maxSpeed);
    } else if (keyboard.backward) {
      speed.current = Math.max(speed.current - acceleration, -maxSpeed);
    } else {
      speed.current *= (1 - deceleration);
    }

    // Update steering based on keyboard input
    if (keyboard.left) {
      steering.current = Math.min(steering.current + 0.02, Math.PI / 4);
    } else if (keyboard.right) {
      steering.current = Math.max(steering.current - 0.02, -Math.PI / 4);
    } else {
      steering.current *= 0.95; // Return to center
    }

    // Apply movement
    carRef.current.position.z += Math.cos(carRef.current.rotation.y) * speed.current;
    carRef.current.position.x += Math.sin(carRef.current.rotation.y) * speed.current;
    carRef.current.rotation.y += steering.current * speed.current;

    // Rotate wheels
    wheelRefs.current.forEach((wheel) => {
      if (wheel) {
        wheel.rotation.x += speed.current;
      }
    });
  });

  return (
    <group ref={carRef}>
      {/* Car body */}
      <mesh position={[0, 0.5, 0]}>
        <boxGeometry args={[2, 1, 4]} />
        <meshStandardMaterial color="#ff0000" metalness={0.6} roughness={0.4} />
      </mesh>

      {/* Windshield */}
      <mesh position={[0, 1, 0.5]} rotation={[Math.PI / 6, 0, 0]}>
        <boxGeometry args={[1.8, 0.8, 0.1]} />
        <meshPhysicalMaterial
          color="#000000"
          metalness={0.9}
          roughness={0.1}
          transparent
          opacity={0.7}
        />
      </mesh>

      {/* Wheels */}
      {[[-1, -1], [1, -1], [-1, 1], [1, 1]].map((pos, index) => (
        <mesh
          key={index}
          ref={(el) => (wheelRefs.current[index] = el)}
          position={[pos[0], 0, pos[1]]}
          rotation={[0, 0, Math.PI / 2]}
        >
          <cylinderGeometry args={[0.4, 0.4, 0.2, 32]} />
          <meshStandardMaterial color="#333333" />
        </mesh>
      ))}
    </group>
  );
}