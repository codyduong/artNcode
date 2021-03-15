import ReactDOM from 'react-dom'
import React, { useRef } from 'react'
import { Canvas, extend, useFrame, useThree } from 'react-three-fiber'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

extend({ OrbitControls })

function Controls() {
  const controls = useRef()
  const { camera, gl } = useThree()
  useFrame(() => controls.current.update())
  return <orbitControls ref={controls} args={[camera, gl.domElement]} enableDamping dampingFactor={0.1} rotateSpeed={0.5} />
}

export default function App() {
  return (
    <Canvas style={{ background: '#272730' }}>
      <mesh>
        {/* <boxBufferGeometry attach="geometry" args={[2, 2, 2]} /> */}
        <cylinderGeometry args={[2, 2, 2, 32]}/>
        <meshNormalMaterial attach="material" />
      </mesh>
      <Controls />
    </Canvas>
  )
}

ReactDOM.render(<App/> ,document.getElementById('root'))