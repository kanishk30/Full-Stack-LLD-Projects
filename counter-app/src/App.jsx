import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from '../src/normalComponents/Counter'
import ReduxCounter from '../src/reduxComponents/reduxCounter'
import TodoRedux from '../src/reduxComponents/TodoRedux'

function App() {


  return (
    <>

      <Counter />
      <ReduxCounter />
      <TodoRedux />
    </>
  )
}

export default App
