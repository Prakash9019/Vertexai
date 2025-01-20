import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const FloatingLabelInput = ({ id, label, type = 'text', maxLength = 50, validateEmail = false, className = '' }) => {
  const [value, setValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [error, setError] = useState('');

  const validateInput = (inputValue) => {
    if (validateEmail) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(inputValue)) {
        setError('Please enter a valid email address');
      } else {
        setError('');
      }
    } else if (inputValue.length === 0) {
      setError(`${label} is required`);
    } else {
      setError('');
    }
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
        // placeholder={isFocused || value ? '' : label}
        onChange={(e) => setValue(e.target.value)}
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

  const handleClick = () => {
    navigate('/username');
  };

  const formFields = [
    { label: 'Name', placeholder: 'Name' },
    {
      label: 'Email',
      placeholder: 'Email',
      hasInfo: true,
      info: 'Business domain only*',
      validateEmail: true,
    },
    {
      label: 'Date of birth',
      placeholder: 'DD/MM/YYYY',
      hasInfo: true,
      info: 'This will not be shown publicly. Confirm your own age, even if this account is for a business, a pet, or something else.',
    },
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

            {formFields.map((field) => (
              <div key={field.label} className="flex flex-col w-full mt-4">
                {field.label === 'Date of birth' ? <h5 className='p-2 font-light'> {field.label}</h5> : " "}
                <FloatingLabelInput
                  id={`${field.label.toLowerCase()}-input`}
                  label={field.label === 'Date of birth' ? " ": field.label}
                  type={field.label === 'Date of birth' ? 'date' : 'text'}
                  validateEmail={field.validateEmail || false}
                  className="w-full px-4 py-6 bg-black rounded-md border border-solid border-neutral-500 text-white"
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
              className="px-12 py-3 mt-14 font-extrabold text-black whitespace-nowrap bg-neutral-500 rounded-[100px] hover:bg-white focus:outline-none focus:ring-2 focus:ring-neutral-300 max-md:px-5 max-md:mt-10 max-md:max-w-full"
              aria-label="Create account"
              onClick={() => {
                handleClick();
              }}
            >
              Next
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
