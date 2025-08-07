import {Panel} from "../components/Panel"
import { Canvas } from "@react-three/fiber"
import HeroText from "../components/HeroText"
import ParallaxBackground from "../components/ParallaxBackground"
import { OrbitControls } from "@react-three/drei"
const Hero = () => {
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
      
    <Panel/>
    <OrbitControls/>
  </Canvas>
</figure>
    </section>
  )
}

export default Hero
