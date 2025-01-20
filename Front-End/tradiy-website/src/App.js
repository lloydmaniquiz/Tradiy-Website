import './App.css';
import Header from './components/header';
import SearchBar from './components/search-bar';
import RecentSearches from './components/recent-searches';
import CarouselSearch from './components/carousel-search';
import HowItWorks from './components/homeowners-lookup';
import BenefitsTradespeople from './components/tradepeople-benefits';

function App() {
  return (
    <div className="landing-page">
      <Header />
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
      </main>
    </div>
  );
}

export default App;