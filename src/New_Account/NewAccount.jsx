import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const FloatingLabelInput = ({ id, label, type = 'text', maxLength = 50, validateEmail = false, value, onChange, onValidate, className = '' }) => {
    const [isFocused, setIsFocused] = useState(false);
    const [error, setError] = useState('');

    const validateInput = (inputValue) => {
        let valid = true;
        
        if (type === 'date') {
            // Validate age for DOB field
            const selectedDate = new Date(inputValue);
            const currentDate = new Date();
            let age = currentDate.getFullYear() - selectedDate.getFullYear();
            const monthDifference = currentDate.getMonth() - selectedDate.getMonth();

            // Adjust age if the birthday hasn't occurred yet this year
            if (monthDifference < 0 || (monthDifference === 0 && currentDate.getDate() < selectedDate.getDate())) {
                age--;
            }

            if (age < 16) {
                setError('Age must be 16 or older');
                valid = false;
            } else {
                setError('');
            }
        } else if (validateEmail) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(inputValue)) {
                setError('Please enter a valid email address');
                valid = false;
            } else {
                setError('');
            }
        } else if (inputValue.length === 0) {
            setError(`${label} is required`);
            valid = false;
        } else {
            setError('');
        }
        onValidate(valid);
    };

    useEffect(() => {
        if (value && !isFocused) {
            validateInput(value);
        }
    }, [value, isFocused]);

    return (
        <div className="relative w-full">
            <label
                htmlFor={id}
                className={`absolute text-xl p-3 transition-all duration-200 ${
                    isFocused || value
                        ? 'top-[-6px] text-xs text-blue-500'
                        : 'top-3 text-gray-500'
                }`}
            >
                {label}
            </label>
            <input
                id={id}
                type={type}
                value={value}
                maxLength={maxLength}
                className={`${className} ${error ? 'border-red-500' : ''}`}
                onChange={(e) => onChange(e.target.value)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => {
                    setIsFocused(false);
                    validateInput(value);
                }}
            />
            {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
        </div>
    );
};

export function CreateAccountForm() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [dob, setDob] = useState('');
    const [isEmailValid, setIsEmailValid] = useState(false);
    const [isNameValid, setIsNameValid] = useState(false);
    const [isDobValid, setIsDobValid] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [isFilled, setIsFilled] = useState(false);

    useEffect(() => {
        setIsFilled(isEmailValid && isNameValid && isDobValid);
    }, [isEmailValid, isNameValid, isDobValid]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch("https://vertxai-backend.vercel.app/api/auth/register", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, dob }),
            });
            const data = await response.json();
            if (!response.ok) {
              const errorMessage = data.message || 'An unknown error occurred'; // Fallback message
               throw new Error(errorMessage); // Throw dynamic erro   
          }
            localStorage.setItem('verificationToken', data.token); 
            // localStorage.setItem('email', data.email);
            console.log(data);
            navigate("/verify");
        } catch (error) {
            console.error("Submission failed:", error);
            setErrorMessage(error.message);
        }
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

            <div key="name" className="flex flex-col w-full mt-4">
            <FloatingLabelInput
                  id={`name`}  label="Name"  type='text' validateEmail={ false}
                  value={name}
                  onChange={setName}
                  onValidate={setIsNameValid}
                  className="w-full px-4 py-6 bg-black rounded-md border border-solid border-neutral-500 text-white"
                />
            </div>
            <div key="email" className="flex flex-col w-full mt-4">
            <FloatingLabelInput
                  id={`email`}  label="Email"  type='email' validateEmail={ true}
                  value={email}
                  onChange={setEmail}
                  onValidate={setIsEmailValid}
                  className="w-full px-4 py-6 bg-black rounded-md border border-solid border-neutral-500 text-white"
                />
            </div>

            <div key="Date of birth" className="flex flex-col w-full mt-4">
            <h5 className='p-2 font-light'> Date of birth</h5>
            <FloatingLabelInput
                  id={`Date of birth`}  label=""  type='date' validateEmail={ false}
                  value={dob}
                  onChange={setDob}
                  onValidate={setIsDobValid}
                  className="w-full px-4 py-6 bg-black rounded-md border border-solid border-neutral-500 text-white"
                />
                <div className="text-xs mt-2 max-md:ml-1" aria-live="polite">
                This will not be shown publicly. Confirm your own age, even if this account is for a business, a pet, or something else.
                  </div>
            </div>
            {errorMessage && (
              <p className="text-red-500 mt-4">{errorMessage}</p>
            )}
 

            <button type="submit" className={`px-12 py-3 mt-4 font-extrabold text-black whitespace-nowrap rounded-[100px] focus:outline-none focus:ring-2 focus:ring-neutral-300 ${isFilled ? 'bg-white' : 'bg-neutral-500'}`} disabled={!isFilled} >
              Next
            </button>
          </form>
        </div>
      </div>
    </div>
    // </div>
    // </div>
  );
}
