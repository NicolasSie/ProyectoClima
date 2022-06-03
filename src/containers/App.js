import React, { useState }from 'react';
import './App.css';
import Nav from '../components/Nav';
import Cards from '../components/Cards.jsx';
import {BrowserRouter,Route}from "react-router-dom"
import About from '../components/About';
import Ciudadd from '../components/Ciudad';

export default function App() {
  const[cities, setCities] = useState([]);
 
 
  function onSearch(ciudad) {
    //Acá habría que hacer el llamado a la API para obtener los datos de la ciudad
    //pero de momento agregaremos una ciudad por default para ver que funcione
    const apiKey ="4ae2636d8dfbdc3044bede63951a019b"
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`)
     .then((informacion)=>informacion.json())
     .then((ciudades)=>{
   if(ciudades.main !== undefined){
    const ciudad = {
      min: Math.round(ciudades.main.temp_min),
      max: Math.round(ciudades.main.temp_max),
      img: ciudades.weather[0].icon,
      id: ciudades.id,
      wind: ciudades.wind.speed,
      temp: ciudades.main.temp,
      name: ciudades.name,
      weather: ciudades.weather[0].main,
      clouds: ciudades.clouds.all,
      latitud: ciudades.coord.lat,
      longitud: ciudades.coord.lon
                  };
     const ciudadactual= cities.find(c=> c.id === ciudad.id)    
     if (ciudadactual)alert("ya se encuentra la ciudad")       
      else setCities(oldCities => [...oldCities, ciudad])          
          }
      else{ alert("Ciudad no encontrada")}
      })
  }

  function onClose(id) {
    setCities(oldCities => oldCities.filter(c => c.id !== id));
    
  }

  function onFilter(ciudad){
  console.log(cities.filter(c=> c.id===parseInt(ciudad)))
   return cities.filter(c=> c.id===parseInt(ciudad))

  }

  return (
    <div className="App">
        <Route
           path='/'
           render={() => <Nav onSearch={onSearch} />}
         />

      <div>
      <Route 
      exact strict
       path="/about"
       component={About}
      />

    <Route exact
    path='/'
    render={() =>  <Cards  cities={cities} onClose= {onClose} />}
      />
      <Route 
      path="/ciudad/:ciudadID"
      render={({match})=> <Ciudadd city={onFilter(match.params.ciudadID)} />}  
      />
     
    </div>
    </div>
  );
}


