/* eslint-disable default-case */
import React, { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './Navbar'
import Form from './Form'
import Footer from './Footer'
import Sharebar from './ShareBar'

import axios from 'axios'

function App() {
  const [name, setName] = useState('')
  const [insult, setInsult] = useState('')
  // const [insultType, setInsultType] = useState(null)

  const handleNameChange = e => {
    e.preventDefault()
    setName(e.target.value)
  }

  const handleClick = async () => {
    try {
      const response = await axios.post('http://localhost:3001/', { "name": name })
      console.log(response)
      setInsult(response.data)
    } catch (error) {
      console.log(error) 
    }
  }

  return (
    <div className="App container">
      <Navbar />
        <h1 className="display-4">
          <p className="text-center">Trump Insult Generator</p>
        </h1>
        <div className="row">
          <div className="col">
           <img src="https://trumpinsultgenerator.com/images/Trump.jpg" className="img-fluid" alt="trump"/>
          </div>
          <div className="col">
            <Form handleClick={handleClick} handleChange={handleNameChange} />
          </div>
        </div>
        <Sharebar />
        <Footer />
    </div>)
}

export default App;
