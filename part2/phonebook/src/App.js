import axios from 'axios'
import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from "./components/PersonForm"
import Persons from "./components/Persons"
import personService from "./services/phonebook"

const App = () => {
  const [ persons, setPersons ] = useState([])
  
  const [ toShow, setToShow ] = useState('')
  const hook = () => {    
    console.log('effect')    
    personService     
    .getAll()     
    .then(initialPersons => {
      setPersons(initialPersons)
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
      <Persons persons={persons} toShow={toShow} setPersons={setPersons}/>
    </div>
  )
}

export default App
