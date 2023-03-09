import React, { createElement, useEffect } from 'react'
import { render, WasmReact, Sample } from 'plot-test'
import reactLogo from './assets/react.svg'
import './App.css'

WasmReact.useReact(React);

function App() {
  useEffect(() => {
    render('rust_target')
  }, [])

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <Sample count={10} label="Rust Component" description="dumb" />
      <div className="card" id="rust_target" />
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
