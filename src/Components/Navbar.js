import React from 'react';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Food Bank</div>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#donate">Donate</a></li>
        <li><a href="#volunteer">Volunteer</a></li>
        <li><a href="#locations">Locations</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;