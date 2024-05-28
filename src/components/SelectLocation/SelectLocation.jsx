import React, {useState, useEffect} from 'react';
import axios from 'axios';
import styles from  "./SelectLocation.module.css";

export default function SelectLocation() {
    const [locationState, setLocationState] = useState({
        countries: [],
        selectedCountry: "",
        selectedState: "",
        selectedCity: "",
        states: {
            data: [],
            disabled: true,
        },
        cities: {
            data: [],
            disabled: true,
        }
    });
    const [isLoading, setLoading] = useState(true);

    const getCountries = async () => {
        try {
            setLoading(true);
            const apiResponse = await axios.get("https://crio-location-selector.onrender.com/countries");
            setLocationState({...locationState, countries: apiResponse.data});
            setLoading(false);
        }
        catch (e) {
            setLoading(false);
            console.error(e); 
        }
    }

    const getStates = async (countryName) => {
        try {
            const apiResponse = await axios.get(`https://crio-location-selector.onrender.com/country=${countryName}/states`);
            setLocationState({...locationState, selectedCountry: countryName, states: {data:apiResponse.data, disabled: false}, cities: {...locationState.cities, disabled: true}, selectedCity: ""});
        }
        catch (e) {
            console.error(e);
        }
    }

    const getCities = async (countryName, stateName) => {
        try {
            const apiResponse = await axios.get(`https://crio-location-selector.onrender.com/country=${countryName}/state=${stateName}/cities`);
            setLocationState({...locationState, cities: {data: apiResponse.data, disabled: false}, selectedState: stateName});
        }
        catch (e) {
            console.error(e);
        }
    }

    useEffect(() => {
        getCountries();
    }, [])

    return (
        <div className={styles.container}>
            <h2>Select Location</h2>
            {!isLoading ?
            <div>
            <select onChange={(e) => getStates(e.target.value)} name="countries" id="countries-dropdown">
                <option hidden disabled selected>Select Country</option>
                {locationState.countries.map((country) => <option value={country}>{country}</option>)}
            </select>
            <select onChange={(e) => getCities(locationState.selectedCountry, e.target.value)} name="states" id="states-dropdown" disabled={locationState.states.disabled}>
                <option hidden disabled selected>Select State</option>
                {locationState.states.data.map((state) => <option value={state}>{state}</option>)}
            </select>
            <select onChange={(e) => setLocationState({...locationState, selectedCity: e.target.value})} name="cities" id="cities-dropdown" disabled={locationState.cities.disabled}>
                <option hidden disabled selected>Select City</option>
                {locationState.cities.data.map((city) => <option value={city}>{city}</option>)}
            </select>
            </div> : <div className="loader"></div>}
            {locationState.selectedCity && <p><b>You selected {locationState.selectedCity}</b>, {locationState.selectedState}, {locationState.selectedCountry}</p>}
        </div>
    )
}