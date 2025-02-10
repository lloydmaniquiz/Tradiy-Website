import React, { useState, useEffect } from "react";
import "../App.css";
import builderIcon from "../images/carousel-search/builder.png";
import carpetFittingIcon from "../images/carousel-search/carpet.png";
import drivewaysIcon from "../images/carousel-search/driveways.png";
import electricianIcon from "../images/carousel-search/electrician.png";
import gardenerIcon from "../images/carousel-search/gardener.png";
import joinerIcon from "../images/carousel-search/joiner.png";
import painterIcon from "../images/carousel-search/painter.png";
import plastererIcon from "../images/carousel-search/plasterer.png";
import plumberIcon from "../images/carousel-search/plumber.png";
import rooferIcon from "../images/carousel-search/roofer.png";
import tilerIcon from "../images/carousel-search/tiler.png";
import welderIcon from "../images/carousel-search/welder.png";
import leftNext from "../images/carousel-search/left-next.png";
import rightNext from "../images/carousel-search/right-next.png";
import vettedPeople from "../images/three-images/verified.png";
import fastAndEasy from "../images/three-images/fast-and-easy.png";
import supportBusiness from "../images/three-images/support-business.png";

const CarouselSearch = () => {
  const [searches] = useState([
    { label: "Builder", icon: builderIcon },
    { label: "Carpet Fitting", icon: carpetFittingIcon },
    { label: "Driveways/Patios", icon: drivewaysIcon },
    { label: "Electrician", icon: electricianIcon },
    { label: "Gardener", icon: gardenerIcon },
    { label: "Joiner", icon: joinerIcon },
    { label: "Painter/Decorator", icon: painterIcon },
    { label: "Plasterer", icon: plastererIcon },
    { label: "Plumber", icon: plumberIcon },
    { label: "Roofer", icon: rooferIcon },
    { label: "Tiler", icon: tilerIcon },
    { label: "Welder", icon: welderIcon },
  ]);

  const [index, setIndex] = useState(0);
  const itemWidth = 120; // Adjust if needed
  const totalItems = searches.length;

  // Looping effect: Duplicate first & last items for smooth transition
  const extendedSearches = [...searches, ...searches, ...searches];

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000); // Auto-scroll every 3s

    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % totalItems);
  };

  const handlePrevious = () => {
    setIndex((prev) => (prev - 1 + totalItems) % totalItems);
  };

  return (
    <div className="carousel-combine">
      <div className="recent-searches-carousel">
        <button className="carousel-button" onClick={handlePrevious}>
          <img src={leftNext} alt="←" />
        </button>
        <div className="carousel-wrapper">
          <div
            className="carousel-track"
            style={{ transform: `translateX(-${index * itemWidth}px)` }}
          >
            {extendedSearches.map((search, idx) => (
              <button
                className="carousel-item-button"
                key={idx}
                onClick={() => alert(`You clicked on ${search.label}`)}
              >
                <img src={search.icon} alt={search.label} className="carousel-item-image" />
                <span className="carousel-item-label">{search.label}</span>
              </button>
            ))}
          </div>
        </div>
        <button className="carousel-button" onClick={handleNext}>
          <img src={rightNext} alt="→" />
        </button>
      </div>

      {/* Additional Section */}
      <div className="triple-image">
        <div className="image-item">
          <img src={vettedPeople} alt="Verified and Vetted Tradespeople" />
          <span className="image-text">Verified and Vetted Tradespeople</span>
          <p>We verify every tradesperson for their qualifications, public liability insurance, and ID, so you can hire with confidence.</p>
        </div>
        <div className="image-item">
          <img src={fastAndEasy} alt="Fast and Easy Search" />
          <span className="image-text">Fast and Easy Search</span>
          <p>With Tradiy, you can find the right tradesperson quickly, and it’s 100% free to browse.</p>
        </div>
        <div className="image-item">
          <img src={supportBusiness} alt="Support Local Business" />
          <span className="image-text">Support Local Business</span>
          <p>When you hire through Tradiy, you’re helping local tradespeople in your area thrive. It’s a win-win for your project and the community.</p>
        </div>
      </div>
    </div>
  );
};

export default CarouselSearch;
