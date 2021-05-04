import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Countries from "./components/Countries"

function App() {
  const [countries, setCountries] = useState([])
  const [toShow, setToShow] = useState("")
  

  const hook = () => {
    console.log("effect")
    axios
    .get("https://restcountries.eu/rest/v2/all")
    .then(response => {
      console.log("promise fulfilled")
      setCountries(response.data)
    })
  }
  
  useEffect(hook, [])

  const handleToShow = (event) => {
    console.log(event.target.value)
    setToShow(event.target.value)
  }

  
  return (
    <div>
      <form>
        find countries 
        <input value={toShow}  onChange={handleToShow} />
      </form>
      <Countries countries={countries} toShow={toShow} setToShow={setToShow} />
    </div>
  );
}

export default App;
