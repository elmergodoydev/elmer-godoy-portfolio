import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Sparkles } from '@react-three/drei'
import { useRef } from 'react'
import * as THREE from 'three'

function Background3D() {
  const group = useRef()

  useFrame(({ clock }) => {
    if (!group.current) return
    const t = clock.getElapsedTime()
    group.current.rotation.x = Math.sin(t * .16) * .08
    group.current.rotation.y = Math.cos(t * .13) * .12
  })

  const cubes = [
    [-2.6, 1.4, -0.8, .28], [-1.3, -.9, -.3, .2], [0, 1.7, -.5, .34], [1.4, -.85, -.7, .24], [2.5, 1.2, -.4, .3], [2.1, -.1, -.9, .16],
  ]

  return (
    <group ref={group}>
      <mesh rotation={[.3, .4, .2]} position={[0, 0, -.5]}>
        <icosahedronGeometry args={[1.5, 2]} />
        <meshBasicMaterial color="#0f4778" wireframe transparent opacity={.14} />
      </mesh>
      {cubes.map(([x, y, z, s], i) => (
        <Float key={i} speed={1.1 + i * .1} floatIntensity={.3} rotationIntensity={.45}>
          <mesh position={[x, y, z]} rotation={[.4, .5, i * .4]}>
            <boxGeometry args={[s, s, s]} />
            <meshStandardMaterial color="#0e3150" emissive="#168cff" emissiveIntensity={1.4} transparent opacity={.55} />
          </mesh>
        </Float>
      ))}
      <Sparkles count={70} scale={[7, 4.5, 3]} size={1.2} speed={.22} color="#57b8ff" />
    </group>
  )
}

export default function HeroScene() {
  return (
    <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 7], fov: 45 }} gl={{ antialias: true, alpha: true }}>
      <ambientLight intensity={.4} />
      <pointLight position={[3, 2, 4]} intensity={16} color="#168cff" />
      <pointLight position={[-3, -2, 2]} intensity={8} color="#67bcff" />
      <Background3D />
    </Canvas>
  )
}