import React from 'react'

import Buttonbar from './Buttonbar'

const Form = ({ handleClick, insult, name, handleChange }) => {
  return (
    <form>
       Name:
      <input type="text" className="form-control" placeholder="Enter name" id="enter-name" value={name} onChange={handleChange} />
      <button type="button" className="btn btn-primary float-left" onClick={handleClick}>
        Generate Insult
      </button>
      <Buttonbar insult={insult}/>
      <textarea className="form-control" rows="8" value={insult} readOnly>
      </textarea> 
    </form>
  )
}

            


export default Form