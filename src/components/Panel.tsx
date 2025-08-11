import * as THREE from 'three'
import { useAnimations, useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { ThreeElements } from '@react-three/fiber'
import { useRef, useEffect } from 'react'

type GLTFResult = GLTF & {
  nodes: {
    ujzfde2_LOD0_TIER1_000_MatID_1_0: THREE.Mesh
  }
  materials: {
    Electrical_Cabinet_ujzfde2_High: THREE.MeshStandardMaterial
  }
}

function useValidatedGLTF(url: string): GLTFResult {
  const gltf = useGLTF(url)

  // Validaciones en runtime (como antes)
  if (
    !('nodes' in gltf) ||
    typeof gltf.nodes !== 'object' ||
    !('ujzfde2_LOD0_TIER1_000_MatID_1_0' in gltf.nodes) ||
    !(gltf.nodes.ujzfde2_LOD0_TIER1_000_MatID_1_0 instanceof THREE.Mesh) ||
    !('materials' in gltf) ||
    typeof gltf.materials !== 'object' ||
    !('Electrical_Cabinet_ujzfde2_High' in gltf.materials) ||
    !(gltf.materials.Electrical_Cabinet_ujzfde2_High instanceof THREE.MeshStandardMaterial)
  ) {
    throw new Error(`GLTF model structure mismatch or missing properties in ${url}`)
  }

  // Solo después de validar casteamos así para evitar el error TS
  return gltf as unknown as GLTFResult
}



export function Panel(props: ThreeElements['group']) {
   const group = useRef<THREE.Group | null>(null) 
  const { nodes, materials, animations } = useValidatedGLTF('/panels/electrical_cabinet_ujzfde2_high.glb')
const { actions } = useAnimations(animations, group)
useEffect(()=> { if (animations.length > 0)
{ actions[animations[0].name]?.play()}
},[actions, animations])

const mat = materials.Electrical_Cabinet_ujzfde2_High
mat.metalness = 2.0
mat.roughness = 0.2
mat.emissive = new THREE.Color(0x333333)
mat.emissiveIntensity = 0.5

  return (
    <group {...props} dispose={null}>
     <mesh
  castShadow
  receiveShadow
  geometry={nodes.ujzfde2_LOD0_TIER1_000_MatID_1_0.geometry}
  material={mat}
  scale={0.01}
/>
    </group>
  )
}

useGLTF.preload('/panels/electrical_cabinet_ujzfde2_high.glb')
