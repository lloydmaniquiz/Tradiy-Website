import React from "react";
import "../App.css";
import SearchIcon from '../images/search-white.png';

const SearchBar = () => {
  return (
    <div className="search-bar">
        <div className="input-wrapper">
          <select defaultValue="" className="dropdown">
            <option value="" disabled>
              What service do you need?
            </option>
            <option value="plumbing">Plumbing</option>
            <option value="electrical">Electrical</option>
            <option value="carpentry">Carpentry</option>
            <option value="painting">Painting</option>
            <option value="landscaping">Landscaping</option>
          </select>
          <input type="text" placeholder="What is your postcode?" />
          <button className="search-button">
            <img src={SearchIcon} alt='🔍'/>
          </button>
        </div>
      </div>
  );
};

export default SearchBar;