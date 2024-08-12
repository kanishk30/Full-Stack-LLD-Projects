import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from '../src/normalComponents/Counter'
import ReduxCounter from '../src/reduxComponents/reduxCounter'

function App() {


  return (
    <>

      <Counter />
      <ReduxCounter />
    </>
  )
}

export default App
