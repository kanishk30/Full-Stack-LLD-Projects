import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyComponent from './MyComponent'
import DisplayData from './DisplayData'
import ConditionalRendering from './ConditionalRendering'
import Button from './Button';

function App() {

  let [counter, setCounter] = React.useState(1000);
  let [title, setTitle] = React.useState('Counter!!!!');
  


  const handleIncrement =() => {
    // counter++; // wrong
    setCounter(counter+1)
    console.log(counter)
  }

  const handleDecrement =() => {
    // counter--
    setCounter(counter-1)
  }


  return (
    <>
     
     <h1>{title}</h1>
     <p>Count: {counter}</p>

     {/* button to increment count */}
     <button onClick={handleIncrement}>Increment</button>

     {/* button to Decrement count */}
     <button onClick={handleDecrement}>Decrement</button>

      
    </>
  )
}

export default App
