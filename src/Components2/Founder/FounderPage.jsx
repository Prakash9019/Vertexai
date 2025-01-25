
import React from 'react';
import { Route, Routes,Navigate } from 'react-router-dom';
import FounderLayout from './FounderLayout';
import HomePage from './Homepage';
import Geet from './Geet';
import OutreachPage from './Outreach';
import ExplorePage from './Explore';
const FounderPage = () => {
  return (
    <Routes>
      <Route path="/" element={<FounderLayout />}>
        <Route index element={<Navigate to="home" />} />
        <Route path="home" element={<HomePage />} />
        <Route path="outreach" element={<OutreachPage />} />
        <Route path="explore" element={<ExplorePage />} />
        {/* <Route path="contact" element={<ContactPage />} /> */}
      </Route>
    </Routes>
  );
};

export default FounderPage;