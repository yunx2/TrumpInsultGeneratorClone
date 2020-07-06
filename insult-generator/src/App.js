/* eslint-disable default-case */
import React, { useState } from 'react';
import insults from './trump'

function App() {
  const [name, setName] = useState('')
  const [insult, setInsult] = useState('')
  const [insultType, setInsultType] = useState(null)

  const handleNameChange = e => {
    e.preventDefault()
    setName(e.target.value)
  }

  const getRandomIndex = component => {
    return Math.floor(Math.random() * Math.floor(component.length))
  }

  const generateInsult = () => {
    const randomDescriptorAfter = insults.descriptor_after[getRandomIndex(insults.descriptor_after)]
    const randomDescriptorBefore = insults.descriptor_before[getRandomIndex(insults.descriptor_before)]
    const randomPredicate = insults.predicate[getRandomIndex(insults.predicate)]
    const randomInsult = insults.insult[getRandomIndex(insults.insult)]
    const randomKicker = insults.kicker[getRandomIndex(insults.kicker)]
    const randomSubjectInMiddle = insults.subject_in_middle[getRandomIndex(insults.subject_in_middle)]

    if (name) {
      console.log(name)
      const formattedName = name[0].toUpperCase() + name.slice(1).toLowerCase()
      console.log(formattedName)

      setInsultType(Math.floor(Math.random() * Math.floor(4)))
      console.log(insultType)
      let generatedInsult;
      switch (insultType) {
        case 0:
          generatedInsult =  formattedName + randomDescriptorAfter + randomPredicate + randomInsult
          if (Math.random() > .5) {
              generatedInsult += randomKicker
            }
          break
        case 1:
          generatedInsult = randomDescriptorBefore + formattedName + randomPredicate + randomInsult
          if (Math.random() > .5) {
            generatedInsult += randomKicker
          }
          break
        case 2:
          generatedInsult = formattedName + randomPredicate + randomInsult
          if (Math.random() > .5) {
            generatedInsult += randomKicker
          }
          break
        case 3:
          generatedInsult = randomDescriptorBefore + formattedName + randomDescriptorAfter + randomPredicate + randomInsult
          if (Math.random() > .5) {
            generatedInsult += randomKicker
          }
          break
        case 4: 
          generatedInsult = randomSubjectInMiddle[0] + formattedName + randomSubjectInMiddle[1] + formattedName + randomPredicate + randomInsult
          if (Math.random() > .5) {
            generatedInsult += randomKicker
          }
          break
      }
      
      setInsult(generatedInsult)
    } else {
      console.log('no name given')
      setInsult('')
    }
  }

  return (
    <div className="App">
    Trump Insult Generator <br />
    name: 
      <input type="text" onChange={handleNameChange} />
      <button type="button" onClick={generateInsult}>generate insult</button>
    <div>{insult}</div>
    </div>)
  
}

export default App;
