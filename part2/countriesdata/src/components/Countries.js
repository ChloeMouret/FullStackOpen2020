import React from 'react';
import Weather from './Weather'


const Countries = ({countries, toShow, setToShow}) => {
    const handleShow = (event) => {
        setToShow(event.target.value)
    }

    const filteredCountry = countries
        .filter(country => {
        return (country.name.toLowerCase().includes(toShow.toLowerCase()))})
        
    if (countries.length === 0){
        return(
            <div>
                Find a country
            </div>
        )
    }
    else if (filteredCountry.length > 10){
        console.log(filteredCountry.length)
        return(<div>Too many matches, specify another filter</div>)
    }
    else {
        if (filteredCountry.length === 1){
            return(
                <div>
                    {filteredCountry.map(country => {
                    
                        return(
                            <div>
                                <h2 key={country.alpha2Code}>{country.name}</h2>
                                <p key={country.capital}> Capital : {country.capital}</p>
                                <p key={country.population}> Population : {country.population} </p>
                                <h3 key={country.area}> Languages </h3>
                                <ul>
                                    {country.languages.map(language => <li key={language.iso639_2}>{language.name}</li>)}
                                </ul>
                                <img src={country.flag} style={{width:"200px", height:"100px"}} alt={{ }}></img>
                                <Weather country={country}/>
                            </div>
                        )}
                    )}
                </div>
            )
        }
        else {
            return(
                <div>
                    {filteredCountry.map(country => {
                        return(<div style={{display:"flex", flexdirection:"row" }}>
                            <p key={country.name}>{country.name}</p>
                            <button onClick={handleShow} value={country.name} key={"button"+country.name}>show</button>
                        </div>)
                        }
                    )}
                </div>
            )
        }
    }
}

export default Countries