import ReactDOM from 'react-dom'
import React, { 
  useRef,
  useMemo 
} from 'react'
import { 
  Canvas, 
  extend, 
  useFrame, 
  useThree,
  useLoader,
} from 'react-three-fiber'
import {
  Physics,
  usePlane,
  useBox,
} from '@react-three/cannon'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import rocket from './f9rocket.gltf'

extend({ OrbitControls })

function Controls() {
  const controls = useRef()
  const { camera, gl } = useThree()
  useFrame(() => controls.current.update())
  return <orbitControls ref={controls} args={[camera, gl.domElement]} enableDamping dampingFactor={0.1} rotateSpeed={0.5} />
}

function Ground(props) {
  const [ref] = usePlane(() => ({rotation: [-Math.PI/2, 0, 0], position: [0, -1, 0], ...props}))
  return (
    <mesh ref={ref} receiveShadow>
      <planeBufferGeometry attach="geometry" args={[1000, 1000]} />
      <shadowMaterial attach="material" color="#171717" />
    </mesh>
  )
}

function Cube(props) {
  const [ref] = useBox(() => ({ mass: 1, position: [0, 5, 0], rotation: [0.4, 0.2, 0.5], ...props }))
  return (
    <mesh receiveShadow castShadow ref={ref}>
      <boxBufferGeometry attach="geometry" />
      <meshLambertMaterial attach="material" color="hotpink" />
    </mesh>
  )
}

function Rocket(props) {
  const gltf = useLoader(GLTFLoader, rocket)
  return {gltf} ? <primitive object={gltf.scene} /> : null
  // const gltf = useLoader(GLTFLoader, rocket)
  // const { nodes, material } = useLoader(GLTFLoader, rocket)
  // gltf.scene.children.forEach((mesh, i) => {
  //   mesh.castShadow = true;
  // })
  // gltf.castShadow = true;
  // gltf.scene.castShadow = true;

  // return (
  //   <mesh castShadow>
  //     <bufferGeometry attach="geometry" {...nodes} />
  //     <meshStandardMaterial attach="material" {...material} />
  //   </mesh>
  // );
}


export default function App() {
  return (
    <Canvas shadowMap style={{ background: '#272730' }}>
      {/* <color attach="background" args={['lightblue']} /> */}
      <hemisphereLight intensity={0.35} />
      <spotLight position={[10, 10, 10]} angle={0.3} penumbra={1} intensity={2} castShadow />
      <Physics>
        <Ground />
        {/* <Cube position={[0, 2, 0]}/> 
        <Cube position={[0, 3, 1]}/> 
        <Cube position={[1, 4, 0]}/> 
        <Cube position={[0, 5, 1]}/>  */}
        <Rocket />
      </Physics>
      <Controls />
    </Canvas>
  )
}

ReactDOM.render(<App/> ,document.getElementById('root'))