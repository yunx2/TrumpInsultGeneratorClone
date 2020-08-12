import React, { useState } from 'react'
import axios from 'axios'

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

const Form = ({ handleClick, insult, name, handleChange }) => {
  const [audioData, setAudioData] = useState('')
  const [selection, setSelection] = useState([])

  const handleSpeech = async () => {
    if (selection.length > 0) {
      const [ voice, gender ] = selection
      const requestBody = {
        text: insult,
        language: voice,
        gender 
      }
      // console.log('body', requestBody)
      const response = await axios.post('http://localhost:3001/speak', requestBody)
      const audioString = response.data
      setAudioData(audioString)
    } else {
      console.log('selection a voice option')
    }
  }
  const handleSelect = (eventKey) => {
    const split = eventKey.split(',')
    setSelection(split)
    console.log('voice:', split[0], 'isArray:', Array.isArray(split) )
  }
  return (
    <form>
       Name:
      <input type="text" className="form-control" placeholder="Enter name" id="enter-name" value={name} onChange={handleChange} />
      <button type="button" className="btn btn-primary float-left" onClick={handleClick}>
        Generate Insult
      </button>

      <audio display="none" autoPlay={true} src={`data:audio/mpeg;base64,${audioData}`} >cannot play
      </audio>

      <Dropdown as={ButtonGroup} className="float-right">
        <Button type="button" variant="outline-primary" onClick={handleSpeech}><i className="fas fa-volume-up" /></Button>
      <Dropdown.Toggle split variant="outline-primary" id="dropdown-split-basic" />
        <Dropdown.Menu alignRight>
        {parsed.map(({voice, gender}, index) => (
          <Dropdown.Item eventKey={[voice, gender]} key={index} onSelect={handleSelect} as="button" type="button">
            {voice} - {gender}
          </Dropdown.Item>
        ))}
        </Dropdown.Menu>
        <button type="button" className="btn btn-outline-primary">
          <i className="far fa-envelope"></i>
        </button>
      </Dropdown>
      <textarea className="form-control" rows="8" value={insult} readOnly>
      </textarea> 
    </form>
  )
}

export default Form