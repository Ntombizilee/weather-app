import React, { useEffect, useState } from 'react';

const WeatherInput = ({ fetchWeatherData }) => {
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeatherData(city);
    setCity('');
  };

  useEffect(() => {
    fetchWeatherData('Johannesburg');
}, []);

  return (
    <form className='search' onSubmit={handleSubmit}>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city"
        required
      />
      {/* <button type="submit">Search</button> */}
    </form>
  );
};

export default WeatherInput;
