import React, { useRef,useState } from 'react';
import image12 from "./assets/image12.png"
import image13 from "./assets/image13.png"
import image14 from "./assets/image14.png"
import image0 from "./assets/image0.png"
import image1 from "./assets/image1.png"
import image2 from "./assets/image2.png"
import image3 from "./assets/image3.png"
import SlidingFeatureCards from './sliding';
import logo from "./assets/logo.png"
// import { ChevronLeft, ChevronRight } from 'lucide-react';

const images = [image0, image1, image2,image3];


export function VertxLanding() {

  const features = [
    { title: 'Explore', className: ' ' },
    { title: 'Outreach', className: '  ' },
    { title: 'Showcase', className: '  ' },
    { title: 'Activity', className: '  ' },
  ];

  return (
    <div className="flex overflow-hidden flex-col pb-10 bg-zinc-950">
      <nav className="flex gap-5 justify-between items-center px-12 w-full text-base font-bold text-white bg-black max-md:px-5 max-md:max-w-full" role="navigation" aria-label="Main navigation">
        <div className="flex gap-1 self-stretch text-xl whitespace-nowrap">
          <img
            loading="lazy"
            src={logo}
            alt="Vertx Logo"
            className="object-contain shrink-0 aspect-square w-[100px]"
          />
          
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <a href="#" className="hover:text-gray-300">Company</a>
          <a href="#" className="hover:text-gray-300">Plans</a>
          <a href="#" className="hover:text-gray-300">Resources</a>
        </nav>
        <button className="self-stretch my-auto rounded-xl tracking-tighter border border-white hover:bg-white hover:text-black m-2 p-3 " aria-label="Join beta program">Join Beta</button>
      </nav>

      <main className="flex flex-col items-center px-14 w-full max-md:px-5 max-md:max-w-full">

        <section className="flex flex-col justify-center items-center self-stretch px-20 py-56 text-black bg-white rounded-xl max-md:px-5 max-md:py-24 max-md:max-w-full" aria-labelledby="hero-title">
          <div className="flex flex-col items-center mb-0 max-w-full w-[748px] max-md:mb-2.5">
            <h1 id="hero-title" className="text-7xl font-bold tracking-tighter text-center max-md:max-w-full max-md:text-4xl">
              Introducing Vertx
            </h1>
            <p className="m-3 text-3xl font-semibold  max-md:max-w-full">
              A vertex where founders and investors converge.
            </p>
            <button 
              className="px-6 py-3.5 mt-9 max-w-full text-xl font-bold text-white bg-black rounded-[100px] w-[181px] max-md:px-5 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black"
              aria-label="Watch introduction video"
            >
              Watch video
            </button>
          </div>
        </section>

        <h2 className="mt-40 text-5xl font-semibold tracking-tighter text-center text-white w-[867px] max-md:mt-10 max-md:max-w-full max-md:text-4xl">
          Explore startups, update with news, funding and much more on vertx
        </h2>

        <button className="flex relative flex-col justify-center px-20 py-12 mt-24 w-full rounded-xl max-w-[1080px] min-h-[600px] max-md:px-5 max-md:mt-10 max-md:max-w-full" aria-label="Startup exploration interface">
         
        <img
            loading="lazy"
            src={image12}
            alt="Startup exploration interface demonstration"
            className="object-contain w-full rounded-xl aspect-[1.78] max-md:max-w-full"
          />
        </button>

        <h2 className="mt-24 text-5xl font-semibold tracking-tighter text-center text-white w-[838px] max-md:mt-10 max-md:max-w-full max-md:text-4xl">
         
          Connect with investors and raise funds effortlessly
        </h2>

        <button className="flex relative flex-col justify-center px-20 py-12 mt-24 w-full rounded-xl max-w-[1080px] min-h-[600px] max-md:px-5 max-md:mt-10 max-md:max-w-full" aria-label="AI documentation interface">
          <img
            loading="lazy"
            src={image13}
            alt="Startup exploration interface demonstration"
            className="object-contain w-full rounded-xl aspect-[1.78] max-md:max-w-full"
          />

        </button>
        <h2 className="mt-24 text-5xl font-semibold tracking-tighter text-center text-white w-[838px] max-md:mt-10 max-md:max-w-full max-md:text-4xl">
          Updating and generation of docs is simplified with geet AI on vertx
        </h2>

        <button className="flex relative flex-col justify-center px-20 py-12 mt-24 w-full rounded-xl max-w-[1080px] min-h-[600px] max-md:px-5 max-md:mt-10 max-md:max-w-full" aria-label="AI documentation interface">
          <img
            loading="lazy"
            src={image14}
            alt="Startup exploration interface demonstration"
            className="object-contain w-full rounded-xl aspect-[1.78] max-md:max-w-full"
          />

        </button>

      </main>

      {/* <div className="flex justify-end items-center mt-6 space-x-4">
        <button
          onClick={prevCard}
          className="p-2 text-4xl font-bold tracking-tighter text-neutral-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-white rounded-full"
          aria-label="Previous slide"
        >
          <ChevronLeft size={32} />
        </button>
        <button
          onClick={nextCard}
          className="p-2 text-4xl font-bold tracking-tighter text-white hover:text-neutral-200 focus:outline-none focus:ring-2 focus:ring-white rounded-full"
          aria-label="Next slide"
        >
          <ChevronRight size={32} />
        </button>
      </div> */}

      <SlidingFeatureCards features={features} images={images} />

      <section className="flex flex-col justify-center items-center self-center px-20 py-40 mt-20 w-full bg-white rounded-xl max-w-[1321px] max-md:px-5 max-md:py-24 max-md:mt-10 max-md:max-w-full" aria-labelledby="cta-title">
        <div className="flex flex-col mb-0 max-w-full w-[456px] max-md:mb-2.5">
          <h2 id="cta-title" className="text-4xl font-semibold tracking-tighter text-center text-black max-md:max-w-full">
            Instant solutions. Endless connections. One platform
          </h2>
          <button 
            className="self-center px-3 py-3.5 mt-7 max-w-full text-xl font-extrabold tracking-tight text-white bg-black border-2 border-black border-solid rounded-[100px] w-[202px] max-md:px-5 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black"
            aria-label="Join our community"
          >
            Join community
          </button>
        </div>
      </section>

      <footer className="flex flex-wrap gap-5 justify-between px-12 py-3 mt-20 w-full text-white bg-black max-md:px-5 max-md:mt-10 max-md:max-w-full" role="contentinfo">
        <div className="flex gap-1 self-start text-xl font-bold whitespace-nowrap">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/3e672ba930068c37a51406903bc1cfa4bd89465b8644ffd8014695cd77963001?placeholderIfAbsent=true&apiKey=42bb954c825745999302100cb42c8fd0"
            alt="Vertx Logo"
            className="object-contain shrink-0 aspect-square w-[30px]"
          />
          <div>VERTX</div>
        </div>
        <div className="text-base font-semibold leading-8">
          A vertex where founders and investors converge.
        </div>
      </footer>
    </div>
  );
}