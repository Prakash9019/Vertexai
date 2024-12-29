import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PitchBuilder from './Components/PitchBuilder';
import PitchAnalysis from './Components/PitchAnalysis';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/create" element={<PitchBuilder />} />
        <Route path="/analyze" element={<PitchAnalysis />} />
      </Routes>
    </Router>
  );
};

export default App;
