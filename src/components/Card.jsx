import React from 'react';
import s from "../Styles.css/Card.module.css"
import { Link } from 'react-router-dom';


export default function Card ({min, max, name, img, onClose, id}) {
  const imagen= img;
  return <div className={s.card}>
       
        <div className={s.contenedorClima}> 
         <button  onClick={onClose}className={s.btn}> X</button>
         <Link to={`/ciudad/${id}`} className={s.Link}>
         <h5>{name}</h5>
         </Link>
         

       <div  className={s.clima}>
       <ul> Min <li>{min+"°"}</li></ul><ul> Max<li>{max+"°"}</li></ul>
       <img src={`http://openweathermap.org/img/wn/${imagen}@2x.png`} alt="nube" />
       </div>
     
    </div>
       
      
   
      
  </div>
};
