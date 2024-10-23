import React from "react";
import moment from "moment";

const WeatherDetails = ({ weather }) => {
  const iconCode = weather.weather[0].icon; // Get the icon code
  const iconUrl = `https://openweathermap.org/img/wn/${iconCode}.png`; // Construct the icon URL

  return (
    <div>
      <div className="top">
        <div className="temp">
          <h1>{Math.floor(weather.main.temp)} °C</h1>
        </div>
        <div className="location">
          <p>{weather.name}</p>
        </div>
        <div className="current-date">
          <p>
            {moment(new Date(weather.dt * 1000)).format(
              "hh:mm - dddd, D MMM YY"
            )}
          </p>
        </div>
        <div className="description">
          <p>
            {weather.weather[0].description}
            <img src={iconUrl} alt={weather.weather[0].description} />
          </p>
        </div>
      </div>
      <div className="bottom">
        <div className="feels-like">
          <p>Feels Like</p>
          <p className="bold">{Math.floor(weather.main.feels_like)} °C</p>
        </div>
        <div className="humidity">
          <p>Humidity</p>
          <p className="bold">{weather.main.humidity}%</p>
        </div>
        <div className="wind-speed">
          <p>Wind Speed</p>
          <p className="bold">{weather.wind.speed} km/h</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherDetails;
