import React, { useState } from 'react'
import './Global.css'
import Navbar from './sections/Navbar'

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

      <div>
        <p className="mt-4 text-sm text-gray-300">
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
    </div>
  )
}

export default App
