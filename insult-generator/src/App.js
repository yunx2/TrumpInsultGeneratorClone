/* eslint-disable default-case */
import React, { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';

import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Nav from 'react-bootstrap/Nav'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import InputGroup from 'react-bootstrap/InputGroup'



import axios from 'axios'
import { FormLabel } from 'react-bootstrap';

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
      <Container fluid>
        <h1 className="display-4">
          <p className="text-center">Trump Insult Generator</p>
        </h1>
        <Row>
          <Col>
            <Image src="https://trumpinsultgenerator.com/images/Trump.jpg" fluid className="float-left"/>
          </Col>
          <Col>
            <Form.Group>
              <span>
              <Form.Label>Name: </Form.Label>
              <Form.Control type="text" onChange={handleNameChange} placeholder="Enter name" />
              </span>
              
            </Form.Group>
            <Button variant="primary" onClick={handleClick}>Generate Insult</Button>
            <Form.Control as="textarea" rows="5" className="mt-3"/>

          </Col>
        </Row>
      </Container>
    </div>)
}

export default App;
