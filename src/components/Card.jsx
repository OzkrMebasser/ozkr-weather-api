
import React from 'react';
import { Link } from 'react-router-dom';
import style from './Card.module.css'

export default function Card ({min, max, name, img, onClose, id, temp, weather}) {
    return (
      <div className={ img.includes("d") ? style.card : style.card2} key={id}>
        <div className={style.buttonDiv}>
    
        {
          img.includes("d") 
          ? 
          <>☀️</>
          : 
          <>🌙</>
        }
      <button className={style.botonvermas}><Link style={{textDecorationLine:'none'}} to={`/ciudad/${id}`} >Ver mas..</Link></button>
        <button onClick={onClose} className={style.boton}>X</button>
        </div>
        
        <div className={style.cardBody}>
            <p className={style.cityName}>{name}</p>
            <p className={style.grades}> {temp}°C</p>
            <p>{weather}</p>      
          <div className={style.bottom}>   
            <div className={style.logoDiv}>
              <img className={style.weatherLogo} src={"http://openweathermap.org/img/wn/"+img+"@2x.png"} alt="weatherIcon" />
            </div>
            <div className={style.minMax}>
              <p>Min: {min}°C</p>
              <p>Max: {max}°C </p>

            </div>
          </div>
        </div>
        
      </div>
    );
};

