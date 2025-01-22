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

  const handleSubmit = () => {
    navigate('/username');

  };

  return (
    // <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
    //   <div className="w-full max-w-md p-6 bg-black rounded-lg">
    //     {/* Logo */}
    //     <div className="flex justify-center mb-4">
    //       <svg
    //         xmlns="http://www.w3.org/2000/svg"
    //         className="h-10 w-10 text-white"
    //         viewBox="0 0 24 24"
    //         fill="none"
    //         stroke="currentColor"
    //         strokeWidth="2"
    //         strokeLinecap="round"
    //         strokeLinejoin="round"
    //       >
    //         <path d="M12 2l9 9-9 9-9-9 9-9z" />
    //       </svg>
    //     </div>

    //     {/* Title */}
    //     <h1 className="text-2xl font-bold text-center">Upload Profile Picture</h1>
    //     <p className="text-center text-gray-400 mt-2">
    //       Have a favourite picture? Upload it now.
    //     </p>

    //     {/* Profile Picture Placeholder */}
        // <div className="relative flex justify-center items-center mt-6">
        //   <div
        //     className="h-36 w-36 bg-gray-600 rounded-full border-2 border-white flex items-center justify-center"
        //     onClick={openFilePicker}
        //   >
        //     {profilePic ? (
        //       <img
        //         src={profilePic}
        //         alt="Profile"
        //         className="h-full w-full rounded-full object-cover"
        //       />
        //     ) : (
        //       <svg
        //         xmlns="http://www.w3.org/2000/svg"
        //         className="h-12 w-12 text-white"
        //         viewBox="0 0 24 24"
        //         fill="none"
        //         stroke="currentColor"
        //         strokeWidth="2"
        //         strokeLinecap="round"
        //         strokeLinejoin="round"
        //       >
        //         <circle cx="12" cy="12" r="10" />
        //         <line x1="12" y1="16" x2="12" y2="12" />
        //         <line x1="12" y1="8" x2="12" y2="8" />
        //       </svg>
        //     )}
        //   </div>
        //   <input
        //     id="fileInput"
        //     type="file"
        //     accept="image/*"
        //     capture="user"
        //     className="hidden"
        //     onChange={handleFileChange}
        //   />
        // </div>

    //     {/* Skip Button */}
    //     <button
    //       className="mt-10 w-full px-4 py-2 text-center text-black bg-gray-300 rounded-full hover:bg-gray-400"
    //       onClick={() => alert("Skipped for now")}
    //     >
    //       Skip for now
    //     </button>
    //   </div>
    // </div>


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
                Skip for now
              </button>
            </div>
          </div>
        </div>



  );
};

export default ProfilePictureUpload;
