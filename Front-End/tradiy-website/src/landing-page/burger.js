import React, { useState } from "react";
import "../App.css"; // Import the CSS for styling

const BurgerDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHomeownersOpen, setIsHomeownersOpen] = useState(true); // Set initial state to true
  const [isTradespeopleOpen, setIsTradespeopleOpen] = useState(true); // Set initial state to true

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
            <li><a href="#login">Login</a></li>
            <li><a href="#signup">Sign Up</a></li>
            <div className="divider"></div>
            <li className="has-submenu">
              HOMEOWNERS
              <div className={`submenu-toggle ${isHomeownersOpen ? "open" : ""}`} />
              {isHomeownersOpen && (
                <ul className="submenu">
                  <li><a href="#are-you-homeowner">Are you a homeowner?</a></li>
                  <li><a href="#find-trade">Find a Trade</a></li>
                </ul>
              )}
            </li>
            <li className="has-submenu">
              TRADESPEOPLE
              <div className={`submenu-toggle ${isTradespeopleOpen ? "open" : ""}`} />
              {isTradespeopleOpen && (
                <ul className="submenu">
                  <li><a href="#are-you-tradespeople">Are you a tradesperson?</a></li>
                  <li><a href="#tradiy-benefits">Tradiy Benefits</a></li>
                  <li><a href="#be-a-tradiy">Be a Tradiy Trader</a></li>
                </ul>
              )}
            </li>
            <div className="divider"></div>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#newsletter">Join our Newsletter</a></li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default BurgerDropdown;
