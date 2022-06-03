import React from "react";
import s from "../Styles.css/Ciudad.module.css"


export default function  Ciudadd ({city}){

 return(
    <div className="ciudad">
    <div className="container">
        
        <div className={s.info}>
            <h1> {city[0].name} </h1>
            <div>Temperatura: {city[0].temp} ºC</div>
            <div>Clima: {city[0].weather}</div>
            <div>Viento: {city[0].wind} km/h</div>
            <div>Cantidad de nubes: {city[0].clouds}</div>
            <div>Latitud: {city[0].latitud}º</div>
            <div>Longitud: {city[0].longitud}º</div>
        </div>
</div>
</div>
 )
}