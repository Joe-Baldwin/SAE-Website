// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-scroll';
import '../styles.css'; // Make sure the CSS file is imported
import Logo from '../Media/Images/Logo.png';

const Navbar = () => {
  return (
    <nav className="navbar-container">
      <Link to="top" className="navbar-logo" smooth={true} duration={1000}>
        {Logo}
      </Link>
      <Link className="navbar-link" to="mission" smooth={true} duration={1000}>Mission</Link>
      <Link className="navbar-link" to="about" smooth={true} duration={1000}>About</Link>
      <Link className="navbar-link" to="appointment" smooth={true} duration={1000}>Schedule</Link>
      <Link className="navbar-link" to="products" smooth={true} duration={1000}>Products</Link>
    </nav>
  );
};

export default Navbar;
