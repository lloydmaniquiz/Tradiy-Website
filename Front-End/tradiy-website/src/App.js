import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/header';
import StickyHeader from './components/sticky-header'; // New StickyHeader component
import SearchBar from './components/search-bar';
import RecentSearches from './components/recent-searches';
import CarouselSearch from './components/carousel-search';
import HowItWorks from './components/homeowners-lookup';
import BenefitsTradespeople from './components/tradepeople-benefits';
import Questions from './components/questions';
import Divider from './components/divider';
import LocalTrades from './components/local-trades';
import Footer from './components/footer';

function App() {
  const [showStickyHeader, setShowStickyHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 700) {
        setShowStickyHeader(true);
      } else {
        setShowStickyHeader(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="landing-page">
      <Header />
      {showStickyHeader && <StickyHeader />}
      <main className="hero">
        <div className="hero-content">
          <h2>Find trusted local trades in seconds</h2>
          <p>Your directory for verified tradespeople in Ayrshire & Glasgow.</p>
          <SearchBar />
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
