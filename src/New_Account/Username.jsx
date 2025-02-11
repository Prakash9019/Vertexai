import * as React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Username() {
  const [username, setUsername] = useState("");
  const [error, setError] = useState('');
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };
  const navigate = useNavigate();

  const handleSubmit = async () => {
    const token = localStorage.getItem("verificationToken");
    if (!token) {
        throw new Error("Session TimeOut..");
    }
      try {
        const response = await fetch("https://vertxai-backend.vercel.app/api/auth/set-username", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                 'Authorization': `Bearer ${localStorage.getItem("verificationToken")}`
            },
            body: JSON.stringify({  username }),
        });

        const data = await response.json();
        if (!response.ok) {
          const errorMessage = data.message || 'An unknown error occurred'; // Fallback message
           throw new Error(errorMessage); // Throw dynamic erro   
           }
           if (data.user) {
            setError('');
        } else {
            setError('User does not exist');
        }
        navigate('/categories');
    } catch (error) {
        console.error("Submission failed:", error);
        setError(error.message);
    }
    };

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
            <h1 className="mt-7 text-4xl">Choose username</h1>
            <p className="mt-1.5 text-base font-medium text-neutral-500">
              your username is unique. You can change it later.
            </p>
            <form className="w-full" onSubmit={(e) => e.preventDefault()}>
              <div className="relative mt-14 max-md:mt-10">
                <label htmlFor="username" className="sr-only">
                  Choose your username
                </label>
                <input
                  type="text"
                  placeholder="Enter your Username"
                  name="username"
                  value={username}
                   
                  onChange={handleUsernameChange}
                  className="w-full bg-black rounded-md border border-solid border-neutral-500 h-[74px] px-4 text-xl focus:outline-none focus:border-white focus:ring-2 focus:ring-white"
                  aria-label="Username input"
                  autoComplete="username"
                />
                 {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
              </div>
              <button
                type="button"
                onClick={handleSubmit}
                className="w-full px-12 py-3 mt-80 text-xl bg-black border border-white border-solid rounded-[100px] hover:bg-white hover:text-black transition-colors duration-200 max-md:px-5 max-md:mt-10"
                aria-label="Skip username selection"
              >
                Set Username
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}