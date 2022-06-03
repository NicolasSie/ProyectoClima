import React from 'react';
import Logo from '../img/clima.png'
import SearchBar from './SearchBar.jsx';
import  s from '../Styles.css/Nav.module.css';
import { Link } from 'react-router-dom';

export default function Nav({onSearch}) {
  return (
    <nav className={s.nanvar}>
      <Link to="/"> 
      <span>
      <img  className={s.logoHenry} src={Logo} alt="clima" /> 
      <p className={s.henry}> Clima App </p>
      </span>
      
      </Link>
      <Link to="/about"> <span>About</span> </Link>
      <div className= {s.serch}><SearchBar onSearch={onSearch} /></div>
      
    </nav>
  );
};


