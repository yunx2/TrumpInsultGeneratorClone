import React from 'react'

const Form = ({ handleClick, handleChange }) => {
  return (
    <form>
      <div className="form-group">
        <label>Name:
          <input type="text" />
        </label>
      </div>
      <div className="form-group">
        <button type="button" className="btn btn-primary" onClick={handleClick}>Generate Insult</button>

        <button type="button" className="btn btn-outline-primary">
          <i className="fas fa-volume-up"></i>
        </button>

        <div className="dropdown">
          <button className="btn btn-outline-primary dropdown-toggle" type="button"></button>
          <div className="dropdown-menu">
            <button className="dropdown-item" type="button">action</button>
            <button className="dropdown-item" type="button">action</button>
            <button className="dropdown-item" type="button">action</button>
            <button className="dropdown-item" type="button">action</button>
          </div>

          <button type="button" className="btn btn-outline=primary">
            <i className="far fa-envelope"></i>
          </button>
          

        </div>

      </div> 
      <div className="form-group">
        
      </div>  

    </form>
  )
}

            


export default Form