import React, { useState } from 'react'

const PersonForm = ({persons, setPersons}) => {
    const [ newName, setNewName ] = useState('')
    const [ newNumber, setNewNumber ] = useState('')

    const addPerson = (event) => {
        event.preventDefault()
        if (listIdentical.length > 0){
          window.alert(`${newName} is already added to phonebook`);
        }
        else {
          const personObject = {
            name : newName,
            number : newNumber,
          }
          setPersons(persons.concat(personObject))
          setNewName('')
          setNewNumber('')
        }
    }

    const handleNewPerson = (event) => {
        setNewName(event.target.value)
    }
    
    const handleNewNumber = (event) => {
        setNewNumber(event.target.value)
    }

    const listIdentical = persons.filter(person => person.name === newName)

    return (
        <form onSubmit={addPerson}>
            <div>
                name: 
                <input value={newName} onChange={handleNewPerson} />
            </div>
            <div>
                number: 
                <input value={newNumber} onChange={handleNewNumber} />
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    )
}

export default PersonForm