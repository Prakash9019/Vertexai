import * as React from "react";
import { useState, useRef } from "react";import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function Setpassword() {
  const [code, setCode] = useState(Array(6).fill(""));
  const inputRefs = useRef([]);
  const [isFocused, setIsFocused] = useState(false);
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };
  const handleChange = (value, index) => {
    if (/^\d$/.test(value)) {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);

      // Move focus to the next input
      if (index < 5) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleSubmit = () => {
    const verificationCode = code.join("");
    alert(`Entered Code: ${verificationCode}`);
  };

  const isCodeComplete = code.every((digit) => digit !== "");

  return (
    <div className="flex flex-col justify-center items-center px-20 py-10 w-full bg-white bg-opacity-10 max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col justify-center items-center px-20 py-9 max-w-full bg-black rounded-3xl w-[875px] max-md:px-5">
        <div className="flex flex-col max-w-full w-[499px]">
          <div className="flex flex-col items-center pl-4 w-full max-md:max-w-full">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/6be73a9e8e4ac3494f3a29eda1ee0af912ef46612af53b70da8be8601c370c22?placeholderIfAbsent=true&apiKey=42bb954c825745999302100cb42c8fd0"
              className="object-contain aspect-square w-[60px]"
            />
            <div className="mt-7 text-4xl font-extrabold text-white">
              Set password
            </div>
            <div className="mt-1.5 text-base font-medium text-neutral-500">
              Make sure it’s 8 characters or more.
            </div>
            {/* <div className="flex flex-wrap gap-5 justify-between self-stretch mt-20 max-md:mt-10 max-sm:mb-0">
              {code.map((_, index) => (
                <input
                  key={index}
                  type="text"
                  maxLength="1"
                  value={code[index]}
                  onChange={(e) => handleChange(e.target.value, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  ref={(el) => (inputRefs.current[index] = el)}
                  className="flex shrink-0 bg-black rounded-md border border-solid border-neutral-500 h-[62px] w-[62px] text-center text-white"
                />
              ))}
            </div> */}

            <div className="relative w-full">
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
                  className="flex-grow bg-transparent text-white border-none"
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

            {/* <p className="mt-3 text-sm w-1/2 font-normal	tracking-normal ">
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
            </p> */}
          </div>
          <p className="mt-20 text-sm font-normal	tracking-normal text-neutral-500">
            By signing up, you agree to the{" "}
            <a className="text-white underline">Terms of Service </a> and{" "}
            <a className="text-white underline">Privacy Policy,</a> including{" "}
            <a className="text-white underline">Cookie Use.</a> X may use your
            contact information, including your email address and phone number
            for purposes outlined in our Privacy Policy, such as keeping your
            account secure and personalising our services, including ads.{" "}
            <a className="text-white underline">Learn more</a>. Others will be
            able to find you by email address or phone number, when provided,
            unless you choose otherwise{" "}
            <a className="text-white underline">here.</a>
          </p>
          <button
            onClick={handleSubmit}
            className={`px-12 py-3 mt-60 text-xl font-extrabold text-black whitespace-nowrap rounded-[100px] max-md:px-5 max-md:mt-10 max-md:mr-2.5 max-md:max-w-full ${
              isCodeComplete ? "bg-white" : "bg-neutral-500"
            }`}
          >
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
}
