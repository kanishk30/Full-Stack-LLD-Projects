import React, {useState, useEffect} from 'react'
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
import FetchDataComponent from './FetchDataComponent'

function App() {

  // const [temperature, setTemperature] = useState('');

  // const handleTemperatureChange = (newTemp) => {
  //   setTemperature(newTemp);
  // }

  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('HI', count);
    document.title = `You clicked ${count} times.`
  }, [count]) // dependency
  // [] > only run on mount. no dependency to change.


  // useEffect(() => {
  //   const timer = setInterval(() => {
  //       console.log('Timer ticked.')
  //   }, 1000)

  //   // cleanup (function) this ( unmount )
  //   return () => {
  //     clearInterval(timer)
  //   }

  // }, [])


  // return <div>
  //   <p>You clicked: {count} times.</p>
  //   <button onClick={() => setCount(count+1)}>
  //       Click me to add 1
  //   </button>
  // </div>


  // return (
    // <>
    {/* <SimpleForm/> */}
    {/* <AdvancedForm/> */}
    {/* <TemperatureInput 
      temperature={temperature} 
      handleTemperatureChange={handleTemperatureChange}
    />
    <TemperatureDisplay temperature={temperature} />
    </> */}
  // )

  return <FetchDataComponent/>
}

export default App
