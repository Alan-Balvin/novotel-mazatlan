import React, { useState } from 'react'
import './Global.css'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Experiences from './sections/Experiences';
import Testimonial from './sections/Testimonial';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

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
      <Projects/>
      <Experiences/>
      <Testimonial/>
      <Contact/>
      <Footer/>
     
     

     
    </div>
  )
}

export default App
