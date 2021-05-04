import { useEffect, useState } from 'react';
import axios from 'axios';
import React from 'react';

const Weather = ({country}) => {
    const [weatherInfo, setWeatherInfo] = useState({})
    const api_key = process.env.REACT_APP_API_KEY
    
    
    const params = {
        access_key: api_key,
        query: country.capital
    }

    const hook = () => {
        axios
        .get('http://api.weatherstack.com/current', {params})
        .then(response => {
            console.log("data ok")
            setWeatherInfo(response.data)
        })
    }
    useEffect(hook, [])

    if (Object.keys(weatherInfo).length > 0){
        console.log("in")
        return(
            <div>
                <h3 key={"h3"+country.name}>Weather in {country.capital}</h3>
                <p><b>Temperature : </b>{weatherInfo.current.temperature} Celsius</p>
                <img src={weatherInfo.current.weather_icons}></img>
                <p><b> Wind : </b> {weatherInfo.current.wind_speed} mph direction {weatherInfo.current.wind_dir} </p>
            </div>
        )
    }
    else {
        console.log(country.capital)
        return(<div>Download</div>)
    }
}

export default Weather