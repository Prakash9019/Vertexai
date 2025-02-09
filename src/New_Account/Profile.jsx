import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ProfilePictureUpload = () => {
    const navigate=useNavigate();
  const [profilePic, setProfilePic] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setProfilePic(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const openFilePicker = () => {
    document.getElementById("fileInput").click();
  };
    const handleSubmit1 =() =>{
      navigate('/username');
    }
    const handleSubmit = async () => {
      const token = localStorage.getItem("verificationToken");
      if (!token) {
          throw new Error("Session TimeOut..");
      }
        // alert(`Entered coder: ${verificationcoder}`);
        try {
  
          const response = await fetch("https://vertxai-backend.vercel.app/api/auth/profile", {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({ token, profilePic }),
          });
          const data = await response.json();
          if (!response.ok) {
              throw new Error('Failed to register');
          }
          console.log(data);
          console.log("heelllooo")
          navigate('/username');
      } catch (error) {
          console.error("Submission failed:", error);
      }
      // alert(`Entered Code: ${verificationCode}`);
    };

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
                Upload Profile Picture
                </div>
                <div className="mt-1.5 text-base font-medium text-neutral-500">
                Have a favourite picture? Upload it now.
                </div>
               



                <div className="relative flex justify-center items-center mt-6">
          <div
            className="h-36 w-36 bg-gray-600 rounded-full border-2 border-white flex items-center justify-center"
            onClick={openFilePicker}
          >
            {profilePic ? (
              <img
                src={profilePic}
                alt="Profile"
                className="h-full w-full rounded-full object-cover"
              />
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="16" x2="12" y2="12" />
                <line x1="12" y1="8" x2="12" y2="8" />
              </svg>
            )}
          </div>
          <input
            id="fileInput"
            type="file"
            accept="image/*"
            capture="user"
            className="hidden"
            onChange={handleFileChange}
          />
        </div>


        
    
              </div>
              <button
                onClick={handleSubmit}
                className={`px-12 py-3 mt-60 text-xl font-extrabold text-black whitespace-nowrap rounded-[100px] max-md:px-5 max-md:mt-10 max-md:mr-2.5 max-md:max-w-full bg-white`}
              >
                Upload the Profile Picture
              </button>
              <button
                onClick={handleSubmit1}
                className={`px-12 py-3 mt-6 text-xl font-extrabold text-black whitespace-nowrap rounded-[100px] max-md:px-5 max-md:mt-10 max-md:mr-2.5 max-md:max-w-full bg-white`}
              >
                Skip for now
              </button>
            </div>
          </div>
        </div>



  );
};

export default ProfilePictureUpload;
