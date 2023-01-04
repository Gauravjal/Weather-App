import React,{useState,useContext} from 'react'
import CityContext from './context/CityContext'
function Inputs(city) {
  const{setCity}=useContext(CityContext)
  const [input,setInput]=useState("");
  function handleClick(){
    setCity(input);
  }
  return (
  <div className="max-w-md mx-auto rounded-lg overflow-hidden md:max-w-xl">
  <div className="md:flex">
      <div className="w-full p-3">
        
        <div className="relative">
          <input value={input} onChange={
            (e)=>{
              setInput(e.target.value);
            }
          } type="text" className="bg-white h-8 2xl:h-10  w-full px-12 rounded-lg focus:outline-none hover:cursor-pointer" name="">
          </input>
          <button className="absolute top-0 right-0 mt-2 mr-2 px-2 py-0 text-sm font-medium rounded-md  text-gray-700 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500" onClick={(e)=>handleClick()}><i className="fa fa-search"></i></button>
        </div>
        
        

        
      </div>
   
  </div>
</div>
  
  )
}

export default Inputs