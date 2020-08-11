import React from 'react'
import axios from 'axios'

import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Dropdown from 'react-bootstrap/Dropdown'
import Button from 'react-bootstrap/Button'
import DropdownItem from 'react-bootstrap/esm/DropdownItem'
// import voices from '../../voices'

const voiceData = [
  '{"voice":"en-AU","gender":"FEMALE"}',
  '{"voice":"en-AU","gender":"MALE"}',
  '{"voice":"en-GB","gender":"FEMALE"}',
  '{"voice":"en-GB","gender":"MALE"}',
  '{"voice":"en-IN","gender":"FEMALE"}',
  '{"voice":"en-IN","gender":"MALE"}',
  '{"voice":"en-US","gender":"FEMALE"}',
  '{"voice":"en-US","gender":"MALE"}'
]

// const handleSpeak = async () => {
//   // e.preventDefault()
//   const style =  {display: 'none' }
//   const response = await axios.post('http://localhost:3001/speak')
//   console.log('response:', response)
//   const audioData = response.data
//   return audioData
// }


const Buttonbar = ({ insult }) => {
  
   
  return (
    <Dropdown as={ButtonGroup} className="float-right">
        <Button type="button" variant="outline-primary"><i className="fas fa-volume-up" /></Button>
      <Dropdown.Toggle split variant="outline-primary" id="dropdown-split-basic" />
        <Dropdown.Menu alignRight>
        {voiceData.map(current => {
        const parsed = JSON.parse(current)
        const { voice, gender } = parsed
        return (
          <Dropdown.Item key={voice + gender}  as="button">
            {voice} - {gender}
          </Dropdown.Item>
        )
        })}
        </Dropdown.Menu>
        <button type="button" className="btn btn-outline-primary">
          <i className="far fa-envelope"></i>
        </button> 
      </Dropdown>
  )
}

export default Buttonbar