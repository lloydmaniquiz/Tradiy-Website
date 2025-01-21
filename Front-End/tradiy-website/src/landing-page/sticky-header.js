import React from 'react';
import '../App.css';
import SearchBar from './search-bar';
import TradiyLogo from "../images/tradiy-navy-seal.png";
import BurgerDropdown from './burger.js';

function StickyHeader() {
  return (
    <header className="sticky-header visible"> {/* Always apply 'visible' when it is sticky */}
        <img className="tradiy-logo" src={TradiyLogo} alt='Tradiy-Logo' />
        <SearchBar className="sticky-search-bar" />
        <div className='sticky-burger-wrapper'>
            <p>Be a Tradiy Trader</p>
            <BurgerDropdown />
        </div>
    </header>
  );
}

export default StickyHeader;