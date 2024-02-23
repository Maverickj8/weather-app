
export default function WeatherData({locationData}) {
    const {location, current} = locationData
    return (
      <>
      <div className="forecast">
          <img
            className="image"
            src={current.condition.icon}
            alt="weather icon"
            width={120}
          />
          <h2 className="center">{current.temp_c}°C</h2>
          <p className="center1"> {location.name} </p>
          <p className="center2"> {location.country} </p>
        </div>
        <div className="footer">
          <div className="humidity">
            <p>{current.humidity}%</p>
            <p>Humidity</p>
          </div>
          <div className="wind">
            <p>{current.wind_kph} kph</p>
            <p>wind speed</p>
          </div>
        </div>
      </>
    )
  }