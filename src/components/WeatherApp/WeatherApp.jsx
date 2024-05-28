import React, { useState } from 'react';
import WeatherCard from './WeatherCard/WeatherCard';
import styles from "./WeatherApp.module.css";
import axios from 'axios';

export default function WeatherApp() {
    const [city, setCity] = useState("");
    const [dataToDisplay, setDataToDisplay] = useState([]);
    const [isApiRequestInProgress, setIsApiRequestInProgress] = useState(false);

    const fetchWeatherData = async (e) => {
        e.preventDefault();
        try {
            setIsApiRequestInProgress(true);
            const apiResponse = await axios.get(`https://api.weatherapi.com/v1/current.json`, {
                params: {
                    key: 'ab7077c7778046bfb9e172128242903',
                    q: city
                }
            });
            setDataToDisplay([{param: 'Temperature', value: apiResponse.data.current.temp_c+"°C"},
                              {param: 'Humidity', value: apiResponse.data.current.humidity+"%"},
                              {param: 'Condition', value: apiResponse.data.current.condition.text},
                              {param: 'Wind Speed', value: apiResponse.data.current.wind_kph+" kph"}
                            ])
            setIsApiRequestInProgress(false);
        }
        catch (err) {
            setIsApiRequestInProgress(false);
            alert("Failed to fetch weather data");
            console.error(err);
        }
    }

    return (
        <div className={styles.wrapper}>
            <form onSubmit={fetchWeatherData}>
            <input onChange={(e) => setCity(e.target.value)} placeholder='Enter city name' className={styles.searchInput} type="text" name="search" id="search-box" />
            <button type="submit" className={styles.searchButton}>Search</button>
            </form>
            {!isApiRequestInProgress ? <div className="weather-cards">
                {dataToDisplay.map((val) => <WeatherCard param={val.param} value={val.value} />)}
            </div> : <div className="loader"></div>}
        </div>
    )
}