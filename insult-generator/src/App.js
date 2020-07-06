import React, { useState } from 'react';
import insults from './trump'

function App() {
  const [name, setName] = useState('')
  const [insult, setInsult] = useState('')

  const handleNameChange = e => {
    e.preventDefault()
    setName(e.target.value);
  }

  const getRandomIndex = (component) => {
    return Math.floor(Math.random() * Math.floor(component.length))
  }

  const generateInsult = () => {
    if (name) {
      const randomDescriptorAfter = insults.descriptor_after[getRandomIndex(insults.descriptor_after)]
      const randomPredicate = insults.predicate[getRandomIndex(insults.predicate)]
      const randomInsult = insults.insult[getRandomIndex(insults.insult)]
      const randomKicker = insults.kicker[getRandomIndex(insults.kicker)]
      
      setInsult(name + ' ' + randomDescriptorAfter + ' ' + randomPredicate + ' ' + randomInsult + ' ' + randomKicker)
    }
  }

  return (
    <div className="App">
    Trump Insult Generator <br />
    name: 
      <input type="text" onChange={handleNameChange} />
      <button type="button" onClick={generateInsult}>generate insult</button>
    {insult}
    </div>)
  
}

export default App;
