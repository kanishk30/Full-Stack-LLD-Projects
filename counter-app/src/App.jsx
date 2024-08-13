import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from '../src/normalComponents/Counter'
import ReduxCounter from '../src/reduxComponents/reduxCounter'
import TodoRedux from '../src/reduxComponents/TodoRedux'
import User from './reduxComponents/User'

function App() {


  return (
    <>
      <User />
      {/* <Counter />
      <ReduxCounter />
      <TodoRedux /> */}
    </>
  )
}

export default App
