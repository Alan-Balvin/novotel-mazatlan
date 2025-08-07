import { motion, useScroll, useSpring, useTransform } from 'framer-motion'


const ParallaxBackground = () => {
  const {scrollYProgress} = useScroll();
  const x = useSpring(scrollYProgress, {damping: 50});
  const conduits3Y = useTransform(x, [0,0.5], ["0%","40%"]);
  const planetsX = useTransform(x, [0,0.5], ["0%","60%"]);
  const mountain2Y = useTransform(x, [0,0.5], ["0%","30%"]);
  const mountain1Y = useTransform(x, [0,0.5], ["0%","0%"]);
  return (
    <section className='absolute inset-0 bg-black/40' >

    <div className='relative h-screen overflow-y-hidden '>
        {/*Background sky*/}
      <div className='absolute inset-0 w-full h-screen '
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
       <motion.div className='absolute inset-0 '
      style={{
        backgroundImage:"url(/assets/planets.png)",
        backgroundPosition:"bottom",
        backgroundSize:"cover",
        x: planetsX,}}
       />
       <motion.div className='absolute inset-0 '
      style={{
        backgroundImage:"url(/assets/mountain-2.png)",
        backgroundPosition:"bottom",
        backgroundSize:"cover",
        y: mountain2Y,}}
       />
       <motion.div className='absolute inset-0 '
      style={{
        backgroundImage:"url(/assets/mountain-1.png)",
        backgroundPosition:"bottom",
        backgroundSize:"cover",
        y: mountain1Y,}}
       />

      <div/>

      <div/>

      <div/>
    </div>
    </section>
  )
}

export default ParallaxBackground
