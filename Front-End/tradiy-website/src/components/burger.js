import React, { useState } from "react";
import "../App.css"; // Import the CSS for styling

const BurgerDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="burger-dropdown">
      <button className="burger-icon" onClick={toggleMenu}>
        <div className={`burger-line ${isOpen ? "open" : ""}`} />
        <div className={`burger-line ${isOpen ? "open" : ""}`} />
        <div className={`burger-line ${isOpen ? "open" : ""}`} />
      </button>
      {isOpen && (
        <div className="dropdown-menu">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default BurgerDropdown;