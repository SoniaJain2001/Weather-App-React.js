import React,{useState,useEffect} from 'react'

const Weathercard = ({tempInfo}) => {
    const[weatherState,setWeatherState]= useState("");
  const{
           temp,
           humidity,
           pressure ,
           weatherMood,
           name,
           speed,
           country,
           sunset,
        } = tempInfo;

        useEffect(() => {
            if(weatherMood){
                switch (weatherMood) {
                    case "Clouds":
                        setWeatherState("wi-day-cloudy");
                        break;
                    case "Haze":
                        setWeatherState("wi-day-haze");
                        break; 
                    case "Clear":
                        setWeatherState("wi-day-sunny");
                        break; 
                    case "Rain":
                        setWeatherState("wi-day-rain");
                        break;   
                    case "Smoke":
                        setWeatherState("wi-smoke");
                        break;   
                
                    default:setWeatherState("wi-Smoke");
                        break;
                }
            }
             
           }, [weatherMood])
        

        // converting the seconds into time

        let sec = sunset;
        let date= new Date(sec * 1000);
        let timeStr=`${date.getHours()}:${date.getMinutes()}`;
  return (
    <>
    {/* our temp card */}
    <article className='widget'>
        <div className='weatherIcon'>

            <i className={`wi ${weatherState}`}> </i>

        </div>
        <div className='weatherInfo'>
            <div className='temperature'>
                <span>{temp}&deg;</span>
            </div>
            <div className='description'>
               <div className='weatherCondition'>{weatherMood} </div>
               <div className='place'>{name}, {country}</div>
            </div>
        </div>
        <div className='date'>{new Date().toLocaleString()}</div>

        {/* 4 column section */}

        <div className='extra-temp'>
            <div className='temp-info-minmax'>
                <div className='two-sided-section'>
                    <p>
                        <i className={"wi wi-sunset"}></i>
                    </p>
                    <p className='extra-info-leftside'>
                        {timeStr} <br />
                        SUNSET

                    </p>

                </div>
                <div className='two-sided-section'>
                    <p>
                        <i className={"wi wi-humidity"}></i>
                    </p>
                    <p className='extra-info-leftside'>
                       {humidity} <br />
                        HUMIDITY

                    </p>

                </div>
            </div>

            <div className='weather-extra-info'>
                <div className='two-sided-section'>
                    <p>
                       <i className={"wi wi-rain"}></i> 
                    </p>
                    <p className='extra-info-leftside'>
                        {pressure}<br />
                        PRESSURE
                    </p>

                </div>
                <div className='two-sided-section'>
                    <p>
                       <i className={"wi wi-strong-wind"}></i> 
                    </p>
                    <p className='extra-info-leftside'>
                        {speed} <br />
                        SPEED
                    </p>
                </div>
            </div>
        </div>
    </article>
    </>
  )
}

export default Weathercard