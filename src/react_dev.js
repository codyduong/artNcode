import ReactDOM from 'react-dom'
import React, { 
  useRef,
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


//https://github.com/pmndrs/react-three-fiber/discussions/419
function Rocket(props) {
  const primitive = useRef();
  const gltf = useLoader(GLTFLoader, rocket)

  useFrame(() => {
    primitive.current.rotation.x += .01
    primitive.current.rotation.z += .015
    primitive.current.position.x = Math.sin(primitive.current.rotation.y)*5
    primitive.current.position.y = Math.cos(primitive.current.rotation.x)*5
  })

  gltf.scene.traverse(function (node) {
    if (node.isMesh) { node.castShadow = true; }
  });

  return {gltf} ? (
      <primitive ref={primitive} object={gltf.scene} position={[0,-15,0]} rotation={[0,0,0]} dispose={null}/> 
    ) : null
      
  // I have no fucking clue how to do this.
  // const model = useRef()
  // const {nodes} = useLoader(GLTFLoader, rocket)

  // useFrame(state => {
  //   //rawket.current.rotation += 0.1
  // })

  // return (
  //   <mesh ref={model}>
  //     <bufferGeometry dispose={false} attach="geometry" {...nodes.geometry} />
  //     <meshBasicMaterial attach="material" />
  //   </mesh>
  // )
}

//HERE IS HOW WE DO IMPERATIVE FUCKERY GOD FUCKING DAMNIT: https://github.com/pmndrs/react-three-fiber/blob/master/markdown/api.md#useUpdate
//Hours and hours down the drain, cause other answers are bad.
// function FuckSpotLights(props) {
//   const light = useUpdate(
//     (self) => {
//       self.lookAt(0,-10,0)
//     }
//   )
//   return (
//     <spotLight
//       position={[40, -5, 40]}
//       angle={0.3}
//       penumbra={1}
//       intensity={2}
//       castShadow
//       shadow-camera-far={150}
//       power={10}
//     />
//   )
// }


//idk
//https://github.com/pmndrs/react-three-fiber/blob/master/markdown/recipes.md
//There under managing imperative code
function SpotLight(props) {
  return (
    <spotLight
      position={[40, -5, 40]}
      angle={0.3}
      penumbra={1}
      intensity={2}
      castShadow
      shadow-camera-far={150}
      power={10}
      props
    />
  )
}


export default function App() {
  return (
    <Canvas shadowMap style={{ background: '#272730' }}>
      {/* <color attach="background" args={['lightblue']} /> */}
      <hemisphereLight intensity={0.35} />
      <SpotLight />
      <Physics>
        <Ground position={[0,-15,0]}/>
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