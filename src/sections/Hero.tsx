import Astronout from "../components/Astronout"
import HeroText from "../components/HeroText"
import ParallaxBackground from "../components/ParallaxBackground"
const Hero = () => {
  return (
    <section className="flex items-start justify-center md:items-start md:justify-start min-h-screen overflow-visi c-space">
<HeroText/>
<ParallaxBackground/>
<figure className="absolute inset-0" style={{width:"100vw", height:"100vh"}} >
  <canvas>
    <Astronout/>
  </canvas>
</figure>
    </section>
  )
}

export default Hero
