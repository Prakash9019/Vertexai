import { useState, useEffect,useContext  } from 'react';
import { useNavigate,useLocation } from 'react-router-dom';
import { loginUser,checkUser } from "../api";
import { AuthContext } from "../AuthContext";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const FloatingLabelInput = ({ id, label, type = 'text', maxLength = 50, validateidentifier = false, value, onChange, onValidate, className = '' }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [error, setError] = useState('');

  const validateInput = (inputValue) => {
    let valid = true;
    if (validateidentifier) {
      const identifierRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!identifierRegex.test(inputValue)) {
        setError('Please enter a valid identifier address');
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

export function Signin() {
  const navigate = useNavigate();
  const [identifier, setidentifier] = useState('');
  const [isidentifierValid, setIsidentifierValid] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
   const [isFocused, setIsFocused] = useState(false);
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const togglePasswordVisibility = () => {
      setIsPasswordVisible(!isPasswordVisible);
    };
  const [isPasswordValid, setIsPasswordValid] = useState(false);
   const { login } = useContext(AuthContext);
   const location = useLocation();
  const [errot,setError] = useState('');
  useEffect(() => {
    if (isidentifierValid) {
      setIsFilled(true);
    } else {
      setIsFilled(false);
    }
  }, [identifier, isidentifierValid]);

  const handleCheckUser = async () => {
    try {
      const response = await fetch('/api/checkUser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ identifier }),
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
   
      navigate('/find-account');
   
  };

   
    const handleSubmit = async (e) => {
        e.preventDefault();
        if(password) { 


          try {
            const response = await fetch("https://vertxai-backend.vercel.app/api/auth/login", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ identifier, password }),
            });
            const data = await response.json();
            if (!response.ok) {
              const errorMessage = data.message || 'An unknown error occurred'; // Fallback message
               throw new Error(errorMessage); // Throw dynamic erro   
          }
            localStorage.setItem('verificationToken', data.token); 
            console.log(data);
            navigate("/categories");
        } catch (error) {
            console.error("Submission failed:", error.message);
        }


          // try {
            
          //   const response = await loginUser({identifier, password});
          //   login(response.data.token);
          //   const redirectTo = location.state?.from?.pathname || "/categories";
          //   navigate(redirectTo); // Redirect to the page the user was trying to access
          // } catch (err) {
          //   console.log(err.response.data.message || "Login failed");
          // }

        }
       else{
        try {
          const response = await fetch("https://vertxai-backend.vercel.app/api/auth/checkUser", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ identifier }),
            "mode":"no-cors",
        });
        const data = await response.json();
        if (!response.ok) {
          const errorMessage = data.message || 'An unknown error occurred'; // Fallback message
           throw new Error(errorMessage); // Throw dynamic erro   
      }
        localStorage.setItem('verificationToken', data.token); 
        console.log(data);
          
          if (data.user) {
            setShowPassword(true);
            setErrorMessage('');
          } else {
            setErrorMessage('User does not exist');
            setShowPassword(false);
          }
        } catch (error) {
          console.error( error);
          setErrorMessage(error.message);
        }
       }
   
    }


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

            <div key="identifier" className="flex flex-col w-full mt-4">
            <FloatingLabelInput
                  id={`identifier`}  label="username, email address, or vertxuid"  type='text' validateidentifier={ false}
                  value={identifier}
                  onChange={setidentifier}
                  onValidate={setIsidentifierValid}
                  className="w-full px-4 py-6 bg-black rounded-md border border-solid border-neutral-500 text-white"
                />
            </div>

            {showPassword && (
               <div className="relative w-full mt-3">
                            {" "}
                            <label
                              htmlFor="Password"
                              onClick={() => {
                                setIsFocused(true);
                                document.getElementById("Password").focus();
                              }}
                              className={`absolute text-xl p-3 transition-all duration-200 ${
                                isFocused || password
                                  ? "top-[-6px] text-xs text-blue-500"
                                  : "top-3 text-gray-500"
                              }`}
                            >
                              {" "}
                              Password{" "}
                            </label>{" "}
                            <div className="flex items-center w-full px-4 py-6 bg-black rounded-md border border-solid border-neutral-500">
                              {" "}
                              <input
                                id="Password"
                                type={isPasswordVisible ? "text" : "password"}
                                value={password}
                                minLength={8}
                                className="flex-grow bg-transparent text-white text-xl focus:outline-none focus:ring-0"
                                onChange={(e) => setPassword(e.target.value)}
                                onFocus={() => setIsFocused(true)}
                                onBlur={() => {
                                  setIsFocused(false); // validateInput(value);
                                }}
                              />{" "}
                              <button
                                type="button"
                                onClick={togglePasswordVisibility}
                                className="ml-2 text-white"
                              >
                                {" "}
                                {isPasswordVisible ? <FaEyeSlash /> : <FaEye />}{" "}
                              </button>{" "}
                            </div>{" "}
                          </div>
            )}

            {errorMessage && (
              <p className="text-red-500 mt-4">{errorMessage}</p>
            )}

            <button
               type="submit"
              className={`px-12 py-3 mt-4 font-extrabold text-black whitespace-nowrap rounded-[100px] focus:outline-none focus:ring-2 focus:ring-neutral-300 ${
                isFilled ? 'bg-white' : 'bg-neutral-500'
              }`}
              disabled={!isFilled}
              onClick={handleSubmit}
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

