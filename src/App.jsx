import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { VertxLanding } from './VertxLanding';
import { LandingHero } from './opening';
import Geet from './Components2/Founder/Geet';
import { JoinSection } from './Components2/SignUp';
import AuthLayout from './Components2/SignUp2';
import { CreateAccountForm } from './New_Account/NewAccount';
import Username from './New_Account/Username';
import CategorySelection from './New_Account/CatSection';
import { Signin } from './Components2/Signin';
import Verify from './New_Account/Verify';
import Setpassword from './New_Account/Setpassword';
import ProfilePictureUpload from './New_Account/Profile';
import PricingPage from './Components2/Founder/Subscription';
import VertxInterface from './Components2/Founder/Homepage';
import OutreachPage from './Components2/Founder/Outreach';
import { AuthProvider } from "./AuthContext";
import ProtectedRoute from "./ProtectedRoute";
import FounderPage from './Components2/Founder/FounderPage';
import ExplorePage from './Components2/Founder/Explore';
import FindAccount from './New_Account/FindAccount';
import ConfirmAccount from './New_Account/ConfirmAccount';
import SetNewPassword from './New_Account/SetNewPassword';

const App = () => {
  return (
    <AuthProvider>
    <Router>
      
      <Routes>
        <Route path="/main" element={<VertxLanding /> } />
        <Route path="/" element={<LandingHero />} />
        <Route path='/signup' element={ <JoinSection />} />
        <Route path='/signup1' element={<AuthLayout/>} />
        <Route path='/signin' element={<Signin/>} />
         {/* new account */}
         <Route path='/newaccount' element={<CreateAccountForm /> } />
        <Route path='/verify' element={<Verify />} />
        <Route path="/setpassword" element={<Setpassword />} />
        <Route path='/profile' element={<ProfilePictureUpload /> } />
        <Route path='/username' element={<Username /> } />
        <Route path='/categories' element={<CategorySelection /> } />
        {/* account creating completed */}
         
         {/* forgot password */}
           <Route path='/find-account' element={<FindAccount />} />
           <Route path='/confirm-account' element={<ConfirmAccount /> } />
           <Route path='/set-newpassword' element={< SetNewPassword /> } />

        <Route path="/founder/*" element={<FounderPage />} />
        <Route path='/pricingpage' element={ <ProtectedRoute> <PricingPage /> </ProtectedRoute>  } />
       <Route path='/outreach' element={<OutreachPage />} />
       <Route path='/explore' element={<ExplorePage />} />


        {/* not used */}
        <Route path='/geet' element={<Geet />} />
      </Routes>
    </Router>
    </AuthProvider>
  );
};

export default App;


// Username,Newaccount,Catsection





// const FloatingLabelInput = ({ id, label, type = 'text', maxLength = 50, validateEmail = false }) => {
//   const [value, setValue] = useState('');
//   const [isFocused, setIsFocused] = useState(false);
//   const [error, setError] = useState('');

//   const validateInput = (inputValue) => {
//     if (validateEmail) {
//       const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//       if (!emailRegex.test(inputValue)) {
//         setError('Please enter a valid email address');
//       } else {
//         setError('');
//       }
//     } else if (inputValue.length === 0) {
//       setError(`${label} is required`);
//     } else {
//       setError('');
//     }
//   };

//   useEffect(() => {
//     if (value && !isFocused) {
//       validateInput(value);
//     }
//   }, [value, isFocused]);

//   return (
//     <div className="relative">
//       <input
//         id={id}
//         type={type}
//         value={value}
//         maxLength={maxLength}
//         className={`w-full h-12 bg-[#1E1E1E] border ${error ? 'border-red-500' : 'border-[#2A2A2A]'} text-white rounded-lg px-3 pt-5 pb-1 focus:outline-none ${error ? 'focus:border-red-500' : 'focus:border-blue-500'} peer`}
//         placeholder=" "
//         onChange={(e) => setValue(e.target.value)}
//         onFocus={() => setIsFocused(true)}
//         onBlur={() => {
//           setIsFocused(false);
//           validateInput(value);
//         }}
//       />
//       <label
//         htmlFor={id}
//         className={`absolute text-sm left-3 transition-all duration-200 ${isFocused || value ? `top-1 text-xs ${error ? 'text-red-500' : 'text-blue-500'}` : 'top-3.5 text-gray-500'} peer-focus:top-1 peer-focus:text-xs ${error ? 'peer-focus:text-red-500' : 'peer-focus:text-blue-500'}`}
//       >
//         {label}
//       </label>
//       <span className="absolute right-3 top-1 text-xs text-gray-500">
//         {value.length}/{maxLength}
//       </span>
//       {error && (
//         <p className="text-xs text-red-500 mt-1">{error}</p>
//       )}
//     </div>
//   );
// };