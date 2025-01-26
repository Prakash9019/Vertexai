import * as React from "react";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function ConfirmAccount() {
    const navigate = useNavigate();
    const [coder, setcoder] = useState(Array(6).fill(""));
    const inputRefs = useRef([]);

    const handleChange = (value, index) => {
        if (/^\d$/.test(value)) {
            const newcoder = [...coder];
            newcoder[index] = value;
            setcoder(newcoder);

            // Move focus to the next input
            if (index < 5) {
                inputRefs.current[index + 1].focus();
            }
        } else if (value === "") {
            const newcoder = [...coder];
            newcoder[index] = "";
            setcoder(newcoder);
        }
    };

    const handleKeyDown = (e, index) => {
        if (e.key === "Backspace") {
            const newcoder = [...coder];

            if (coder[index] === "") {
                if (index > 0) {
                    inputRefs.current[index - 1].focus();
                }
            } else {
                newcoder[index] = "";
                setcoder(newcoder);
            }
        }
    };

    const handleSubmit = async () => {
      const code = coder.join("");
      const token = localStorage.getItem("verificationToken");
    if (!token) {
        throw new Error("Verification token is missing. Please register again.");
    }
      // alert(`Entered coder: ${verificationcoder}`);
      try {

        const response = await fetch("https://vertxai-backend.vercel.app/api/auth/verify-new", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ token, code }),
        });
        const data = await response.json();
        if (!data.status) {
            throw new Error('Failed to register');
        }

      
        console.log(data);
      navigate('/set-newpassword');
    } catch (error) {
        console.error("Submission failed:", error);
    }
       
        
    };

    const iscoderComplete = coder.every((digit) => digit !== "");

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
                        Confirm your account
                        </div>
                        <div className="mt-1.5 text-base font-medium text-neutral-500">
                        Enter the OTP sent to the mail associated with your account to change your password.
                        </div>
                        <div className="flex flex-wrap gap-5 justify-between self-stretch mt-20 max-md:mt-10 max-sm:mb-0">
                            {coder.map((_, index) => (
                                <input
                                    key={index}
                                    type="text"
                                    maxLength="1"
                                    value={coder[index]}
                                    onChange={(e) => handleChange(e.target.value, index)}
                                    onKeyDown={(e) => handleKeyDown(e, index)}
                                    ref={(el) => (inputRefs.current[index] = el)}
                                    className="flex shrink-0 bg-black rounded-md border border-solid border-neutral-500 h-[62px] w-[62px] text-center text-white"
                                />
                            ))}
                        </div>
                        {/* <div className="self-start mt-6 text-base font-semibold text-neutral-500 max-md:ml-1">
                            Didn't receive an otp?{" "}
                            <span className="font-extrabold text-white">Resend</span>
                        </div> */}
                    </div>
                    <button
                        onClick={handleSubmit}
                        className={`px-12 py-3 mt-72 text-xl font-extrabold text-black whitespace-nowrap rounded-[100px] max-md:px-5 max-md:mt-10 max-md:mr-2.5 max-md:max-w-full ${iscoderComplete ? 'bg-white' : 'bg-neutral-500'}`}
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
}
