import React from 'react';
import "./styles/Footer.css"
// import {Link} from 'react-router-dom'
import { SocialIcon } from 'react-social-icons';



const Footer = () => {
  return(
    <>
      <div className="menu-social">
        <SocialIcon className="icon" url="https://twitter.com/your-profile" bgColor='white' fgColor='transparent' />
        <SocialIcon className="icon" url="https://github.com/your-profile" bgColor='white' fgColor='transparent'/>
        <SocialIcon className="icon" url="https://linkedin.com/in/your-profile" bgColor='white' fgColor='transparent'/>
      </div>
    </>
  );
}

export default Footer;
