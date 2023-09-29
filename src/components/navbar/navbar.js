import React from "react";
import './navbar.css';
import logo from '../../assests/logo.jpg';
import { Link } from 'react-router-dom';
import contact from '../../assests/contact.png';

const Navbar = () => {
   return (
      <nav className="navbar">
        <Link to='/'>  <img src={logo} alt="Logo" className="logo" /></Link>
         
     
        
        <div className="desktopMenu">
            <Link to="/" className="desktopMenuListItem">Home</Link>
            <Link to="/about" className="desktopMenuListItem">About</Link>
            <Link to="/portfolio" className="desktopMenuListItem">Education</Link>
            <Link to='/projects' className="desktopMenuListItem">Projects</Link>
            <a className="desktopMenuListItem"
            href="https://drive.google.com/file/d/1w8ABtXTjMIJ9Kf8lDRURD1Z1x_b2Ovip/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >Resume </a>

          
        </div>        
        <Link to='/contact'>
        <button className="desktopMenuBtn" >
            <img src={contact} alt="" className="desktopMenuImg"/> Contact ME!!!
        </button>
        </Link>
      </nav>
   )
}

export default Navbar;