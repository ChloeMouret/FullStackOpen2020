import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const Title = ({title}) => <h1> {title} </h1>

const Button = ({onClick, text}) => {
  return (
    <button onClick={onClick}> {text} </button>
  )
}

const Statistic = ({text, value}) => {
  if (text === "positive"){
    return (
      <tr>
        <td> {text} </td>
        <td> {value} % </td>
      </tr>
    )
  }
  return(
    <tr>
      <td> {text} </td>
      <td> {value} </td>
    </tr>
  )
}

const Statistics = ({valueGood, valueNeutral, valueBad, valueAll, valueAverage, valuePositive}) => {
  if (valueAll === 0){
    return (<p> No feedback given </p>)
  }
  return (
    <table>
      <tbody>
        <Statistic text="good" value={valueGood} />
        <Statistic text="neutral" value={valueNeutral} />
        <Statistic text="bad" value={valueBad} />
        <Statistic text="all" value={valueAll} />
        <Statistic text="average" value={valueAverage} />
        <Statistic text="positive" value={valuePositive} />
      </tbody>
    </table>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)

  const handleGoodClick = () => {
    setGood(good+1)
    setAll(all+1)
    setAverage((good+1-bad)/(all + 1))
    setPositive(100*(good+1)/(all+1))
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
    setAll(all+1)
    setAverage((good-bad)/(all + 1))
    setPositive(100*good/(all+1))
  }

  const handleBadClick = () => {
    setBad(bad+1)
    setAll(all+1)
    setAverage((good-(bad+1))/(all + 1))
    setPositive(100*good/(all+1))
  }

  return (
    <div>
      <Title title="give feedback" />
      <Button onClick={handleGoodClick} text="good" />
      <Button onClick={handleNeutralClick} text="neutral" />
      <Button onClick={handleBadClick} text="bad" />
      <Title title="statistics" />
      <Statistics valueGood={good} valueNeutral={neutral} valueBad={bad} valueAll={all} valueAverage={average} valuePositive={positive}/>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
