/* eslint-disable default-case */
import React, { useState, useEffect } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './Navbar'
import Form from './Form'
import Footer from './Footer'
import Sharebar from './ShareBar'

import axios from 'axios'

function App() {
  const [name, setName] = useState('')
  const [insult, setInsult] = useState('')
  const [insultId, setInsultId] = useState(null)

  useEffect(() => {
    if (window.location.search) {
      axios.get('http://localhost:3001/' + window.location.search)
        .then(response => {
          const fetchedInsult = response.data.insult 
          const fetchedName = response.data.formatted        
          setInsult(fetchedInsult)
          setName(fetchedName)
          console.log(response.data)
        })
        .catch(exception => {
          alert('request failed')
        })
      }
  }, []);
  
  const handleNameChange = e => {
    e.preventDefault()
    setName(e.target.value)
  }

  const handleClick = async () => {
    try {
      if (name) {
        const response = await axios.post('http://localhost:3001/', { "name": name })
        const { insult, hexId } = response.data
        console.log(response.data)
        setInsult(insult)
        setInsultId(hexId)
        window.history.replaceState(null,'',`/?name=${name}&id=${hexId}`)
      } else {
        window.history.replaceState(null,'','')
        console.log('enter name')
      }
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
           <img src="https://www.trumpinsultgenerator.com/images/Trump.jpg" className="img-fluid" alt="trump"/>
          </div>
          <div className="col">
         
            <Form handleClick={handleClick} handleChange={handleNameChange} insult={insult} name={name} />
          </div>
        </div>
        <Sharebar />
        <Footer />
    </div>)
}

export default App;
