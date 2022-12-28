import React,{useState,useEffect} from 'react'
import ForecastData from './forecastData';
function Forecast({weatherData}) {
  const [forecast,setForecast]=useState([])
    useEffect(()=>{
    const long=weatherData.coord.lon;
    const lat=weatherData.coord.lat;
        // Replace YOUR_API_KEY with your actual API key
const API_KEY ="b4bdac792cf4f921d41e022ff46d29f7";

// Make an HTTP GET request to the OpenWeatherMap API to retrieve the daily weather data

    
  // Replace YOUR_API_KEY with your actual API key


// Set the number of days for which you want to retrieve forecast data (1-16)


// Make an HTTP GET request to the OpenWeatherMap API to retrieve the daily weather data
fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=${API_KEY}`)
  .then(response => response.json())
  .then(data => {
    // The API response includes a list of weather forecasts, each representing a day
    const forecasts = data.list;
    setForecast(forecasts);
    console.log("checkkk",forecasts[0].weather[0].icon)
    // Loop through the forecasts and display the data for each day
    
  });

}
    ,[weatherData])
  return (
    <div>
      <h3 className="text-center text-white">Hourly Forecast</h3>
        <hr className="my-2"></hr>
        <div className="flex flex-row justify-between items-center">
        {forecast[0] && <ForecastData s={forecast[0].dt_txt.slice(10,16)} icon={forecast[0].weather[0].icon}/>
}        {forecast[0] && <ForecastData s={forecast[1].dt_txt.slice(10,16)} icon={forecast[1].weather[0].icon}/>
}        {forecast[0] && <ForecastData s={forecast[2].dt_txt.slice(10,16)} icon={forecast[2].weather[0].icon}/>
}        {forecast[0] && <ForecastData s={forecast[3].dt_txt.slice(10,16)} icon={forecast[3].weather[0].icon}/>
}        {forecast[0] && <ForecastData s={forecast[4].dt_txt.slice(10,16)} icon={forecast[4].weather[0].icon}/>
}        </div>

        <h3 className="text-center text-white">Daily Forecast</h3>
        <hr className="my-2"></hr>
        <div className="flex flex-row justify-between items-center">
        {forecast[0] && <ForecastData s={forecast[0].dt_txt.slice(0,10)} icon={forecast[0].weather[0].icon}/>
 }       {forecast[0] && <ForecastData s={forecast[8].dt_txt.slice(0,10)} icon={forecast[8].weather[0].icon}/>
 }       {forecast[0] && <ForecastData s={forecast[16].dt_txt.slice(0,10)} icon={forecast[16].weather[0].icon}/>}
        {forecast[0] && <ForecastData s={forecast[24].dt_txt.slice(0,10)} icon={forecast[24].weather[0].icon}/>}
        {forecast[0] && <ForecastData s={forecast[32].dt_txt.slice(0,10)} icon={forecast[32].weather[0].icon}/>}
        </div>
    </div>
  )
}

export default Forecast