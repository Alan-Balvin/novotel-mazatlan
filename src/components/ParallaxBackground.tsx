import React from 'react'

const ParallaxBackground = () => {
  return (
    <section className='absolute inset-0 bg-black/40' >

    <div className='relative h-screen overflow-y-hidden'>
        {/*Background sky*/}
      <div className='absolute inset-0 w-full h-screen'
      style={{
        backgroundImage:"url(/assets/sky.jpg)",
        backgroundPosition:"bottom",
        backgroundSize:"cover",}}/>
      <div/>

      <div/>

      <div/>

      <div/>
    </div>
    </section>
  )
}

export default ParallaxBackground
