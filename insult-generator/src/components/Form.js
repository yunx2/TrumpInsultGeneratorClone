import React from 'react'

import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Dropdown from 'react-bootstrap/Dropdown'
import Button from 'react-bootstrap/Button'

const Form = ({ handleClick, handleChange }) => {
  return (
    <form>
      <label htmlFor="enter-name"></label>Name:
      <input type="text" className="form-control" placeholder="Enter name" id="enter-name" onChange={handleChange} />
      <button type="button" className="btn btn-primary float-left" onClick={handleClick}>
        Generate Insult
      </button>
      <Dropdown as={ButtonGroup} className="float-right">
        <Button variant="outline-primary"><i className="fas fa-volume-up" /></Button>
      <Dropdown.Toggle split variant="outline-primary" id="dropdown-split-basic" />
        <Dropdown.Menu>
          <Dropdown.Item as="button" href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item as="button" href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item as="button" href="#/action-3">Something else</Dropdown.Item>
        </Dropdown.Menu>
        <button type="button" className="btn btn-outline-primary">
          <i className="far fa-envelope"></i>
        </button> 
      </Dropdown>
      <input type="textarea" className="form-control" readOnly /> 
    </form>
  )
}

            


export default Form