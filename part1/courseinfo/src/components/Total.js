import react from 'react'

const Total = ({course}) => {
    const parts = course.parts
    const total = parts.reduce((sum, part) => sum + part.exercises, 0)
    return (
      <p><b>Total of exercises {total}</b></p>
    )
}

export default Total