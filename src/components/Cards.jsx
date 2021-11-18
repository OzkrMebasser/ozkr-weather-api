
import React from 'react';
import SearchBar from './SearchBar.jsx';
import Card from './Card.jsx';
import style from './Cards.module.css'
import nubesBg from '../media/backgrounds/nubesbgd.mp4'


 function Cards({cities, onClose, onSearch, clearAll, already}) {
  if(cities){
    return (
      <div>
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
        <br/>
        <div>
          <h3 className={style.text}>Encuentra el clima actual de cualquier ciudad del mundo </h3>
          <SearchBar onSearch={onSearch} clearAll={clearAll}/>
          <p style={{color:"red"}}>{already}</p>
        </div>
        <div className={style.cards}>
            {cities.map( c =>
                <Card    
                  key={c.name}    
                  max={c.max}       
                  min={c.min}
                  name={c.name}
                  img={c.img}
                  weather={c.weather}
                  temp = {c.temp}
                  onClose={() => onClose(c.id)}
                  id={c.id}
                  country={c.country}
                /> 
            )}
        </div>
        {
          cities.length > 0 
          ?
            <h2 className={style.text3}>Haga clic en una tarjeta para ver más sobre el clima de esa ciudad</h2>
          :
            <div className={style.info}>
            <h3 className={style.text2}>Todavía no has buscado ninguna ciudad</h3>
          
            </div>
        }
      </div>
    );
  } else {
    return(
      <div>No hay busquedas</div>
    )
  }
}
export default Cards;