import React, { useState } from 'react'
import axios from 'axios'

import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Dropdown from 'react-bootstrap/Dropdown'
import Button from 'react-bootstrap/Button'
import DropdownItem from 'react-bootstrap/esm/DropdownItem'



const voiceOptions = [
  '{"voice":"en-AU","gender":"FEMALE"}',
  '{"voice":"en-AU","gender":"MALE"}',
  '{"voice":"en-GB","gender":"FEMALE"}',
  '{"voice":"en-GB","gender":"MALE"}',
  '{"voice":"en-IN","gender":"FEMALE"}',
  '{"voice":"en-IN","gender":"MALE"}',
  '{"voice":"en-US","gender":"FEMALE"}',
  '{"voice":"en-US","gender":"MALE"}'
]

const parsed = voiceOptions.map(current => JSON.parse(current))

const Buttonbar = ({ insult }) => {
  // const [voiceOption, setVoiceOption] = useState( {})

  // const handleSelect = (event, index) => {
  //   e.preventDefault()

  // }

  return (
    <Dropdown as={ButtonGroup} className="float-right">
        <Button type="button" variant="outline-primary">
          <i className="fas fa-volume-up" />
        </Button>
      <Dropdown.Toggle split variant="outline-primary" id="dropdown-split-basic" />
        <Dropdown.Menu alignRight>
        {parsed.map((current, index) => (
          <Dropdown.Item key={index} as="button" type="button">
            {current.voice} - {current.gender}
          </Dropdown.Item>
        ))}
        </Dropdown.Menu>
        <button type="button" className="btn btn-outline-primary">
          <i className="far fa-envelope" />
        </button> 
    </Dropdown>
  )
}

export default Buttonbar