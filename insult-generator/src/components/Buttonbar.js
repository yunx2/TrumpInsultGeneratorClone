import React from 'react'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Dropdown from 'react-bootstrap/Dropdown'
import Button from 'react-bootstrap/Button'

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

const Buttonbar = () => (
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

export default Buttonbar