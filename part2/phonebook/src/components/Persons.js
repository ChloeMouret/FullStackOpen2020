import React from 'react'

const Persons = ({persons, toShow}) => {
    return (
        <ul>
          {persons.filter(person => {
            return (person.name.toLowerCase().includes(toShow.toLowerCase()))})
          .map(person => {
            return(<li key={person.name}>{person.name} {person.number}</li>) 
            }
          )}
        </ul>
    )
}

export default Persons