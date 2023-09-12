import { useState } from 'react'
import reactLogo from './assets/react.svg'
import reduxLogo from './assets/redux.svg'
import viteLogo from '/vite.svg'
import typescriptLogo from './assets/Typescript_logo_2020.svg.png'
import './App.css'
import { useAppDispatch, useAppSelector } from './app/hooks';
import Counter from './components/Counter/Counter'
import CounterContext from './components/Counter/CounterContext'
import CounterResult from './components/Counter/CounterResult'
import CounterButtons from './components/Counter/CounterButtons'
import { increment } from './features/counter/counter-slice';

function App() {
  const [count, setCount] = useState(0)
  const storeCount = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();
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
        <a href="https://redux-toolkit.js.org/" target="_blank" rel="noreferrer">
          <img src={reduxLogo} className="logo" alt="Redux logo" />
        </a>
        <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer">
          <img src={typescriptLogo} className="logo" alt="TypeScript logo" />
        </a>
      </div>
      <h1>Vite  + React + Redux Toolkit + TypeScript</h1>
      <p>
        <button onClick={() => { setCount((count) => count + 1) }}>
          App Count with useState is {count}
        </button>
      </p>
      
      <CounterContext.Provider value={{contextName: 'App Count', count, setCount}}>
        <CounterResult/>
        <CounterButtons/>
      </CounterContext.Provider>

      <hr/>

      <Counter/>
      
      <hr/>

      <p>
        <button onClick={() => { dispatch(increment()) }}>
          App Count from the app store is {storeCount}
        </button>
      </p>

      <hr/>
      
      <p className="card">
        Edit the file <code>src/App.tsx</code> and save to test HMR
      </p>
      <p className="read-the-docs">
        Click on the Vite, React, React and TypeScript logos to learn more
      </p>
    </>
  )
}

export default App
