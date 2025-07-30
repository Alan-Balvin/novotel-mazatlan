import { FlipWords } from "./FlipWords"
import { motion } from "motion/react" 
const words= ["BIM", "Electrical", "Systems"];
const HeroText = () => {
  return (
    <div className="z-10 mt-20 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text">
        {/*DesktopView */}
        <div className="flex-col hidden md:flex c-space" >
          <motion.h1 className="text-4xl font-medium">Hi I am Eduardo</motion.h1> 
          <motion.div className="flex flex-col items-start">
            <motion.p className="text-5xl font-medium text-neutral-300" >An Architect specialized in modeling</motion.p>
<motion.div><FlipWords words={words} className="font-black text-white text-7xl" /></motion.div>
            <motion.p className="text-4xl font-medium text-neutral-300" >Solutions</motion.p>

            </motion.div> 
        </div>
        {/*Mobile View*/}
      <div className="flex- flex-col space-y-6 md:hidden" >
        <motion.p className="text-4xl font-medium" >Hi </motion.p>
        <div>
          <motion.p className="text-5xl font-black text-neutral-300">Building</motion.p>
          <motion.div><FlipWords words={words} className="font-bold text-white text-7xl"/></motion.div>
          <motion.p className="text-4xl font-black text-neutral-300">Electrical Applications</motion.p>
        </div>
      </div>
    </div>
  )
}

export default HeroText
