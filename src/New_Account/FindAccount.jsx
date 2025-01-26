import * as React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function FindAccount() {
  const [identifier, setidentifier] = useState("");
  const [error, setError] = useState('');

  const handleidentifierChange = (event) => {
    setidentifier(event.target.value);
  };
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
        const response = await fetch("https://vertxai-backend.vercel.app/api/auth/verify-account", {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({ identifier }),
      });
      const data = await response.json();
      if (!response.ok) {
        const errorMessage = data.message || 'An unknown error occurred'; // Fallback message
         throw new Error(errorMessage); // Throw dynamic erro   
         }
      localStorage.setItem('verificationToken', data.token); 
      console.log(data);
        
        if (data.user) {
            setError('');
        } else {
            setError('User does not exist');
        }
        navigate('/confirm-account');
      } catch (error) {
        console.error( error);
        setError(error.message);
      }
     }

  return (
    <div className="flex flex-col font-extrabold text-white bg-black min-h-screen">
      <div className="flex flex-col justify-center items-center px-20 py-10 w-full bg-white bg-opacity-10 max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col justify-center items-center px-20 py-9 max-w-full bg-black rounded-3xl w-[875px] max-md:px-5">
          <div className="flex flex-col items-center max-w-full w-[485px]">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/f1c512861316b27a0f461c6ab1c0a3a58abeef893050475df9aa2159b8643f22?placeholderIfAbsent=true&apiKey=42bb954c825745999302100cb42c8fd0"
              alt="User setup logo"
              className="object-contain aspect-square w-[60px]"
            />
            <h1 className="mt-7 text-4xl">Find your Vertx account</h1>
            <p className="mt-1.5 text-base font-medium text-neutral-500">
            Enter the username, email address or vertxuid associated with your account to change your password.
            </p>
            <form className="w-full" onSubmit={(e) => e.preventDefault()}>
              <div className="relative mt-14 max-md:mt-10">
                <label htmlFor="identifier" className="sr-only">
                username, email address, or vertxuid
                </label>
                <input
                  type="text"
                  placeholder="username, email address, or vertxuid"
                  name="username, email address, or vertxuid"
                  value={identifier}
                   
                  onChange={handleidentifierChange}
                  className="w-full bg-black rounded-md border border-solid border-neutral-500 h-[74px] px-4 text-xl focus:outline-none focus:border-white focus:ring-2 focus:ring-white"
                  aria-label="identifier input"
                  autoComplete="username, email address, or vertxuid"
                />
                 {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
              </div>
              <button
                type="button"
                onClick={handleSubmit}
                className="w-full px-12 py-3 mt-80 text-xl bg-black border border-white border-solid rounded-[100px] hover:bg-white hover:text-black transition-colors duration-200 max-md:px-5 max-md:mt-10"
                aria-label="Skip identifier selection"
              >
                Next
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}