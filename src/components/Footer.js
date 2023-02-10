import React, {useState} from 'react';
import "./styles/Footer.css"
// import {Link} from 'react-router-dom'
import { SocialIcon } from 'react-social-icons';

// function HoverColor(){
  
// }

const Footer = () => {
  const [bgColorGit, setBgColorGit] = useState('white');
  const [bgColorTwi, setBgColorTwi] = useState('white');
  const [bgColorLink, setBgColorLink] = useState('white');

  return(
    <>
      <div className="menu-social">
        <SocialIcon
        className="icon"
        url="https://twitter.com/nickingnova"
        bgColor={bgColorTwi}
        fgColor='transparent'
        onMouseEnter={() => setBgColorTwi('orange')}
        onMouseLeave={() => setBgColorTwi('white')}
        target="_blank"
        />
        <SocialIcon className="icon"
        url="https://github.com/nickingnova"
        bgColor={bgColorGit}
        fgColor='transparent'
        onMouseEnter={() => setBgColorGit('orange')}
        onMouseLeave={() => setBgColorGit('white')}
        target="_blank"
        />
        <SocialIcon className="icon"
        url="https://www.linkedin.com/in/nicolas-fernandez-6b4b23b1/"
        bgColor={bgColorLink}
        fgColor='transparent'
        onMouseEnter={() => setBgColorLink('orange')}
        onMouseLeave={() => setBgColorLink('white')}
        target="_blank"
        />
      </div>
    </>
  );
}

export default Footer;
