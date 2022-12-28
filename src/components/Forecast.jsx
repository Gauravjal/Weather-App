import React,{useState,useEffect} from 'react'

function Forecast({weatherData}) {
    useEffect(()=>{
    const long=weatherData.coord.lon;
    const lat=weatherData.coord.lat;
        // Replace YOUR_API_KEY with your actual API key
const API_KEY ="b4bdac792cf4f921d41e022ff46d29f7";

// Replace CITY_ID with the ID of the city for which you want to retrieve weather dat

// Set the number of days for which you want to retrieve forecast data (1-16)
const NUM_DAYS = 5;

// Make an HTTP GET request to the OpenWeatherMap API to retrieve the daily weather data

    
  // Replace YOUR_API_KEY with your actual API key

// Replace LONGITUDE and LATITUDE with the longitude and latitude of the location for which you want to retrieve weather data
const LONGITUDE = 123.45;
const LATITUDE = 67.89;

// Set the number of days for which you want to retrieve forecast data (1-16)


// Make an HTTP GET request to the OpenWeatherMap API to retrieve the daily weather data
fetch(`https://api.openweathermap.org/data/2.5/forecast/daily?lat=${LATITUDE}&lon=${LONGITUDE}&cnt=${NUM_DAYS}&appid=${API_KEY}`)
  .then(response => response.json())
  .then(data => {
    // The API response includes a list of weather forecasts, each representing a day
    const forecasts = data.list;
    
    // Loop through the forecasts and display the data for each day
    forecasts.forEach(forecast => {
      console.log(`Date: ${forecast.dt}`);
      console.log(`Min temperature: ${forecast.temp.min}`);
      console.log(`Max temperature: ${forecast.temp.max}`);
      console.log(`Humidity: ${forecast.humidity}`);
      console.log(`Wind speed: ${forecast.speed}`);
    });
  });

}
    ,[weatherData])
  return (
    <div>
        <hr className="my-2"></hr>
        <div className="flex flex-row justify-between items-center">
        <div className="flex flex-col justify-center items-center text-white">
            <p className="text-sm font-light">4:30</p>
        </div>
        <div className="flex flex-col justify-center items-center text-white">
            <p className="text-sm font-light">4:30</p>
        </div>
        <div className="flex flex-col justify-center items-center text-white">
            <p className="text-sm font-light">4:30</p>
        </div>
        <div className="flex flex-col justify-center items-center text-white">
            <p className="text-sm font-light">4:30</p>
        </div>
        </div>
    </div>
  )
}

export default Forecast