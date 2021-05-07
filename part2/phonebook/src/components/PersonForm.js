import React, { useState } from 'react'
import personService from '../services/phonebook'

const PersonForm = ({persons, setPersons}) => {
    const [ newName, setNewName ] = useState('')
    const [ newNumber, setNewNumber ] = useState('')

    const addPerson = (event) => {
        event.preventDefault()
        if (listIdentical.length > 0){
            const result = window.confirm(`${newName} is already added to phonebook, replace the 
            old umber with a new one ?`);
            const personUp = persons.find(p => p.name === newName)
            const changedPerson = {...personUp, number : newNumber}
            if (result){
                console.log(newNumber)
                personService
                .update(personUp.id, changedPerson)
                .then(updatedPerson => {
                    persons.map(person => {
                        return(person.id !== updatedPerson.id ? person : updatedPerson)
                    })
                })
            }
        }
        else {
            const personObject = {
                name : newName,
                number : newNumber,
            }
            personService
            .create(personObject)
            .then(returnedPerson => {
                setPersons(persons.concat(returnedPerson))
                setNewName('')
                setNewNumber('')
            })
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