
// import React, { useState, useEffect } from 'react';

// // FloatingLabelInput component
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

// // LoginOrSignup component
// const LoginOrSignup = ({ onChoice }) => (
//   <>
//     <div className="flex flex-col items-center">
//       <h1 className="text-white text-2xl font-bold">Welcome</h1>
//       <p className="text-gray-300 mt-2">Please choose whether you want to log in or sign up.</p>
//     </div>
//     <div className="flex justify-center mt-6">
//       <button onClick={() => onChoice('login')} className="border border-gray-300 text-white px-4 py-2 rounded hover:bg-gray-700">Login</button>
//       <button onClick={() => onChoice('signup')} className="bg-blue-600 text-white px-4 py-2 rounded ml-4 hover:bg-blue-700">Sign Up</button>
//     </div>
//   </>
// );

// // LoginForm component
// const LoginForm = ({ onClose }) => (
//   <>
//     <div className="flex flex-col items-center">
//       <h1 className="text-white text-2xl font-bold">Login</h1>
//       <p className="text-gray-300 mt-2">Enter your credentials to log in.</p>
//     </div>
//     <div className="grid gap-4 py-4">
//       <FloatingLabelInput id="login-email" label="Email" type="email" validateEmail={true} />
//       <FloatingLabelInput id="login-password" label="Password" type="password" />
//     </div>
//     <div className="flex justify-end mt-6">
//       <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Log in</button>
//       <button onClick={onClose} className="border border-gray-300 text-white px-4 py-2 rounded ml-4 hover:bg-gray-700">Cancel</button>
//     </div>
//   </>
// );

// // SignupForm component
// const SignupForm = ({ onClose }) => (
//   <>
//     <div className="flex flex-col items-center">
//       <h1 className="text-white text-2xl font-bold">Sign Up</h1>
//       <p className="text-gray-300 mt-2">Create a new account.</p>
//     </div>
//     <div className="grid gap-4 py-4">
//       <FloatingLabelInput id="signup-name" label="Name" />
//       <FloatingLabelInput id="signup-email" label="Email" type="email" validateEmail={true} />
//       <FloatingLabelInput id="signup-password" label="Password" type="password" />
//     </div>
//     <div className="flex justify-end mt-6">
//       <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Sign up</button>
//       <button onClick={onClose} className="border border-gray-300 text-white px-4 py-2 rounded ml-4 hover:bg-gray-700">Cancel</button>
//     </div>
//   </>
// );

// export default function AuthFlow() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [currentStep, setCurrentStep] = useState('choice');

//   const handleOpen = () => {
//     setIsOpen(true);
//     setCurrentStep('choice');
//   };

//   const handleClose = () => {
//     setIsOpen(false);
//     setCurrentStep('choice');
//   };

//   const handleChoice = (choice) => {
//     setCurrentStep(choice);
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-900">
//       <button onClick={handleOpen} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Open Auth Flow</button>
//       {isOpen && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//           <div className="bg-[#1E1E1E] border border-[#2A2A2A] p-6 rounded-lg">
//             {currentStep === 'choice' && <LoginOrSignup onChoice={handleChoice} />}
//             {currentStep === 'login' && <LoginForm onClose={handleClose} />}
//             {currentStep === 'signup' && <SignupForm onClose={handleClose} />}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }



import React, { useState } from 'react';

// Button component
const Button = ({ children, variant = 'default', onClick }) => {
  const baseStyles = "px-4 py-2 font-semibold whitespace-nowrap border border-white border-solid rounded-[100px] transition-colors duration-200 hover:opacity-90 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:outline-none";
  const variants = {
    default: "text-white bg-blue-600",
    outline: "text-white border border-gray-300 hover:bg-gray-700",
    filled: "text-black bg-white"
  };

  return (
    <button className={`${baseStyles} ${variants[variant]}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default function AuthFlow() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <Button onClick={handleOpen}>Open Auth Dialog</Button>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-[#1E1E1E] border border-[#2A2A2A] m-2 p-6 rounded-lg text-white w-full max-w-md relative">
            <button
              className="absolute top-2 left-2 text-white text-5xl p-3"
              onClick={handleClose}
            >
              &times;
            </button>
            <div className="flex flex-col gap-4 items-center justify-center my-auto text-xl font-extrabold tracking-tighter text-white">
              <h1 className="self-center text-5xl tracking-tighter max-md:text-4xl max-md:mb-5">Join today.</h1>
              <Button variant="outline">Sign up with Google</Button>
              <div className="flex gap-3.5 items-center text-base whitespace-nowrap">
                <div className="shrink-0 self-stretch my-auto h-0 border border-white border-solid w-[158px]" />
                <div className="self-stretch">or</div>
                <div className="shrink-0 self-stretch my-auto h-0 border border-white border-solid w-[158px]" />
              </div>
              <Button variant="filled">Create account</Button>
              <p className="text-sm">
                By signing up, you agree to the{' '}
                <a href="#terms" className="underline">Terms of Service</a> and{' '}
                <a href="#privacy" className="underline">Privacy Policy</a>, including{' '}
                <a href="#cookies" className="underline">Cookie Use</a>.
              </p>
              <p className="self-center mt-24 max-md:mt-10">Already have an account?{' '}</p>
              <Button variant="outline">Log in</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
