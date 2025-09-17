import React, { useState, useRef, useEffect } from 'react'
import './Global.css'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Experiences from './sections/Experiences';
import Testimonial from './sections/Testimonial';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import PlansPage from './sections/PlansPage';

type NavbarProps = {
  title: string;
  links: { label: string; href: string }[];
};

const App: React.FC = () => {
  
  const [activeSection, setActiveSection] = useState<string>('Home');

  const plansRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (activeSection === 'Plans') {
      setTimeout(() => {
        plansRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 50); // 50ms asegura que el contenido esté en el DOM
    }
  }, [activeSection]);
  return (
    <div className='container mx-auto max-w-7xl' >
      <Navbar
        title='Electrical Blueprints'
        links={[
          { label: 'Home', href: '#home' },
          { label: 'Projects', href: '#projects' },
          { label: 'Plans', href: '#plans' },
          { label: 'Next.js', href: '#next' },
          { label: 'Renders', href: '#renders' },
          { label: 'Videos', href: '#videos' }
        ]}
         onLinkClick={(section: string) => setActiveSection(section)}
      />
     
      {activeSection === 'Home' && (
        <>
          <Hero />
          <About />
          <Projects />
          <Experiences />
          <Testimonial />
          
        </>
      )}

      {activeSection === 'Plans' && 
      <div ref={plansRef}>

      <PlansPage />
      </div>
      }

     {activeSection === 'Next.js' && (
  <div style={{ marginTop: '80px', width: '100%', height: '90vh' }}>
    <iframe
      src="http://localhost:3000/" // ruta de tu Next.js
      style={{ width: '100%', height: '100%', border: 'none' }}
      title="Next.js Microfrontend"
    />
  </div>
)}
      <Contact />
      <Footer/>
     
     

     
    </div>
  )
}

export default App
