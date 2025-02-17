
import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Login from "./googlelogin";

function AuthLayout() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleClick=()=>{
    console.log("helllooooo")
          navigate("/newaccount");
  }

  const handleClick1=()=>{
    navigate("/signin");
}
    const handleOpen = () => {
      setIsOpen(true);
    };
  
    const handleClose = () => {
      setIsOpen(false);
    };

  function Button({ children, variant = "default" }) {
    const baseStyles = "w-1/2 m-3 px-3 py-3 font-semibold whitespace-nowrap border border-white border-solid rounded-[100px] max-md:px-5 transition-colors duration-200 hover:opacity-90 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:outline-none";
    const variants = {
      default: "text-white",
      filled: "text-black bg-white"
    };
   
    return (
      <button 
        className={`${baseStyles} ${variants[variant]}`}
        tabIndex={0}
        onClick={handleOpen}
        aria-label={`Join as ${children}`}
      >
        {children}
      </button>
    );
  }

  const [user, setUser] = useState(null);
  
    // useEffect(() => {
    //   axios
    //     .get("https://vertxai-backend.vercel.app/auth/user", { withCredentials: true })
    //     .then((response) => setUser(response.data))
    //     .catch((err) => console.error("Error fetching user:", err));
    // }, []);
  
    const handelLogin= async()=>{
        const response= axios.get("https://vertxai-backend.vercel.app/auth/google", { withCredentials: true });
        console.log(response);
        const data = await response.json();
        console.log(data);
    }
    


  return (

    <>

      <section className="flex flex-row gap-10 py-11 pr-20 pl-9 bg-black max-md:px-5 w-full" aria-labelledby="join-heading">
      <div className="flex flex-col justify-center items-center px-20 py-64 bg-white max-md:px-5 max-md:py-24 w-1/2">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/8da03e3119727c7da4caab887480c5fa8c28a91b50311d29a7c597ac4acf08a3?placeholderIfAbsent=true&apiKey=42bb954c825745999302100cb42c8fd0"
          alt="Join platform logo"
          className="object-contain max-w-full aspect-[0.95] w-[200px]"
        />
      </div>
      <div className="flex flex-col items-center justify-center my-auto text-xl font-extrabold tracking-tighter text-white w-1/2">

      <h1 className="self-center text-5xl tracking-tighter mb-8 max-md:text-4xl max-md:mb-5">
              Join today.
            </h1>
            
             <Button variant="outline">Sign up with Google</Button>
            <div className="flex gap-3.5 items-center mt-2 text-base whitespace-nowrap">
              <div className="shrink-0 self-stretch my-auto h-0 border border-white border-solid w-[158px]" />
              <div className="self-stretch">or</div>
              <div className="shrink-0 self-stretch my-auto h-0 border border-white border-solid w-[158px]" />
            </div>
            <Button variant="filled">Create account</Button>
            <p className="mt-3 text-sm w-1/2 font-normal	tracking-normal ">
              By signing up, you agree to the{" "}
              <a href="#terms" className="underline ">
                Terms of Service
              </a> and{" "}
              <a href="#privacy" className="underline ">
                Privacy Policy
              </a>, including{" "}
              <a href="#cookies" className="underline ">
                Cookie Use.
              </a>
            </p>
            
            <p className="self-center mt-24 max-md:mt-10">
              Already have an account?{" "}
            </p>
            <Button variant="outline">Log in</Button>
      </div>
    </section>
  
    {isOpen && (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 overflow-y-auto">
    <div
      className="bg-[#1E1E1E] border border-[#2A2A2A] p-3 rounded-lg text-white relative"
      style={{
        width: "85%", // Increased width to 90% of the viewport
        height: "85%", // Slightly increased height to 85% of the viewport
        maxWidth: "1200px", // Constrain maximum width
        maxHeight: "750px", // Constrain maximum height
        overflowY: "auto", // Add vertical scroll for overflow content
      }}
    >
      <button
        className="absolute top-2 left-2 text-white text-5xl p-3"
        onClick={handleClose}
      >
        &times;
      </button>
      <div className="flex flex-col gap-4 items-center justify-center my-auto text-2xl font-extrabold tracking-tighter text-white p-12">
        <h1 className="self-center mb-6 text-6xl tracking-tighter max-md:text-4xl max-md:mb-5">
          Join today.
        </h1>
        {/* <a href="https://vertxai-backend.vercel.app/auth/google"
          className="p-2 bg-blue-500 text-white"
        >
          Login with Google
        </a> */}
        <Login />
        {/* <button className=" w-1/3 m-3 px-3 py-3 font-semibold whitespace-nowrap border border-white border-solid rounded-[100px] max-md:px-5 transition-colors duration-200 hover:opacity-90 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:outline-none text-white"> 
        <a href="https://vertxai-backend.vercel.app/auth/google" > Sign up with Google </a>
         </button> */}
        <div className="flex gap-3.5 items-center text-base whitespace-nowrap">
          <div className="shrink-0 self-stretch my-auto h-0 border border-white border-solid w-[158px]" />
          <div className="self-stretch">or</div>
          <div className="shrink-0 self-stretch my-auto h-0 border border-white border-solid w-[158px]" />
        </div>
        <button className="w-1/3 m-3 px-3 py-3 font-semibold whitespace-nowrap border border-white border-solid rounded-[100px] max-md:px-5 transition-colors duration-200 hover:opacity-90 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:outline-none text-black bg-white" onClick={ ()=> {handleClick()}}>Create account</button>
        <p className="mt-3 text-sm w-1/3 font-normal	tracking-normal">
          By signing up, you agree to the{" "}
          <a href="#terms" className="underline">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="#privacy" className="underline">
            Privacy Policy
          </a>
          , including{" "}
          <a href="#cookies" className="underline">
            Cookie Use
          </a>
          .
        </p>
        <p className="self-center mt-24 max-md:mt-10">
          Already have an account?{" "}
        </p>
        <button className="w-1/3 m-3 px-3 py-3 font-semibold whitespace-nowrap border border-white border-solid rounded-[100px] max-md:px-5 transition-colors duration-200 hover:opacity-90 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:outline-none text-white" onClick={()=>{handleClick1()}}>Log in</button>
      </div>
    </div>
  </div>
)}

  </>
  );
}

export default AuthLayout;