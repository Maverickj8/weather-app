import { useState, useEffect } from "react";
import WeatherData from "./WeatherData";

export default function Weather() {
  // a useEffect that takes the input location
  const [location, setLocation] = useState("");
  const [locationData, setLocationData] = useState(null);

  async function getLocation() {
    try {
      const response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=82c240aac3c244fcb76120241242102&q=${location}`
      );
      const data = await response.json();
      
      setLocationData(data);
    } catch (error) {
      setLocationData(null);
    }
  }
  // const [position, setPosition] = useState({ latitude: null, longitude: null });

  useEffect(() => {
    
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(function (position) {
        console.log(position);
        fetch(`https://api.weatherapi.com/v1/current.json?key=82c240aac3c244fcb76120241242102&q=${position.coords.latitude},${position.coords.longitude}`)
        .then((response) => response.json())
        .then((data) => setLocationData(data))
      });
    } else {
      console.log("Geolocation is not available in your browser.");
    }
  }, [0]);
   
  useEffect(() => {
    console.log("changed");
    location.length >= 3 ? getLocation(): console.log("String too short");
  }, [location])
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

