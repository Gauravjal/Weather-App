import react,{useState,useEffect} from 'react'
import Heading from './components/Heading.jsx'
import './App.css';
import Inputs from './components/Inputs.jsx'
import Local from './components/Local.jsx'
import Info from './components/Info.jsx'
import Forecast from './components/Forecast.jsx'
import getWeatherData from './services/weatherService.js';
import CityContext from './components/context/CityContext'
import NotFound from './components/NotFound'
function App() {
  const [city,setCity]=useState("latur");
  const [weatherData,setWeatherData]=useState(null);
  useEffect(()=>{
  const fetchWeather=async()=>{
    const data=await getWeatherData("weather",{q:city})
    console.log(data);
    setWeatherData(data);
    
    // console.log("data",data);
    // setWeatherData(data);
  }
  fetchWeather();
},[city])
  return (
    
    <CityContext.Provider value={{city,setCity}}>
      {weatherData && 
    <div className="mx-auto max-w-screen-md mt-4 py-5 px-10 bg-cover bg-blue-600">
    { weatherData.hasOwnProperty("message") ||<Heading weatherData={weatherData}/>}

   
    <Inputs city={city}/>
        {/* <Local weatherData={weatherData}/>
        {console.log("check",weatherData)} */}
         {weatherData.hasOwnProperty("message") || <Info weatherData={weatherData}/>}
        {/* {console.log("this one",weatherData.name)} */}
        {weatherData.hasOwnProperty("message") || <Forecast weatherData={weatherData}/>}
        {/* <Forecast weatherData={weatherData}/> */}
        {weatherData.hasOwnProperty("message") && <NotFound/>}
    </div>
     }
    </CityContext.Provider>
     
  );
}

export default App;
