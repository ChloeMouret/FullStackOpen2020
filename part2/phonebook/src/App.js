import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import PersonForm from "./components/PersonForm"
import Persons from "./components/Persons"

const App = () => {
  const [ persons, setPersons ] = useState([])
  
  const [ toShow, setToShow ] = useState('')

  const hook = () => {    
    console.log('effect')    
    axios      
    .get('http://localhost:3001/persons')      
    .then(response => {        
      console.log('promise fulfilled')        
      setPersons(response.data)      
    })  
  }
  
  useEffect(hook, [])

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter toShow={toShow} setToShow={setToShow}/>
      <h2>Add a new </h2>
      <PersonForm persons={persons} setPersons={setPersons} />
      <h2>Numbers</h2>
      <Persons persons={persons} toShow={toShow}/>
    </div>
  )
}

export default App
