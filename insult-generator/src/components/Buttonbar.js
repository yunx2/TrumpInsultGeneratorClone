import React from 'react'

import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Dropdown from 'react-bootstrap/Dropdown'
import Button from 'react-bootstrap/Button'

const Buttonbar = () => {
  return (
    <Dropdown as={ButtonGroup} className="float-right">
        <Button variant="outline-primary"><i className="fas fa-volume-up" /></Button>
      <Dropdown.Toggle split variant="outline-primary" id="dropdown-split-basic" />
        <Dropdown.Menu alignRight>
          <Dropdown.Item as="button" href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item as="button" href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item as="button" href="#/action-3">Something else</Dropdown.Item>
        </Dropdown.Menu>
        <button type="button" className="btn btn-outline-primary">
          <i className="far fa-envelope"></i>
        </button> 
      </Dropdown>
  )
}

export default Buttonbar