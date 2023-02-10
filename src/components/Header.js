import React from 'react';
import "./styles/Header.css"
import {Link} from 'react-router-dom'
import logoNegative from "./images/negativo.png"

const Header = () => {
  return(
    <>
      <div className="logo">
        <img src={logoNegative} alt="logotype"></img>
      </div>
      <div className="menu">
        <Link className="menu-list" to="/web-site-nickingnova/" target="_parent">Home</Link>
        <Link className="menu-list" to="/projects" target="_parent">Projects</Link>
        <Link className="menu-list" to="/web-site-nickingnova/contact" target="_parent">Contact</Link>
      </div>
    </>
  );
}

export default Header;
