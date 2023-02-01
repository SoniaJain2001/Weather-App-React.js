import React, { useEffect, useState } from 'react'
import Weathercard from './weathercard';
import './style.css'

const Temp = () => {
    const[searchValue,setSearchValue]=useState("Ghaziabad");
    const[tempInfo,setTempInfo]= useState({});

    const getWeatherInfo = async() => {
     try {
        let url= `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=8b3f5cc3346072a271adae4c436308c9`;

        let res= await fetch(url);
        let data= await res.json();

        const{temp,humidity,pressure}= data.main;
        const{main:weatherMood}=data.weather[0];
        const{name}= data;
        const{speed}= data.wind;
        const{country,sunset}= data.sys;

        const myNewWeatherInfo= {
            temp,
            humidity,
            pressure ,
            weatherMood,
            name,
            speed,
            country,
            sunset,
        };
        setTempInfo(myNewWeatherInfo);

        
      } catch (error) {
        console.log(error);
      }  
    };

    useEffect(() => {
        getWeatherInfo();
    }, []);
  return (
    <>
    <div className='wrap '>
        <div className='search'>
            <input
             type="text" 
             placeholder='search...'
             autoFocus
             id='search'
                   className='searchTerm'
                   value ={searchValue}
                   onChange={(e)=>setSearchValue(e.target.value)}

             />
             <button className='SearchButton' type='button' onClick={getWeatherInfo}>
                Search
             </button>

        </div>
    </div>

    {/* our temp card */}
    <Weathercard tempInfo={tempInfo}/>

    
  </> 
 )
}

export default Temp