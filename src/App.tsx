import React, { useState } from 'react'
import './App.css'

const App: React.FC = () => {
  const [count, setCount] = useState<number>(0)

  return (
    <>
      <h1>Vite + React + TypeScript</h1>
      <div className="card">
        <button onClick={() => setCount(prev => prev + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
    </>
  )
}

export default App
