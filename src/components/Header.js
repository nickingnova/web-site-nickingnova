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
        <Link className="menu-list" to="/home">Home</Link>
        <Link className="menu-list" to="/">Projects</Link>
        <Link className="menu-list" to="/">Contact</Link>
      </div>
    </>
  );
}

export default Header;
