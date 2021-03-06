import React from 'react'

const Person = ({ person, toggleImportance }) => {
  const label = person.important
    ? 'make not important' : 'make important'

  return (
    <li>
      {person.name} 
      {person.number}
      <button onClick={toggleImportance}>{label}</button>
    </li>
  )
}

export default Person
