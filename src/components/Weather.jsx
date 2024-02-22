import { useState } from "react";

export default function Weather() {
  const [location, setLocation] = useState("London");
  const [locationData, setLocationData] = useState(null);

  async function getLocation() {
    try {
      const response = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=82c240aac3c244fcb76120241242102&q=${location}`
      );
      const data = await response.json();
      console.log(data);
      setLocationData(data);
    } catch (error) {
      setLocationData(null);
    }
  }
  return (
    <div className="container">
      <h1>Weather App</h1>
      <div className="search">
        <input
          type="text"
          value={location}
          onChange={(event) => {
            setLocation(event.target.value);
          }}
        />
        <button className="btn" onClick={getLocation} >Search</button>
      </div>
      {/* conditional rendering with tenary (renders if the statement is truthy) */}
        {/* { locationData ? "Search location to see data" :
          <WeatherData
          location={location}
        />} */}
     {/* conditional rendering with Ampasand (renders if the statement is truthy) */}
      {locationData && <WeatherData locationData={locationData}/>}
    </div>
  );
}

function WeatherData({locationData}) {
  return (
    <>
    <div className="forecast">
        <img
          className="image"
          src={locationData.current.condition.icon}
          alt="weather icon"
          width={120}
        />
        <h2 className="center">{locationData.current.temp_c}°C</h2>
        <p className="center1"> {locationData.location.name} </p>
      </div>
      <div className="footer">
        <div className="humidity">
          <p>{locationData.current.humidity}%</p>
          <p>Humidity</p>
        </div>
        <div className="wind">
          <p>{locationData.current.wind_kph} kph</p>
          <p>wind speed</p>
        </div>
      </div>
    </>
  )
}