import React from 'react'
function App() {

  // const [name, setName] = React.useState('')
  // const [email, setEmail] = React.useState('')

  const [formData, setFormData] = React.useState({firstname: '', email: ''})
  const [error, setError] = React.useState('')

  const handleSubmit = event => {
    event.preventDefault(); // prevent default orm submission behaviour.

    if(!formData.firstname || !formData.email) {
      
      setError('Please enter the values.')
      return;
    }

    console.log(`Name: ${formData.firstname}, Email: ${formData.email}`);

    // reset the form
    // setName('');
    // setEmail('')

    // name = '' WRONG. ( UI will not re-render.)
  }

  const handleChange = event => {
    const {name, value} = event.target;
    setFormData((prevData) => ({...prevData, [name]: value}))

    // setFormData({[event.target.name]: event.target.value})
    console.log(formData)
  }

  return (
    <>
     <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input 
          type='text'
          id='name'
          name='firstname'
          value={formData.firstname}
          onChange={handleChange}
        />
        <br></br>
        <label>Email:</label>
        <input 
          type='text'
          id='email'
          name='email'
          value={formData.email}
          onChange={handleChange}
        />
      </div>

      <button type='submit'>Submit</button>
      <span style={{color: 'red'}}>{error}</span>

      </form>
    
      
    </>
  )
}

export default App
