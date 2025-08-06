import HeroText from "../components/HeroText"
import ParallaxBackground from "../components/ParallaxBackground"
const Hero = () => {
  return (
    <section className="flex items-start justify-center md:items-start md:justify-start min-h-screen overflow-visi c-space">
<ParallaxBackground/>
<HeroText/>
    </section>
  )
}

export default Hero
