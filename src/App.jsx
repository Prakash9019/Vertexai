import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { VertxLanding } from './VertxLanding';
import { LandingHero } from './opening';
import Geet from './Components2/Founder/Geet';
import VertxInterface from './Components2/Founder/Homepage';


const App = () => {
  return (
    
    <Router>
      
      <Routes>
        <Route path="/main" element={<VertxLanding /> } />
        <Route path="/" element={<LandingHero />} />
        <Route path='/geet' element={<Geet />} />
        <Route path='/founder' element={<VertxInterface />} />
      </Routes>
    </Router>
  );
};

export default App;
