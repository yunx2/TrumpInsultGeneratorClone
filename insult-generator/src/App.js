/* eslint-disable default-case */
import React, { useState } from 'react';
import axios from 'axios'

function App() {
  const [name, setName] = useState('')
  const [insult, setInsult] = useState('')
  // const [insultType, setInsultType] = useState(null)

  const handleNameChange = e => {
    e.preventDefault()
    setName(e.target.value)
  }

  const  handleClick = async () => {
    try {
      const response = await axios.post('http://localhost:3001/', { "name": name })
      console.log(response)
      setInsult(response.data)
    } catch (error) {
      console.log(error) 
    }
  }

  return (
    <div className="App">
    Trump Insult Generator <br />
    name: 
      <input type="text" onChange={handleNameChange} />
      <button type="button" onClick={handleClick}>generate insult</button>
      <div>{insult}</div>
    </div>)
  
}

export default App;
