import React, { useState } from 'react';
import insults from './trump'

function App() {
  const [name, setName] = useState('')
  const [showInsult, setShowInsult] = useState(false)

  const handleNameChange = e => {
    e.preventDefault()
    setName(e.target.value);
  }

  const getRandomIndex = (component) => {
    return Math.floor(Math.random() * Math.floor(component.length))
  }

  const generateInsult = () => {

    const randomDescriptorAfter = insults.descriptor_after[getRandomIndex(insults.descriptor_after)]
    const randomPredicate = insults.predicate[getRandomIndex(insults.predicate)]
    const randomInsult = insults.insult[getRandomIndex(insults.insult)]
    const randomKicker = insults.kicker[getRandomIndex(insults.kicker)]
    
    return name + ' ' + randomDescriptorAfter + ' ' + randomPredicate + ' ' + randomInsult + ' ' + randomKicker
  }

  const handleClick = e => {
    setShowInsult(!showInsult)
  }
  if (showInsult) {
    return (
      <div>
        {generateInsult()}
        <button type="button" onClick={() => {
          handleClick()
        setName('')}}>back</button>
      </div>
    )
  }
  return (
    <div className="App">
    
          Trump Insult Generator <br />
          name: 
      <input type="text" onChange={handleNameChange} />
      <button type="button" onClick={handleClick}>generate insult</button>
      
    </div>
  );
}

export default App;
