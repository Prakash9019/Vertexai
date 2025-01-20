
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import FounderLayout from './FounderLayout';
import HomePage from './Homepage';
import Geet from './Geet';

const FounderPage = () => {
  return (
    <Routes>
      <Route path="/" element={<FounderLayout />}>
        <Route path="home" element={<HomePage />} />
        <Route path="geet" element={<Geet />} />
        {/* <Route path="contact" element={<ContactPage />} /> */}
      </Route>
    </Routes>
  );
};

export default FounderPage;