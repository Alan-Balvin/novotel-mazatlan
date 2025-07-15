import React, { useState } from 'react'
import './Global.css'

const App: React.FC = () => {
  const [count, setCount] = useState<number>(0)

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-6 text-center">
      <h1 className="text-3xl font-bold mb-4">NOVOTEL ELECTRIC</h1>

      <div className="card bg-gray-800 p-6 rounded shadow-lg text-center">
        <button
          onClick={() => setCount(prev => prev + 1)}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded transition"
        >
          count is {count}
        </button>

        <p className="mt-4 text-sm text-gray-300">
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
    </div>
  )
}

export default App
