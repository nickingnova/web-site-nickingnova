import React from 'react';
import "./styles/Project.css"
// import {Link} from 'react-router-dom'

function redirect() {
  window.open("https://nickingnova.github.io/roller-coin-calculator/", "_blank");
}

const Project = () => {
    return (
        <div className="box-main">
          <ul className='reel'>
            <li className='project p1' onClick={redirect} >
              <div className='title-project' >Calculator for Game Crypto Online</div>
            </li>
            <li className='project p2'></li>
            <li className='project p3'></li>
          </ul>
        </div>
    );
}

export default Project;
