import React, { useState } from 'react';
import axios from 'axios';
import WeatherInput from './components/WeatherInput';
import WeatherDetails from './components/WeatherInsights';
import Footer from './components/Footer';
import mist from "./images/mist.jpg";
import rain from "./images/rain.jpg";
import snow from "./images/snow.jpg";
import clouds from "./images/clouds.jpg";
import clear from "./images/sunny.jpg";


function App() {
  const [weather, setWeather] = useState(null);

  const API_KEY = 'cc3814c04b9b1eed3de18fd764c35362'

  const getBackgroundImage = (weather) => {
    const condition = weather.weather[0].main.toLowerCase();
    switch (condition) {
      case 'clear':
        return clear;
      case 'clouds':
        return clouds;
      case 'rain':
      case 'thunderstorm':
      case 'drizzle':
        return rain;
      case 'snow':
        return snow;
      case 'atmosphere':
        return mist;
      default:
        return clear;
    }
  };

  const fetchWeather = async (city) => {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
      setWeather(response.data);
  
    } catch (err) {
      setWeather(null);
    }
  };

  const bgImage = {
    backgroundImage: weather ? `url(${getBackgroundImage(weather)}` : clear,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100vh",
    width: "100%",
    position: "absolute"
  };
  return (
    <div className="App" style={bgImage}>
      <div className='container'>
        <WeatherInput fetchWeatherData={fetchWeather} />
        {weather && <WeatherDetails weather={weather} />}
      </div>
      <Footer />
    </div>
  );
}

export default App;
