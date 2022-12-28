import React,{useState,useEffect} from 'react'
import ReactAnimatedWeather from 'react-animated-weather';
import {WiSunrise,WiSunset,WiDirectionUp, WiDirectionDown,WiStrongWind,WiHumidity} from "react-icons/wi";
function Info({weatherData}) {
  const [icon,setIcon]=useState("");
  const convertUnixTimestampToDate = (unixTimestamp) => {
    const milliseconds = unixTimestamp * 1000;
    return new Date(milliseconds).getHours()+":"+new Date(milliseconds).getMinutes();
  };

  
  useEffect(()=>{const updateIcon=()=>{
      if(weatherData && (weatherData.weather[0].description==='broken clouds' || weatherData.weather[0].description==='light rain'))
      setIcon('RAIN')
      else if(weatherData && weatherData.weather[0].description==='clear sky')
      setIcon('CLEAR_DAY')
      else if(weatherData && (weatherData.weather[0].description==='haze' ||weatherData.weather[0].description==='mist' ))
      setIcon('FOG')
      else if(weatherData && weatherData.weather[0].description==='scattered clouds')
      setIcon('FOG')
  };
updateIcon();
},[weatherData]);
  const defaults = {
    icon: 'WIND',
    color: 'red',
    size: 200,
    animate: true
  };
  return (
  <>
    <div>
   
        <div className="xl:text-5xl lg:text-4xl md:text-4xl text-3xl sm:text-3xl text-center text-white from-stone-900 justify-items-between">{weatherData && weatherData.main.temp}°F</div>
        <div className="flex text-center align-items-center align-contents-center">
        <div className="align-items-center mx-auto text-white" >
        <ReactAnimatedWeather
    icon={icon}
    color={defaults.color}
    size={defaults.size}
    animate={defaults.animate}
  />
          {weatherData && weatherData.weather[0].description }
          </div>
        </div>

        
        
        {/* <div className="align-items-center align-contents-center ml-8 text-center flex gap-4">
        <div className="text-white  from-stone-900 justify-items-between flex"><WiDirectionUp className="text-red-400 text-xl"/>{weatherData && weatherData.main.temp_max}°F</div>
        <div className="text-white  from-stone-900 justify-items-between flex"><WiDirectionDown className="text-green-400 text-3xl"/>{weatherData && weatherData.main.temp_min}°F</div>
        </div> */}
        {/* <div className="align-items-center align-contents-center ml-8 text-center flex gap-9">
        <div className="font-light text-white justify-items-between flex"><WiSunrise className="text-red-200 text-3xl fill-red-200"/><span className="font-medium ml-1">{weatherData && convertUnixTimestampToDate(weatherData.sys.sunrise)}</span></div>
        <div className="font-light text-white justify-items-between flex"><WiSunset className='text-red-200 text-3xl'/><span className="font-medium ml-1">{weatherData && convertUnixTimestampToDate(weatherData.sys.sunset)}</span></div>
        </div> */}
    </div>
    {/* <div className="align-items-center align-contents-center ml-8 text-center flex gap-9">
    <div className="text-white  from-stone-900 justify-items-between flex"><WiStrongWind className="text-red-400 text-xl"/>{weatherData && weatherData.wind.speed} km/hr</div>
        <div className="text-white  from-stone-900 justify-items-between flex"><WiHumidity className="text-green-400 text-3xl"/>{weatherData && weatherData.main.humidity}</div>
        </div> */}


        <div className="grid grid-cols-2 grid-rows-3 justify-end gap-x-10 xl:gap-x-28">
        <div className="text-white justify-items-between flex"><WiDirectionUp className="text-red-400 text-xl"/>{weatherData && weatherData.main.temp_max}°F</div>
        <div className="text-white justify-items-between flex"><WiDirectionDown className="text-green-400 text-3xl"/>{weatherData && weatherData.main.temp_min}°F</div>
        <div className="font-light text-white justify-items-between flex"><WiSunrise className="text-red-200 text-3xl fill-red-200"/><span className="font-medium ml-1">{weatherData && convertUnixTimestampToDate(weatherData.sys.sunrise)}</span></div>
        <div className="font-light text-white justify-items-between flex"><WiSunset className='text-red-200 text-3xl'/><span className="font-medium ml-1">{weatherData && convertUnixTimestampToDate(weatherData.sys.sunset)}</span></div>
        <div className="text-white justify-items-between flex"><WiStrongWind className="text-red-400 text-xl"/>{weatherData && weatherData.wind.speed} km/hr</div>
        <div className="text-white justify-items-between flex"><WiHumidity className="text-green-400 text-3xl"/>{weatherData && weatherData.main.humidity}</div>
        </div>
    </>
  )
}

export default Info;