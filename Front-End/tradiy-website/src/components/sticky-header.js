import React from 'react';
import '../App.css';

function StickyHeader({ isVisible }) {
  return (
    <header className={`sticky-header ${isVisible ? 'visible' : ''}`}>
        
    </header>
  );
}

export default StickyHeader;