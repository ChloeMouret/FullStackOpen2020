import React from 'react'
import personService from '../services/phonebook'

const Persons = ({persons, toShow, setPersons}) => {
  const handleDelete = (event) => {
    const result = window.confirm("Delete "+`${event.target.name}`+" ?")
    if (result){
      personService
      .deletePerson(event.target.value)
      .then(response => {
        setPersons(persons.filter(person => {
        return(person.id !== event.target.value)
      }))
    })
    .catch(error => {
      alert("not working")      
    })
    }
  }
  

  return (
      <ul>
        {persons.filter(person => {
          return (person.name.toLowerCase().includes(toShow.toLowerCase()))})
        .map(person => {
          return(
            <li key={person.name}>
              {person.name} {person.number}
              <button onClick={handleDelete} value={person.id} name={person.name}>delete</button>
            </li>
          )}
        )}
      </ul>
    )
}

export default Persons