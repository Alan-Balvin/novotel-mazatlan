import React, { useState } from 'react'
import './Global.css'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero';
import About from './sections/About';

type NavbarProps = {
  title: string;
  links: { label: string; href: string }[];
};

const App: React.FC = () => {
  const [count, setCount] = useState<number>(0)

  return (
    <div className='container mx-auto max-w-7xl' >
      <Navbar
        title='Electrical Blueprints'
        links={[
          { label: 'Home', href: '#home' },
          { label: 'Projects', href: '#projects' },
          { label: 'Plans', href: '#plans' },
          { label: 'Renders', href: '#renders' },
          { label: 'Videos', href: '#videos' }
        ]}
      />
      <Hero/>
      <About/>
      <section className='min-h-screen' />
      <section className='min-h-screen' />
      <section className='min-h-screen' />
      <section className='min-h-screen' />
     

     
    </div>
  )
}

export default App
