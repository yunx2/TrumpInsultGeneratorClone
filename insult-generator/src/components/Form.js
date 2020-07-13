import React from 'react'

import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Dropdown from 'react-bootstrap/Dropdown'
import SplitButton from 'react-bootstrap/SplitButton'
import Button from 'react-bootstrap/Button'

const Form = ({ handleClick, handleChange }) => {
  return (
    <form>
      <label for="enter-name"></label>Name:
      <input type="text" className="form-control" placeholder="Enter name" id="enter-name" />
    
      <button type="button" className="btn btn-primary float-left" onClick={handleClick}>
        Generate Insult
      </button>
      <Dropdown as={ButtonGroup} className="float-right">
        <Button variant="outline-primary"><i className="fas fa-volume-up" /></Button>

        <Dropdown.Toggle split variant="outline-primary" id="dropdown-split-basic" />

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      {/* <div className="btn-group float-right">
        <button type="button" className="btn btn-outline-primary">
            <i className="fas fa-volume-up"></i>
        </button>
        <button type="button" className="btn btn-outline-primary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <span className="sr-only">Toggle Dropdown</span>
        </button>
        <div className="dropdown-menu">
          <button className="dropdown-item" href="#">Action</button>
          <button className="dropdown-item" href="#">Another action</button>
          <button className="dropdown-item" href="#">Something else here</button>
        </div> 
        <button type="button" className="btn btn-outline-primary float-right">
          <i className="far fa-envelope"></i>
        </button> 
      </div> */}
      <input type="textarea" className="form-control" readOnly /> 
    </form>
  )
}

            


export default Form