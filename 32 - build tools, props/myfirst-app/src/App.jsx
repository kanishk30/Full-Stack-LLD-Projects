import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyComponent from './MyComponent'
import DisplayData from './DisplayData'
import ConditionalRendering from './ConditionalRendering'
import Button from './Button';
import SimpleForm from './SimpleForm'
import AdvancedForm from './AdvancedForm'

function App() {
  return (
    <>
    {/* <SimpleForm/> */}
    <AdvancedForm/>
    </>
  )
}

export default App
