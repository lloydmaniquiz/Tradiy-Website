import React, { useState } from "react";
import "../App.css";

const RecentSearches = () => {
  const [searches, setSearches] = useState([
    { service: "Service A", postcode: "KA22 7HF", time: "2 days ago" },
    { service: "Service B", postcode: "KA22 7HF", time: "4 weeks ago" },
    { service: "Service C", postcode: "KA22 7HF", time: "3 months ago" },
    { service: "Service D", postcode: "KA22 7HF", time: "5 months ago" },
  ]);

  const [isOpen, setIsOpen] = useState(false);

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Handle clicking a search item
  const handleSearchClick = (search) => {
    alert(`You selected: ${search.service}, ${search.postcode}`);
    // Optionally, update the input fields based on the selection
  };

  // Handle deleting a search item
  const handleDelete = (index) => {
    const updatedSearches = searches.filter((_, i) => i !== index);
    setSearches(updatedSearches);
  };

  return (
    <div className="recent-searches">
      <div className="dropdown-toggle" onClick={toggleDropdown}>
        <span>Recent searches:</span>
        <span className="arrow">{isOpen ? "↑" : "↓"}</span>
      </div>
      {isOpen && (
        <div className="dropdown-content">
          {searches.length > 0 ? (
            searches.map((search, index) => (
              <div className="search-card" key={index}>
                <div
                  className="search-info"
                  onClick={() => handleSearchClick(search)}
                >
                  <div className="info-left">
                    <small>{search.time}</small>
                    <p>{search.service}</p>
                    <span>{search.postcode}</span>
                  </div>
                  <button
                    className="delete-btn"
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent the search click from being triggered when deleting
                      handleDelete(index);
                    }}
                  >
                    ×
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="empty-message">No recent searches</p>
          )}
        </div>
      )}
    </div>
  );
};

export default RecentSearches;