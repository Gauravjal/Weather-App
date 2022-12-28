import React from 'react'

function TopButtons({weatherData}) {
  return (
    <h1 className="font-Thermometer-500 align-items-center text-center text-white">
        {weatherData && weatherData.name}
</h1>
  )
}

export default TopButtons