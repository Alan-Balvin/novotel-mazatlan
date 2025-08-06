import { motion, useScroll, useTransform } from 'framer-motion'


const ParallaxBackground = () => {
  const {scrollYProgress} = useScroll();
  const conduits3Y = useTransform(scrollYProgress, [0,0.5], ["0%","40%"]);
  const planetsX = useTransform(scrollYProgress, [0,0.5], ["0%","-20%"]);
  const mountain2Y = useTransform(scrollYProgress, [0,0.5], ["0%","30%"]);
  const mountain1Y = useTransform(scrollYProgress, [0,0.5], ["0%","0%"]);
  return (
    <section className='absolute inset-0 bg-black/40' >

    <div className='relative h-screen overflow-y-hidden'>
        {/*Background sky*/}
      <div className='absolute inset-0 w-full h-screen'
      style={{
        backgroundImage:"url(/assets/sky.jpg)",
        backgroundPosition:"bottom",
        backgroundSize:"cover",}}/>
      <motion.div className='absolute inset-0 '
      style={{
        backgroundImage:"url(/assets/conduits.png)",
        backgroundPosition:"bottom",
        backgroundSize:"cover",
        y: conduits3Y,}}
       />

      <div/>

      <div/>

      <div/>
    </div>
    </section>
  )
}

export default ParallaxBackground
