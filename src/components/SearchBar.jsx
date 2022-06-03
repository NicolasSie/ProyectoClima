import React, { useState } from "react";
import s from "../Styles.css/Search.module.css"
export default function SearchBar({onSearch}) {

  
const [nombreciudad,setCiudad]= useState("")
 
  const obtenerciudad =({target})=>{
    setCiudad(target.value)
    }
   

  return (
           (<form onSubmit={(e) => {
            e.preventDefault();
            if(!nombreciudad) alert("ingresar ciudad")
            else onSearch(nombreciudad);
            setCiudad("")
          }}>
            <div className={s.buscar}>
            <input className={s.imput}  value={nombreciudad}type="text" placeholder="Ciudad..."  onChange={obtenerciudad}/>
                      <input className={s.impbutton} type="submit" value="Agregar" />
            </div>
         </form>)
    
        
  );
}
