import {Panel} from "../components/Panel"
import { Canvas } from "@react-three/fiber"
import HeroText from "../components/HeroText"
import ParallaxBackground from "../components/ParallaxBackground"
import { OrbitControls } from "@react-three/drei"
import { useMediaQuery } from "react-responsive"
import { useFrame } from "@react-three/fiber"
import { easing } from 'maath';

const Hero = () => {
  const isMobile = useMediaQuery({maxWidth:853})
  return (
    <section className="flex items-start justify-center md:items-start md:justify-start min-h-screen overflow-visible c-space">
<HeroText/>
<ParallaxBackground/>
<section/>
<section/>
<section/>
<figure className="absolute inset-0" style={{width:"100vw", height:"100vh"}} >
      <Canvas camera={{ position: [0, 1, 5] }}>
      <ambientLight intensity={1.0} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      
    <Panel scale={isMobile ? 1 : undefined}
           position={isMobile ? [0,-1.5, 0] : undefined}/>
    <OrbitControls/>
    <Rig/>
  </Canvas>
</figure>
    </section>
  )
}

export default Hero

function Rig(){
  return useFrame((state, delta)=>{
    easing.damp3(state.camera.position, [
      state.mouse.x / 10,
      1 + state.mouse.y / 10,
      3
    ], 0.5,
  delta);
  });
}