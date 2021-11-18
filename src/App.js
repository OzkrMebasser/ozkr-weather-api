import React, { useState } from "react";
import "./App.css";
import Nav from "./components/Nav.jsx";
import Cards from "./components/Cards.jsx";
import { Route  } from "react-router-dom";
import Home from "./components/Home.jsx";
import Ciudad from "./components/Ciudad.jsx";

const apiKey = "2d0cf0e18db54aef3b1d25048858dfc1";

function App() {
  
  const [cities, setCities] = useState([]);
  const [already, setAlready] = useState([]);

  function onClose(id) {
    setCities((oldCities) => oldCities.filter((c) => c.id !== id));
  }

  function clearAll() {
    setAlready([]);
    setCities([]);
  }

  var functionAlready = function () {
    setAlready([]);
    setAlready([`⚠ Esta ciudad ya fue agregada`]);
  };

  var functionNotFound = function () {
    setAlready([]);
    setAlready(["⚠ Ciudad no encontrada"]);
  };

  function onSearch(ciudad) {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric&lang=es`
    )

    // `https://api.openweathermap.org/data/2.5/weather?q=cordoba&appid=4ae2636d8dfbdc3044bede63951a019b&units=metric`

      .then((r) => r.json())
      .then((recurso) => {
        console.log(recurso);
        if (recurso.main !== undefined) {
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: Math.round(recurso.main.temp),
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon,
            country: recurso.sys.country
          };
          const cityExists = cities.filter((city) => city.id === ciudad.id);
          if (cityExists.length > 0) {
            functionAlready();
          } else {
            setCities((oldCities) => [...oldCities, ciudad]);
            setAlready([]);
          }
        } else {
          functionNotFound();
        }
      });
  }
  // function onFilter(ciudadId) {
  //   let ciudad = cities.filter((c) => c.id === parseInt(ciudadId));
  //   if (ciudad.length > 0) {
  //     return ciudad[0];
  //   } else {
  //     return null;
  //   }
  // }
  return (
   
    
    <div className="App">  
      <Route path="/" render={() => ( <Nav onSearch={onSearch} clearAll={clearAll} already={already} />)} />
      <Route exact path="/" component={Home} />
      <Route exact path="/ciudad/:ciudadId" render={({ match }) => ( <Ciudad city={match.params.ciudadId} />)}/>
      <Route path="/cards"  render={() => <Cards cities={cities} onClose={onClose} onSearch={onSearch} clearAll={clearAll} already={already} />}/>
      <br />
     
    </div>
     
    
  );
}

export default App;