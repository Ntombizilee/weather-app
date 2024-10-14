import logo from "./logo.svg";
import mist from "./images/mist.jpg";
import rain from "./images/rain.jpg";
import snow from "./images/snow.jpg";
import clouds from "./images/clouds.jpg";
import sunny from "./images/sunny.jpg";
import "./App.css";

function App() {
  const renderImage = (description) => {
    // eslint-disable-next-line default-case
    switch (description) {
      case "sunny":
        return sunny;
      case "mist":
        return mist;
      case "snow":
        return snow;
      case "rain":
        return rain;
      case "clouds":
        return clouds;
    }
  };
  const bgImage = {
    backgroundImage: `url(${renderImage("snow")})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100vh",
  };
  return (
    <div className="App" style={bgImage}>
      <div className="main__container">
        <div className="search-bar">
          <input
            className="search-input"
            placeholder="Enter Location..."
            type="text"
          />
        </div>

        <div className="container">
          <div className="weather__details">
            <div className="temperature">
              <h1>8°C</h1>
            </div>
            <div className="location">
              <p>Johannesburg</p>
            </div>
            <div className="current-date">
              <p>06:00 Sun 12 Oct 24</p>
            </div>
            <div className="description">Sunny</div>
          </div>

          <div className="Weather__insights">
            <div className="weather__insight_feels-like">
              <p>Feels Like</p>
              <p>282.93°C</p>
            </div>
            <div className="weather__insight_humidity">
              <p>Humidity</p>
              <p>60%</p>
            </div>
            <div className="weather__insight_wind_speed">
              <p>Wind Speed</p>
              <p>120 km/h</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
