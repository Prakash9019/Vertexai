import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const FloatingLabelInput = ({ id, label, type = 'text', maxLength = 50, validateEmail = false, value, onChange, onValidate, className = '' }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [error, setError] = useState('');

  const validateInput = (inputValue) => {
    let valid = true;
    if (validateEmail) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(inputValue)) {
        setError('Please enter a valid email address');
        valid = false;
      } else {
        setError('');
      }
    } else if (inputValue.length === 0) {
      setError(`${label} is required`);
      valid = false;
    } else {
      setError('');
    }
    onValidate(valid);
  };

  useEffect(() => {
    if (value && !isFocused) {
      validateInput(value);
    }
  }, [value, isFocused]);

  return (
    <div className="relative w-full">
      <label
        htmlFor={id}
        className={`absolute text-xl p-3 transition-all duration-200 ${
          isFocused || value
            ? 'top-[-6px] text-lg pb-2 text-blue-500'
            : 'top-3 text-gray-500'
        }`}
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        maxLength={maxLength}
        className={`${className} ${error ? 'border-red-500' : ''} ${ isFocused || value
              ? 'pt-9 pb-7'
              : ''
          }`}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => {
          setIsFocused(false);
          validateInput(value);
        }}
      />
      {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
    </div>
  );
};






// export function Signin() {
//   const navigate = useNavigate();

//   const handleClick = () => {
//     navigate('/username');
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//   };


//   const [email, setEmail] = useState(''); 
//   const [isEmailValid, setIsEmailValid] = useState(false); 
//    const [isFilled, setIsFilled] = useState(false); 

//    useEffect(() => { if (isEmailValid) { setIsFilled(true); } else { setIsFilled(false); } }, [email, isEmailValid]);


//   return (
//     <div className="flex flex-col text-xl font-semibold text-white bg-black min-h-screen">
//       <div className="flex flex-col justify-center items-center px-20 py-10 w-full bg-white bg-opacity-10 max-md:px-5 max-md:max-w-full">
//         <div className="flex flex-col justify-center items-center px-20 py-9 max-w-full bg-black rounded-3xl w-[875px] max-md:px-5">
//           <form
//             onSubmit={handleSubmit}
//             className="flex flex-col max-w-full w-[485px]"
//             noValidate
//           >
//             <img
//               loading="lazy"
//               src="https://cdn.builder.io/api/v1/image/assets/TEMP/f1c512861316b27a0f461c6ab1c0a3a58abeef893050475df9aa2159b8643f22?placeholderIfAbsent=true&apiKey=42bb954c825745999302100cb42c8fd0"
//               alt="Company logo"
//               className="object-contain self-center aspect-square w-[60px]"
//             />
//             <h1 className="self-center mt-7 text-4xl font-extrabold">
//             Sign in to Vertx
//             </h1>

           
//             <div key="email" className="flex flex-col w-full mt-4">
//             <FloatingLabelInput
//                   id={`email`}  label="username, email address, or vertxuid"  type='email' validateEmail={ true}
//                   value={email}
//                   onChange={setEmail}
//                   onValidate={setIsEmailValid}
//                   className="w-full px-4 py-7 bg-black rounded-md border border-solid border-neutral-500 text-xl text-white"
//                 />
//             </div>

           

//             <button type="submit" className={`px-12 py-3 mt-4 font-extrabold text-black whitespace-nowrap rounded-[100px] focus:outline-none focus:ring-2 focus:ring-neutral-300 ${isFilled ? 'bg-white' : 'bg-neutral-500'}`} disabled={!isFilled} onClick={handleClick} >
//               Next
//             </button>
//             <button type="button" className='px-12 py-3 mt-4 font-extrabold text-white  whitespace-nowrap rounded-[100px] focus:outline-none ring-2 ring-neutral-300 ' onClick={handleClick} >
//               Forgot Password
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }



export function Signin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  
  useEffect(() => {
    if (isEmailValid) {
      setIsFilled(true);
    } else {
      setIsFilled(false);
    }
  }, [email, isEmailValid]);

  const handleCheckUser = async () => {
    try {
      const response = await fetch('/api/checkUser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
      const data = await response.json();
      if (data.exists) {
        setShowPassword(true);
        setErrorMessage('');
      } else {
        setErrorMessage('User does not exist');
        setShowPassword(false);
      }
    } catch (error) {
      console.error('Error checking user:', error);
      setErrorMessage('An error occurred. Please try again.');
    }
  };

  const handleClick = () => {
    console.log('Checking 2222 3333 passwor');
    if(password) { 
      console.log('Checking passwor');
      navigate('/categories')}
   else{
     setShowPassword(true);
   }

   
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement further logic for handling the form submission
  };

  return (
    <div className="flex flex-col text-xl font-semibold text-white bg-black min-h-screen">
      <div className="flex flex-col justify-center items-center px-20 py-10 w-full bg-white bg-opacity-10 max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col justify-center items-center px-20 py-9 max-w-full bg-black rounded-3xl w-[875px] max-md:px-5">
          <form onSubmit={handleSubmit} className="flex flex-col max-w-full w-[485px]" noValidate>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/f1c512861316b27a0f461c6ab1c0a3a58abeef893050475df9aa2159b8643f22?placeholderIfAbsent=true&apiKey=42bb954c825745999302100cb42c8fd0"
              alt="Company logo"
              className="object-contain self-center aspect-square w-[60px]"
            />
            <h1 className="self-center mt-7 text-4xl font-extrabold">Sign in to Vertx</h1>

            <div key="email" className="flex flex-col w-full mt-4">
            <FloatingLabelInput
                  id={`email`}  label="Email"  type='email' validateEmail={ true}
                  value={email}
                  onChange={setEmail}
                  onValidate={setIsEmailValid}
                  className="w-full px-4 py-6 bg-black rounded-md border border-solid border-neutral-500 text-white"
                />
            </div>

            {showPassword && (
              <div key="password" className="flex flex-col w-full mt-4">
                <FloatingLabelInput
                  id="password"
                  label="Password"
                  type="password"
                  value={password}
                  onChange={setPassword} 
                  onValidate={setIsPasswordValid} 
                  validateEmail={false}
                  className="w-full px-4 py-7 bg-black rounded-md border border-solid border-neutral-500 text-xl text-white"
                />
              </div>
            )}

            {errorMessage && (
              <p className="text-red-500 mt-4">{errorMessage}</p>
            )}

            <button
              type="button"
              className={`px-12 py-3 mt-4 font-extrabold text-black whitespace-nowrap rounded-[100px] focus:outline-none focus:ring-2 focus:ring-neutral-300 ${
                isFilled ? 'bg-white' : 'bg-neutral-500'
              }`}
              disabled={!isFilled}
              onClick={handleClick}
            >
              Next
            </button>
            <button
              type="button"
              className="px-12 py-3 mt-4 font-extrabold text-white whitespace-nowrap rounded-[100px] focus:outline-none ring-2 ring-neutral-300"
              onClick={handleClick}
            >
              Forgot Password
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

