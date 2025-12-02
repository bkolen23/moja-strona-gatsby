import * as React from 'react'
import { useState, useEffect } from 'react'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import {
    wrapper,
    city as cityClass,
    temperature,
    condition,
    details,
    humidity,
    windSpeed
} from './weatherapp.module.css'

const WeatherApp = () => {
    const API_KEY = "6c5c8ce19dfcaff39d6d1386a97a7e97";
    const [weatherData, setWeatherData] = useState(null);

    useEffect(() => {
        const fetchWeather = async () => {
            try {
                const response = await fetch(
                    `https://api.openweathermap.org/data/2.5/weather?lat=53.7784&lon=20.4801&units=metric&lang=pl&appid=${API_KEY}`
                );

                const data = await response.json();
                console.log("API RESPONSE:", data);
                setWeatherData(data);
            } catch (error) {
                console.error("Błąd podczas pobierania pogody:", error);
            }
        };

        fetchWeather();
    }, []);

    if (!weatherData) {
        return (
            <Layout pageTitle="Aplikacja pogodowa">
                <h2>Ładowanie pogody...</h2>
            </Layout>
        );
    }

    return (
        <Layout pageTitle="Aplikacja pogodowa">
            <div className={wrapper}>
                <h2 className={cityClass}>Olsztyn</h2>

                <p className={temperature}>
                    {Math.round(weatherData.main.temp)}°C
                </p>

                <p className={condition}>
                    {weatherData.weather[0].description}
                </p>

                <div className={details}>
                    <div className={humidity}>
                        <p>Wilgotność</p>
                        <p>{weatherData.main.humidity}%</p>
                    </div>

                    <div className={windSpeed}>
                        <p>Prędkość wiatru</p>
                        <p>{weatherData.wind.speed} km/h</p>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export const Head = () => <Seo title="Aplikacja pogodowa" />

export default WeatherApp;