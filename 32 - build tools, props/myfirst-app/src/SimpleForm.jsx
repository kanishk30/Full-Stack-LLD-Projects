import React from 'react'
function App() {

  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')


  const handleSubmit = event => {
    event.preventDefault(); // prevent default orm submission behaviour.

    console.log(`Name: ${name}, Email: ${email}`);

    // reset the form
    setName('');
    setEmail('')

    // name = '' WRONG. ( UI will not re-render.)
  }

  return (
    <>
     <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input 
          type='text'
          id='name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Email:</label>
        <input 
          type='text'
          id='email'
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </div>

      <button type='submit'>Submit</button>
      </form>
    
      
    </>
  )
}

export default App
