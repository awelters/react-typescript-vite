import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './components/Counter/Counter'
import CounterContext from './components/Counter/CounterContext'
import CounterResult from './components/Counter/CounterResult'
import CounterButtons from './components/Counter/CounterButtons'

function App() {
  const [count, setCount] = useState(0)
  // Note: Uncomment this line below then run 'npm run lint' or 'npm run dev-type-check' to see errors
  // const taco:string = 0

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <p>
        <button onClick={() => { setCount((count) => count + 1) }}>
          App Count with useState is {count}
        </button>
      </p>
      
      <CounterContext.Provider value={{contextParentName: 'App', count, setCount}}>
        <CounterResult/>
        <CounterButtons/>
      </CounterContext.Provider>

      <Counter/>

      <p className="card">
        Edit the file <code>src/App.tsx</code> and save to test HMR
      </p>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
