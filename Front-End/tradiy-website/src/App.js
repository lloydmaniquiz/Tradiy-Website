import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import Header from './landing-page/header';
import StickyHeader from './landing-page/sticky-header'; // New StickyHeader component
import SearchBar from './landing-page/search-bar'; // Updated SearchBar
import RecentSearches from './landing-page/recent-searches';
import CarouselSearch from './landing-page/carousel-search';
import HowItWorks from './landing-page/homeowners-lookup';
import BenefitsTradespeople from './landing-page/tradepeople-benefits';
import Questions from './landing-page/questions';
import Divider from './landing-page/divider';
import LocalTrades from './landing-page/local-trades';
import Footer from './landing-page/footer';

function App() {
  const [showStickyHeader, setShowStickyHeader] = useState(false);
  const searchBarRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (searchBarRef.current) {
        const rect = searchBarRef.current.getBoundingClientRect();

        if (rect.top <= 0) {
          setShowStickyHeader(true); // Sticky header should show when SearchBar goes out of view
        } else {
          setShowStickyHeader(false); // Hide sticky header if SearchBar is in view
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger initially to check if SearchBar is already out of view

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="landing-page">
      <Header />
      {showStickyHeader && <StickyHeader />} {/* Conditionally render StickyHeader */}
      <main className="hero">
        <div className="hero-content">
          <h2>Find trusted local trades in seconds</h2>
          <p>Your directory for verified tradespeople in Ayrshire & Glasgow.</p>
          <SearchBar ref={searchBarRef} />
          <RecentSearches />
        </div>
        <CarouselSearch />
        <HowItWorks />
        <BenefitsTradespeople />
        <Questions />
        <Divider />
        <LocalTrades />
        <Divider />
        <Footer />
      </main>
    </div>
  );
}

export default App;
