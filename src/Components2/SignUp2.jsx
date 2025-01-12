import * as React from "react";

function AuthLayout() {
  const authButtons = [
    { text: "Sign up with credentials", variant: "outline" },
    { text: "Create account", variant: "filled" },
    { text: "Log in", variant: "outline" }
  ];

  function Button({ children, variant = "default" }) {
    const baseStyles = "m-3 px-16 py-3 font-semibold whitespace-nowrap border border-white border-solid rounded-[100px] max-md:px-5 transition-colors duration-200 hover:opacity-90 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:outline-none";
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


  return (



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

      <h1 className="self-center text-5xl tracking-tighter max-md:text-4xl max-md:mb-5">
              Join today.
            </h1>
            
             <Button variant="outline">Sign up with google</Button>
            <div className="flex gap-3.5 items-center mt-2 text-base whitespace-nowrap">
              <div className="shrink-0 self-stretch my-auto h-0 border border-white border-solid w-[158px]" />
              <div className="self-stretch">or</div>
              <div className="shrink-0 self-stretch my-auto h-0 border border-white border-solid w-[158px]" />
            </div>
            <Button variant="filled">Create account</Button>
            <p className="mt-3 text-sm">
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




    //   <div className="flex gap-5 max-md:flex-col">
    //     <div className="flex flex-col w-[59%] max-md:ml-0 max-md:w-full">
    //       <div className="flex flex-col grow justify-center items-start px-20 py-64 w-full bg-white max-md:px-5 max-md:py-24 max-md:mt-10 max-md:max-w-full">
    //         <img
    //           loading="lazy"
    //           src="https://cdn.builder.io/api/v1/image/assets/TEMP/331400dd77035a0f58b2397574fd118acdec94e843ceaacbe7b6d4cc8ae6c899?placeholderIfAbsent=true&apiKey=42bb954c825745999302100cb42c8fd0"
    //           alt="Authentication logo"
    //           className="object-contain max-w-full aspect-[0.95] w-[200px]"
    //         />
    //       </div>
    //     </div>
    //     <div className="flex flex-col ml-5 w-[41%] max-md:ml-0 max-md:w-full">
    //       <form 
    //         className="flex flex-col self-stretch my-auto w-full text-xl font-extrabold text-white max-md:mt-10"
    //         onSubmit={(e) => e.preventDefault()}
    //       >
    //         <h1 className="self-center text-5xl tracking-tighter max-md:text-4xl">
    //           Join today.
    //         </h1>
            
    //         {authButtons.map(renderAuthButton)}
            
    //         <div className="flex gap-3.5 items-center mt-2 text-base whitespace-nowrap">
    //           <div className="shrink-0 self-stretch my-auto h-0 border border-white border-solid w-[158px]" />
    //           <div className="self-stretch">or</div>
    //           <div className="shrink-0 self-stretch my-auto h-0 border border-white border-solid w-[158px]" />
    //         </div>

    //         <p className="mt-3 text-sm">
    //           By signing up, you agree to the{" "}
    //           <a href="#terms" className="underline focus:ring-2 focus:ring-white">
    //             Terms of Service
    //           </a> and{" "}
    //           <a href="#privacy" className="underline focus:ring-2 focus:ring-white">
    //             Privacy Policy
    //           </a>, including{" "}
    //           <a href="#cookies" className="underline focus:ring-2 focus:ring-white">
    //             Cookie Use.
    //           </a>
    //         </p>
            
    //         <p className="self-start mt-24 max-md:mt-10">
    //           Already have an account?{" "}
    //         </p>
    //       </form>
    //     </div>
    //   </div>
    // </div>
  );
}

export default AuthLayout;