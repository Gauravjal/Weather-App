import React from 'react'

function Local({weatherData}) {
  return (
    <>
        <div style={{paddingTop:'10px',color:'white',fontSize:'15px'}} className="text-white">
        <h1>Tuesday, 31st May 2022 |Local time 12:46 PM</h1>
        </div>
        <div style={{color:'white'}} className="text-white">
            {weatherData && weatherData.name}
        </div>
    </>

  )
}

export default Local