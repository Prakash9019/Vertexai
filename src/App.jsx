import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { VertxLanding } from './VertxLanding';
import { LandingHero } from './opening';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/main" element={<VertxLanding /> } />
        <Route path="/" element={<LandingHero />} />
      </Routes>
    </Router>
  );
};

export default App;
