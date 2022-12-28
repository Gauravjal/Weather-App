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
          } type="text" className="bg-white h-10 w-full px-12 rounded-lg focus:outline-none hover:cursor-pointer" name="">
          </input>
          <button onClick={(e)=>handleClick()}><i className="ml-10 fill-white-500 absolute fa fa-search top-3 left-40"></i></button>
        </div>
        
        

        
      </div>
   
  </div>
</div>
  
  )
}

export default Inputs