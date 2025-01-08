import * as React from "react";

export function VertxHero() {
  const navItems = ["Products", "Company"];

  return (
    <div className="flex  flex-col items-center min-h-screen text-xl bg-black ">
      <nav className="flex flex-wrap gap-1.5 justify-between items-center self-stretch text-xl px-14 w-full text-base text-white bg-black border-b border-neutral-500 max-md:px-5 max-md:max-w-full">
        <div className="flex gap-1 self-stretch my-auto font-bold font-kode-mono whitespace-nowrap">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/3e672ba930068c37a51406903bc1cfa4bd89465b8644ffd8014695cd77963001?placeholderIfAbsent=true&apiKey=42bb954c825745999302100cb42c8fd0"
            alt="VertX Logo"
            className="object-contain shrink-0 aspect-square w-[30px]"
          />
          <div>VERTX</div>
        </div>
        <div className="flex gap-10 self-stretch my-auto">
          {navItems.map((item, index) => (
            <div key={index} className="text-base tracking-tighter whitespace-nowrap">
              {item}
            </div>
          ))}
        </div>
        <div className="self-stretch px-8 py-4 border-r border-l border-neutral-500 max-md:px-5">
          <span>Book</span> <span>demo</span>
        </div>
      </nav>

      <main className="flex flex-col items-center">
        <h1 className="mt-44 text-5xl font-extrabold text-white max-md:mt-10 max-md:max-w-full max-md:text-4xl">
          Introducing VERT<span className="text-6xl">X</span>ESF.
        </h1>
        <p className="mt-2 font-semibold text-neutral-500 w-[773px] max-md:max-w-full">
          VertX is a model designed to simplify the journey for Early Stage
          Founders(ESF). By automating essential non-technical tasks in thier 0-1
          phase, it helps founders focus on what truly matters.
        </p>
        <div className="flex gap-2.5 mt-52 max-w-full w-[371px] max-md:mt-10">
          <button className="px-9 py-3.5 font-bold text-black bg-white max-md:px-5">
            Learn more
          </button>
          <button className="px-7 py-3.5 font-extrabold text-white border border-white border-solid max-md:px-5">
            Watch video
          </button>
        </div>
      </main>

      <footer className="flex self-stretch mt-72 mb-12 w-full bg-black border-t border-neutral-500  max-md:max-w-full" />
    </div>
  );
}