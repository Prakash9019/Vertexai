import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { VertxLanding } from './VertxLanding';
import { LandingHero } from './opening';
import Geet from './Components2/Founder/Geet';
import VertxInterface from './Components2/Founder/Homepage';
import { JoinSection } from './Components2/SignUp';
import AuthLayout from './Components2/SignUp2';
import AuthFlow from './Components2/Dialog';
import { CreateAccountForm } from '../New_Account/NewAccount';
import Username from '../New_Account/Username';
import CategorySelection from '../New_Account/CatSection';


const App = () => {
  return (
    
    <Router>
      
      <Routes>
        <Route path="/main" element={<VertxLanding /> } />
        <Route path="/" element={<LandingHero />} />
        <Route path='/geet' element={<Geet />} />
        <Route path='/founder/home' element={<VertxInterface />} />
        <Route path='/signup' element={ <JoinSection />} />
        <Route path="/new" element={<CreateAccountForm /> } />
        <Route path='/signup1' element={<AuthLayout/>} />
        <Route path='/newaccount' element={<CreateAccountForm /> } />
        <Route path='/username' element={<Username /> } />
        <Route path='/categories' element={<CategorySelection /> } />
      </Routes>
    </Router>
  );
};

export default App;


// Username,Newaccount,Catsection
