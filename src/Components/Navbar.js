import React from 'react';

function Navbar() {
  return (
    <nav className="navbar">
      <a className="logo" href="#home">Food Bank</a>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#impact">Impact</a></li>
        <li><a href="#get-involved">Get Involved</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;