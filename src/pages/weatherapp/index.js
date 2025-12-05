import * as React from "react"
import { useState, useEffect } from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"

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
      <div className="mx-auto max-w-xl text-center bg-blue-400 p-6 rounded-xl shadow-md">
        {!selectedCity && (
          <h2 className="text-white text-2xl mb-4">Wybierz miasto, aby wyświetlić pogodę</h2>
        )}

        <select
          className="mb-5 p-2 rounded-md w-full border-2 border-blue-600 bg-blue-200 font-semibold focus:outline-none"
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
          <h2 className="text-white text-2xl">Ładowanie pogody...</h2>
        )}

        {weatherData && (
          <>
            <hr className="w-full border-t-2 border-gray-50 my-5" />

            <h2 className="text-white text-2xl">{selectedCity}</h2>

            <p className="text-white text-2xl font-semibold">
              {Math.round(weatherData.main.temp)}°C
            </p>

            <div className="text-white text-xl font-semibold my-2">
              Odczuwalna: {Math.round(weatherData.main.feels_like)}°C
            </div>

            <p className="text-white text-xl font-semibold">
              {weatherData.weather[0].description}
            </p>

            <hr className="w-full border-t-2 border-gray-50 my-5" />

            <div className="flex justify-center items-center gap-[5%] text-white font-semibold">

              <div>
                <p className="text-white text-base font-semibold">Wilgotność</p>
                <p>{weatherData.main.humidity}%</p>
              </div>

              <div>
                <p className="text-white text-base font-semibold">Prędkość wiatru</p>
                <p>{weatherData.wind.speed} km/h</p>
              </div>

              <div>
                <p className="text-white text-base font-semibold">Ciśnienie</p>
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
