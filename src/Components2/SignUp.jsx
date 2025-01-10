import * as React from "react";

function Button({ children, variant = "default" }) {
  const baseStyles = "px-16 py-3 font-semibold whitespace-nowrap border border-white border-solid rounded-[100px] max-md:px-5 transition-colors duration-200 hover:opacity-90 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:outline-none";
  const variants = {
    default: "text-white",
    filled: "text-black bg-white"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]}`}
      tabIndex={0}
      aria-label={`Join as ${children}`}
    >
      {children}
    </button>
  );
}

export function JoinSection() {
  const roles = [
    { title: "Founder", variant: "default" },
    { title: "Investor", variant: "filled" }
  ];

  return (
    <section className="flex flex-wrap gap-10 py-11 pr-20 pl-9 bg-black max-md:px-5 w-full " aria-labelledby="join-heading">
      <div className="flex flex-col justify-center items-start px-20 py-64 bg-white max-md:px-5 max-md:py-24 w-[1/2]">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/8da03e3119727c7da4caab887480c5fa8c28a91b50311d29a7c597ac4acf08a3?placeholderIfAbsent=true&apiKey=42bb954c825745999302100cb42c8fd0"
          alt="Join platform logo"
          className="object-contain max-w-full aspect-[0.95] w-[200px]"
        />
      </div>
      <div className="flex flex-col my-auto text-xl font-extrabold tracking-tighter text-white">
        <h1 id="join-heading" className="text-5xl tracking-tighter max-md:mr-1.5 max-md:text-4xl">
          Join today.
        </h1>
        {roles.map((role, index) => (
          <div key={role.title} className="mt-4 first:mt-8">
            <Button variant={role.variant}>{role.title}</Button>
          </div>
        ))}
      </div>
    </section>
  );
}