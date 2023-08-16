import { Link } from 'react-router-dom';
import './Header.css';
import logoimage from '../../logo.png';
import homeIcon from '../Header/img/home.png'; 

import React from 'react';

function Header() {
  return (
    <div className="navbar">
      <div className="nav-left">
        <div className="brandName">
          <Link to="/">
            <img className="logo" src={logoimage} alt="TODO logo" />
          </Link>
        </div>
        <div className="home-icon">
          <Link to="/" className="nav-button"> 
            <img src={homeIcon} alt="Home" className="nav-icon" />
          </Link>
        </div>
      </div>
      <div className="nav-buttons">
        <Link to="/signup" className="nav-button">
          Sign Up
        </Link>
        <Link to="/login" className="nav-button">
         Login
        </Link>
      </div>
    </div>
  );
}

export default Header;
