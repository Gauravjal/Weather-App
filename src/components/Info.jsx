import React,{useState,useEffect} from 'react'
import ReactAnimatedWeather from 'react-animated-weather';
import {WiSunrise,WiSunset,WiDirectionUp, WiDirectionDown,WiDayCloudyWindy} from "react-icons/wi";
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
    color: 'white',
    size: 200,
    animate: true
  };
  return (
  <>
    <div>
   
        <div className="text-5xl text-center text-white from-stone-900 justify-items-between">{weatherData && weatherData.main.temp}°F</div>
        <div className="text-center align-items-center align-contents-center">
        <div className="mx-auto text-white" >
        <ReactAnimatedWeather
    icon={icon}
    color={defaults.color}
    size={defaults.size}
    animate={defaults.animate}
  />
          {weatherData && weatherData.weather[0].description }
          </div>
        </div>

        
        
        <div className="align-items-center align-contents-center ml-8 text-center flex gap-4">
        <div className="text-white  from-stone-900 justify-items-between flex"><WiDirectionUp className="text-red-400 text-xl"/>{weatherData && weatherData.main.temp_max}°F</div>
        <div className="text-white  from-stone-900 justify-items-between flex"><WiDirectionDown className="text-green-400 text-3xl"/>{weatherData && weatherData.main.temp_min}°F</div>
        </div>
        <div className="align-items-center align-contents-center ml-8 text-center flex gap-9">
        <div className="font-light text-white justify-items-between flex"><WiSunrise className="text-yellow-500 text-3xl fill-yellow-500"/><span className="font-medium ml-1">{weatherData && convertUnixTimestampToDate(weatherData.sys.sunrise)}</span></div>
      <div className="font-light text-white justify-items-between flex"><WiSunset className='text-yellow-500 text-3xl'/><span className="font-medium ml-1">{weatherData && convertUnixTimestampToDate(weatherData.sys.sunset)}</span></div>
        </div>
    </div>
    <div className="flex flex-row items-center justify-center text-white gap-2 text-sm">
      

    </div>
    <div className="text-white font-light justify-items-end">
            {/* Humidity {weatherData && weatherData.main.humidity} */}
            Wind {weatherData && weatherData.wind.speed}km/h
        </div>
    </>
  )
}

export default Info;