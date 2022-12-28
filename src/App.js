import react,{useState,useEffect} from 'react'
import TopButtons from './components/TopButtons.jsx'
import './App.css';
import Inputs from './components/Inputs.jsx'
import Local from './components/Local.jsx'
import Info from './components/Info.jsx'
import Forecast from './components/Forecast.jsx'
import getWeatherData from './services/weatherService.js';
import CityContext from './components/context/CityContext'
function App() {
  const [city,setCity]=useState("latur");
  const [weatherData,setWeatherData]=useState(null);
  useEffect(()=>{
  const fetchWeather=async()=>{
    alert("check")
    const data=await getWeatherData("weather",{q:city})
    console.log("data",data);
    setWeatherData(data);
  }
  fetchWeather();
},[city])
  return (
    <CityContext.Provider value={{city,setCity}}>
    <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-cover bg-blue-600">
        <TopButtons weatherData={weatherData}/>
        <Inputs city={city}/>
        {/* <Local weatherData={weatherData}/>
        {console.log("check",weatherData)} */}
        <Info weatherData={weatherData}/>
        {/* {console.log("this one",weatherData.name)} */}
        {/* {weatherData && <Forecast weatherData={weatherData}/>} */}
        {/* <Forecast weatherData={weatherData}/> */}
    </div>
    </CityContext.Provider>
  );
}

export default App;
