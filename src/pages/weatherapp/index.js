import * as React from "react"
import { useState, useEffect } from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import {
  wrapper,
  cityHeader,
  temperature,
  condition,
  details,
  feelsLike,
  humidity,
  windSpeed,
  pressure,
  line,
  select,
} from "../../styles/weatherapp.css"

const WeatherApp = () => {
  const API_KEY = "6c5c8ce19dfcaff39d6d1386a97a7e97"

  const cities = {
    Olsztyn: { lat: 53.7784, lon: 20.4801 },
    Warszawa: { lat: 52.2297, lon: 21.0122 },
    Kraków: { lat: 50.0647, lon: 19.945 },
    Gdańsk: { lat: 54.352, lon: 18.6466 },
    Wrocław: { lat: 51.1079, lon: 17.0385 },
    Łódź: { lat: 51.7592, lon: 19.455 },
    Poznań: { lat: 52.4064, lon: 16.9252 },
    Szczecin: { lat: 53.4289, lon: 14.553 },
    Bydgoszcz: { lat: 53.1235, lon: 18.0084 },
    Lublin: { lat: 51.2465, lon: 22.5684 },
    Białystok: { lat: 53.1325, lon: 23.1688 },
  }

  const [selectedCity, setSelectedCity] = useState("")
  const [weatherData, setWeatherData] = useState(null)

  useEffect(() => {
    if (!selectedCity) return

    const fetchWeather = async () => {
      const { lat, lon } = cities[selectedCity]

      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&lang=pl&appid=${API_KEY}`
        )

        const data = await response.json()
        setWeatherData(data)
      } catch (error) {
        console.error("Błąd podczas pobierania pogody:", error)
      }
    }

    fetchWeather()
  }, [selectedCity])

  return (
    <Layout pageTitle="Aplikacja pogodowa">
      <div className={wrapper}>
        {!selectedCity && (
          <h2 className={cityHeader}>Wybierz miasto, aby wyświetlić pogodę</h2>
        )}

        <select
          className={select}
          value={selectedCity}
          onChange={(e) => {
            setSelectedCity(e.target.value)
            setWeatherData(null)
          }}
        >
          <option value="">Wybierz miasto</option>
          {Object.keys(cities).map((city) => (
            <option key={city} value={city}>{city}</option>
          ))}
        </select>

        {selectedCity && !weatherData && (
          <h2 className={cityHeader}>Ładowanie pogody...</h2>
        )}

        {weatherData && (
          <>
            <hr className={line} />

            <h2 className={cityHeader}>{selectedCity}</h2>

            <p className={temperature}>
              {Math.round(weatherData.main.temp)}°C
            </p>

            <div className={feelsLike}>
              Odczuwalna: {Math.round(weatherData.main.feels_like)}°C
            </div>

            <p className={condition}>
              {weatherData.weather[0].description}
            </p>

            <hr className={line} />

            <div className={details}>

              <div className={humidity}>
                <p>Wilgotność</p>
                <p>{weatherData.main.humidity}%</p>
              </div>

              <div className={windSpeed}>
                <p>Prędkość wiatru</p>
                <p>{weatherData.wind.speed} km/h</p>
              </div>

              <div className={pressure}>
                <p>Ciśnienie</p>
                <p>{weatherData.main.pressure} hPa</p>
              </div>

            </div>
          </>
        )}
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title="Aplikacja pogodowa" />

export default WeatherApp
