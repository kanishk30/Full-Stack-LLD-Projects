import React, {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyComponent from './MyComponent'
import DisplayData from './DisplayData'
import ConditionalRendering from './ConditionalRendering'
import Button from './Button';
import SimpleForm from './SimpleForm'
import AdvancedForm from './AdvancedForm'
import TemperatureInput from './TemperatureInput'
import TemperatureDisplay from './TemperatureDisplay'

function App() {

  const [temperature, setTemperature] = useState('');

  const handleTemperatureChange = (newTemp) => {
    setTemperature(newTemp);
  }

  return (
    <>
    {/* <SimpleForm/> */}
    {/* <AdvancedForm/> */}
    <TemperatureInput 
      temperature={temperature} 
      handleTemperatureChange={handleTemperatureChange}
    />
    <TemperatureDisplay temperature={temperature} />
    </>
  )
}

export default App
