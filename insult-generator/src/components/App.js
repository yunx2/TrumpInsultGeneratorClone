/* eslint-disable default-case */
import React, { useState, useEffect } from 'react';
import axios from 'axios'
import {
  BrowserRouter, 
  Switch,
  Route,
} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './Navbar'
import Form from './Form'
import Footer from './Footer'
import Sharebar from './ShareBar'
import Legal from './Legal'

function App() {
  const [name, setName] = useState('')
  const [insult, setInsult] = useState('')
  const [insultId, setInsultId] = useState(null)

  useEffect(() => {
    if (window.location.search) {
      axios.get('http://localhost:3001/insult' + window.location.search)
        .then(response => {
          const fetchedInsult = response.data.insult 
          const fetchedName = response.data.formatted        
          setInsult(fetchedInsult)
          setName(fetchedName)
          console.log(response.data)
        })
        .catch(exception => {
          console.log('request failed')
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
        const response = await axios.post('http://localhost:3001/' , { "name": name })
        const { insult, hexId } = response.data
        console.log(response.data)
        setInsult(insult)
        setInsultId(hexId)
        window.history.replaceState(null,'',`?name=${name}&id=${hexId}`)
        // console.log('window.location', window.location)
      } else {
        window.history.replaceState(null,'','')
        console.log('enter name')
      }
    } catch (error) {
      console.log('error:',error) 
    } 
  }

  return (
    <div className="App container">
      <h1 className="display-4">
        <p className="text-center">Trump Insult Generator</p>
      </h1>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/legal">
            <Legal />
          </Route>
          <Route path="/">
            <div className="row">
              <div className="col">
                <img src="https://www.trumpinsultgenerator.com/images/Trump.jpg" className="img-fluid" alt="trump"/>
              </div>
              <div className="col">
                <Form handleClick={handleClick} handleChange={handleNameChange} insult={insult} name={name} />
              </div>
            </div>
            <div><Sharebar /></div>
          </Route>
        </Switch>
    </BrowserRouter>
    <Footer />
  </div>)
}

export default App;
