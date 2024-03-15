import React from 'react';
import logo from './AquaticBowling.webp';
//import './Header.css'; // Assuming you will create a Header.css file for custom styles

function Header(props: { title: string }) {
  return (
    <header className="navbar navbar-dark bg-dark shadow-sm">
      <div className="container d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <img
            src={logo}
            className="logo me-3"
            alt="logo"
            style={{ width: '60px', height: '60px', objectFit: 'cover' }}
          />
          <h1 className="mb-0 text-white">{props.title}</h1>
        </div>
      </div>
    </header>
  );
}

export default Header;
