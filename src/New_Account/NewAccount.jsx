import * as React from "react";
import { useNavigate } from "react-router-dom";

export function CreateAccountForm() {
  const navigate = useNavigate();

  const handleClick=()=>{
          navigate("/username");
  }
  const formFields = [
    { label: "Name", placeholder: "Name" },
    { 
      label: "Email", 
      placeholder: "Email",
      hasInfo: true,
      info: "Business domain only*"
    },
    {
      label: "Date of birth",
      placeholder: "DD/MM/YYYY",
      hasInfo: true,
      info: "This will not be shown publicly. Confirm your own age, even if this account is for a business, a pet, or something else."
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex flex-col text-xl font-semibold text-white bg-black min-h-screen">
      <div className="flex flex-col justify-center items-center px-20 py-10 w-full bg-white bg-opacity-10 max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col justify-center items-center px-20 py-9 max-w-full bg-black rounded-3xl w-[875px] max-md:px-5">
          <form 
            onSubmit={handleSubmit} 
            className="flex flex-col max-w-full w-[485px]"
            noValidate
          >
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/f1c512861316b27a0f461c6ab1c0a3a58abeef893050475df9aa2159b8643f22?placeholderIfAbsent=true&apiKey=42bb954c825745999302100cb42c8fd0"
              alt="Company logo"
              className="object-contain self-center aspect-square w-[60px]"
            />
            <h1 className="self-center mt-7 text-4xl font-extrabold">
              Create your account
            </h1>
            
            {formFields.map((field, index) => (
              <div key={field.label} className="flex flex-col w-full">
                <label 
                  className="sr-only" 
                  htmlFor={`${field.label.toLowerCase()}-input`}
                >
                  {field.label}
                </label>
                <input
                  type={field.label === "Date of birth" ? "date" : "text"}
                  id={`${field.label.toLowerCase()}-input`}
                  name={field.label.toLowerCase()}
                  placeholder={field.placeholder}
                  className="px-4 py-6 mt-8 whitespace-nowrap bg-black rounded-md border border-solid border-neutral-500 text-neutral-500 max-md:pr-5 max-md:max-w-full"
                  aria-label={field.label}
                  required
                />
                {field.hasInfo && (
                  <div className="text-xs mt-2 max-md:ml-1" aria-live="polite">
                    {field.info}
                  </div>
                )}
              </div>
            ))}

            <button 
              type="submit"
              className="px-12 py-3 mt-14 font-extrabold text-black whitespace-nowrap bg-neutral-500 rounded-[100px] hover:bg-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-300 max-md:px-5 max-md:mt-10 max-md:max-w-full"
              aria-label="Create account"
              onClick={()=>{ handleClick()}}
            >
              Next
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}