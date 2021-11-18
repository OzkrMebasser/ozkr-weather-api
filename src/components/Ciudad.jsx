
import React, {useState} from "react";
import { Link } from "react-router-dom";
import style from './Ciudad.module.css'
import { useEffect } from "react";
import axios from 'axios';
import nubesBg from '../media/backgrounds/nubesbgd.mp4'




function Ciudad(ciudad) {
    const [city, setCity] = useState({});
    const [hora, setHora] = useState("");

    const apiKey = '2d0cf0e18db54aef3b1d25048858dfc1';
    

    useEffect( () => {
        async function fetchCity(){
            try{
                const {data} = await axios.get(`https://api.openweathermap.org/data/2.5/weather?id=${ciudad.city}&appid=${apiKey}&units=metric`);
                if(data){
                    const ciudad = {
                        min: Math.round(data.main.temp_min),
                        max: Math.round(data.main.temp_max),
                        img: data.weather[0].icon,
                        id: data.id,
                        wind: data.wind.speed,
                        country: data.sys.country,
                        temp: Math.round(data.main.temp),
                        name: data.name,
                        weather: data.weather[0].main,
                        desc: data.weather[0].description,
                        feel: data.main.feels_like,
                        latitud: data.coord.lat,
                        longitud: data.coord.lon,
                        flag: data.sys.country,
                        pressure: data.main.pressure,
                        humidity: data.main.humidity,
                        clouds: data.clouds.all,
                        windgusts: data.wind.gust
                    };
                    await setCity(ciudad);
                }
                const timeResponse = await axios.get(`https://timezone.abstractapi.com/v1/current_time/?api_key=f3eb5c1cb971486488a8b5033d8e4bfb&location=${data.sys.country}`)
                const timeData = timeResponse.data;
                var time = await timeData.datetime.slice(11, 16);
                await setHora(time);
            }
            catch (err){
                // console.log("Error time api", err)
            }
        }
        fetchCity();
    }, [city.latitud, city.longitud, setCity, hora, ciudad.city]);

    
    return (
        
        <div className={style.cityScreen}>
                    <div>
        <video 
        autoPlay
        loop
        muted
        style={{
           position: "absolute",
           width: "100%",
           left: "50%",
           top: "50%",
           height: "100%",
           objectFit: "cover",
           transform: "translate(-50%, -50%)",
           zIndex: "-1",
                        
                    }
                }
                >
                <source src={nubesBg} type="video/mp4"></source>
                </video>
        </div>
                    <div className={style.titleDiv}>
                        <h1 className={style.title}>{city.name}</h1>
                    <p className={style.time}>{hora}</p>
                    <p className={style.detail}>{city.desc?.charAt(0).toUpperCase()+city.desc?.slice(1)}</p>
                        <div className={style.stats}>
                            <p>Min / Max: <b>{city.min}° / {city.max}°</b></p>
                            <p><b>{city.temp}°C</b></p>
                            <p>Presión : <b>{city.pressure} mb</b></p>
                        </div>
                        <div className={style.stats}>
                            <p>Sensación Térmica: <b>{Math.floor(city.feel)}°C</b></p>
                            <img className={style.weatherLogo} src={`http://openweathermap.org/img/wn/${city.img}@2x.png`} alt="weatherIcon" />
                            <p>Humedad: <b>{city.humidity}%</b></p>
                        </div>
                        <div className={style.stats}>
                            <p>Total de Nubes: <b>{city.clouds}</b></p>
                            <p className={style.stat}>Velocidad Viento: <b>{Math.floor(city.wind)} km/h</b></p>
                            <p>Ráfagas: <b>{parseInt(city.windgusts) > 0 ? city.windgusts : "0.1"} km/h</b></p>

                        </div>
                        
                    </div>
            <div className={style.buttonDiv}>
               <button> <Link to="/cards" className={style.linkto + style.Link}>Volver </Link></button>

            </div>

        </div>
    )
}



export default Ciudad;