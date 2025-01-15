import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { VertxLanding } from './VertxLanding';
import { LandingHero } from './opening';
import Geet from './Components2/Founder/Geet';
import VertxInterface from './Components2/Founder/Homepage';
import { JoinSection } from './Components2/SignUp';
import AuthLayout from './Components2/SignUp2';
import AuthFlow from './Components2/Dialog';
import { CreateAccountForm } from './NewAccount';
import Username from './Username';
import { Categories } from './CatSection';


const App = () => {
  return (
    
    <Router>
      
      <Routes>
        <Route path="/main" element={<VertxLanding /> } />
        <Route path="/" element={<Categories />} />
        <Route path='/geet' element={<Geet />} />
        <Route path='/founder/home' element={<VertxInterface />} />
        <Route path='/signup' element={ <JoinSection />} />
        <Route path="/new" element={<CreateAccountForm /> } />
        <Route path='/signup1' element={<AuthLayout/>} />
      </Routes>
    </Router>
  );
};

export default App;


// Username,Newaccount,Catsection
