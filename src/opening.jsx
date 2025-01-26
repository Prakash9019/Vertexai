import * as React from "react";
import { useNavigate } from 'react-router-dom';
import logo from "./assets/logo.png"


export function LandingHero() {
  const navigate = useNavigate(); 
  
  const handleClick = () => { 
    navigate('/founder/home');
  }

  const handleClick1 = () => { 
    navigate('/main');
  }

  return (
    <div className="overflow-hidden px-8 pt-3 pb-9 bg-zinc-950 max-md:px-5">
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-[31%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col font-extrabold max-md:mt-10">

          <img
      loading="lazy"
      src={logo}
      className="object-contain aspect-square w-[100px]"
      alt="Vertx Logo"
    />
            <div className="flex flex-col pl-8 mt-96 w-full max-md:pl-5 max-md:mt-10">
              <div className="mr-6 ml-5 text-6xl tracking-tighter text-white leading-[65px] max-md:mx-2.5 max-md:text-4xl max-md:leading-10">
                hi. this is vertx
              </div>
              <div className="self-start mt-5 ml-5 text-3xl font-semibold leading-8 text-neutral-500 max-md:ml-2.5">
                A vertex where founders and investors converge.
              </div>
              <div className="flex gap-2.5 mt-12 max-md:mt-10">
                <button className="px-11 text-black bg-white py-3.5 rounded-[100px] text-xl font-black" onClick={handleClick} >Try Vertx</button>
                <button className="px-8 text-white border-2 border-white border-solid py-3.5 rounded-[100px] text-xl" onClick={handleClick1} >Overview</button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[69%] max-md:ml-0 max-md:w-full">
          <div className="grow px-16 py-72 mt-7 w-full text-5xl font-bold tracking-tighter text-center text-black bg-white max-md:px-5 max-md:py-24 max-md:mt-10 max-md:max-w-full max-md:text-4xl">
            <p className="text-7xl">Original Release on</p> 
            <p className="text-4xl">26 January, 2025</p>
          </div>
        </div>
      </div>
    </div>
  );
}