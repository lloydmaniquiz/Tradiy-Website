import React from "react";
import "../App.css";
import logo from "../tradiy-navy-seal.png";

const Header = () => {
  return (
    <>
    <header className="header">
      <div className="header-content">
      </div>
      <div className="mobile-app-banner">Mobile App Coming Soon!</div>
    </header>
    <div className="logo-nav">
      <div className="logo"><img src={logo} alt="Logo"/></div>
    </div>
    </>
  );
};

export default Header;