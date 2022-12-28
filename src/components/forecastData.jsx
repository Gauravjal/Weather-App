import React from 'react'

function forecastData({s,icon}) {
  return (
    <div className="flex flex-col justify-center items-center text-white">
        {/* <p className="text-sm font-light">{s.slice(0,10)}</p> */}
            <p className="text-sm font-light">{s}</p>
            <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="Weather icon" />
        </div>
  )
}

export default forecastData