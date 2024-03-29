import React from 'react';

export default function WeatherCard(props) {
    return (
        <div className="weather-card">
            <h3>{props.param}</h3>
            <p>{props.value}</p>
        </div>
    )
}