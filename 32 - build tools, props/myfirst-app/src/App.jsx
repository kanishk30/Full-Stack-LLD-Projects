import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyComponent from './MyComponent'

function App() {
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <MyComponent message='Hello, I am component1' 
      user={{name:'Aswatha', profile: 'Dev'}} /> {/* first use */}
      <MyComponent message='Hi, I am 2nd' user={{name:'Jon', profile: 'Dev'}}  /> {/* 2nd use */}
      <MyComponent message='Hola! I am last'user={{name:'Snow', profile: 'Dev'}}  />

  
    </>
  )
}

export default App
