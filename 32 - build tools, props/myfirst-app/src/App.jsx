import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyComponent from './MyComponent'
import DisplayData from './DisplayData'
import ConditionalRendering from './ConditionalRendering'

function App() {

  const fruits = ['Apple', 'Banana', 'Mango'];
  const person = {name:'Jon', profile: 'Dev'};


  return (
    <>
     
      {/* <MyComponent message='Hello, I am component1' 
      user={{name:'Aswatha', profile: 'Dev'}} /> 
      <MyComponent message='Hi, I am 2nd' user={{name:'Jon', profile: 'Dev'}}  />
      <MyComponent message='Hola! I am last'user={{name:'Snow', profile: 'Dev'}}  /> */}


      {/* <h2> Props example with Array</h2>

      <DisplayData fruits={fruits} person={person}/> */}

      <ConditionalRendering isLoggedin={false} username={'John'} />
  
    </>
  )
}

export default App
