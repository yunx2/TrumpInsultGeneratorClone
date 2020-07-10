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
import Navbar from 'react-bootstrap/Navbar'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import InputGroup from 'react-bootstrap/InputGroup'

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
    <div className="App">
      <Navbar as="div" role="navigation" className="border-bottom border-secondary">
        <Nav>
          <Nav.Link href="#">Home</Nav.Link>
          <Nav.Link href="#">Legal</Nav.Link>
        </Nav>
      </Navbar>
      <Container fluid className="bg-light">
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
            <Button variant="primary" onClick={handleClick} className="float-left">Generate Insult</Button>
            <ButtonGroup className="float-right">
              <Button variant="outline-primary"><i className="fas fa-volume-up"></i></Button>
              <DropdownButton alignRight title="" variant="outline-primary">
                <Dropdown.Item as="button">Action</Dropdown.Item>
                <Dropdown.Item as="button">Action</Dropdown.Item>
                <Dropdown.Item as="button">Action</Dropdown.Item>
                <Dropdown.Item as="button">Action</Dropdown.Item>
                <Dropdown.Item as="button">Action</Dropdown.Item>
                <Dropdown.Item as="button">Action</Dropdown.Item>
              </DropdownButton>
              <Button variant="outline-primary" className="ml-2"><i className="far fa-envelope"></i></Button>
            </ButtonGroup>
            <Form.Control as="textarea" rows="9" readOnly />
          </Col>
          
        </Row>
      </Container>
    </div>)
}

export default App;
