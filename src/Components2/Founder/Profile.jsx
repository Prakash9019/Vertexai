import { Home, BadgeCheck, MoreHorizontal, Calendar, Zap, User } from "lucide-react";
import { useEffect, useState } from "react";

export default function FounderProfile() {
  const [activeButton, setActiveButton] = useState('Posts');
  const [errorMessage, setErrorMessage] = useState("");
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState(null);
  const [pic,setPic ] = useState(null);
 
  useEffect(() => {
    const storedEmail = localStorage.getItem("email");
    setEmail(storedEmail);

    if (!storedEmail) return;
    
    const fetchUser = async () => {
      try {
        const response = await fetch("https://vertxai-backend.vercel.app/api/auth/get-user", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: storedEmail }), // Send the correct email
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || "An unknown error occurred");
        }

        setUser(data);
        // console.log(user);
        if(data.profilePic){
          try {
            const response = await fetch("https://vertxai-backend.vercel.app/api/auth/get-profile", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ email }),
            });
    
            const d1 = await response.json();
            if (!response.ok) {
              throw new Error(data.message || "An unknown error occurred");
            }
            setPic(d1.user);
          } catch (error) {
            setErrorMessage(error.message);
          }
        }
        // localStorage.setItem("email", data.email); // Ensure email is stored properly
      } catch (error) {
        console.error("Submission failed:", error.message);
        setErrorMessage(error.message);
      }
    };

    fetchUser();
  }, [email]); // Depend on `email`, so it runs when `email` changes

  const handleClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <div className="min-h-screen bg-black text-white font-['Manrope']">
      <main className="fixed left-[20%] w-[47.25%] top-16 pt-5 bottom-0 overflow-y-auto border-r-2 border-zinc-800 z-30 hide-scrollbar">
        <div className="max-w-4xl mx-auto">
          <div className="relative mb-8">
            <div className="h-48 bg-gradient-to-b from-gray-800 to-black rounded-xl"></div>
            <div className="absolute -bottom-16 left-7">
             {pic ? <img src={pic.profilePic} alt="Profile" className="w-32 h-32 rounded-full bg-gray-700 border-4 border-black" /> : <User className="w-32 h-32 p-6 rounded-full bg-gray-700 border-4 border-black" /> }
            </div>
            <div className="absolute top-4 right-4">
              <button className="px-4 py-1.5 rounded-full border border-white/20 hover:bg-white/10 transition">
                Update Profile
              </button>
            </div>
          </div>

          <div className="mt-20">
            <div className="flex items-start justify-between mb-4 p-4">
              <div>
                <h1 className="text-2xl font-bold mb-1">{user ? user.username : "Username"}</h1>
                <p className="text-gray-400">{user?.email || "No Email Found"}</p>
              </div>
              <button className="px-4 py-1.5 rounded-full border border-white/20 hover:bg-white/10 transition flex items-center gap-2">
                <BadgeCheck className="w-4 h-4" />
                GET VERIFIED
              </button>
            </div>

            <div className="flex items-center gap-6 text-gray-400 mb-6 p-4">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>Joined Month YYYY</span>
              </div>
              <div className="flex items-center gap-4">
                <span>
                  <strong className="text-white">0</strong> Following
                </span>
                <span>
                  <strong className="text-white">0</strong> Followers
                </span>
              </div>
            </div>

            <div className="border-4 border-white/10">
              <div className="flex gap-72">
                <button
                  className={`px-8 py-4 text-sm font-medium ${activeButton === 'Posts' ? 'border-b-2 border-white' : ''}`}
                  onClick={() => handleClick('Posts')}
                >
                  Posts
                </button>
                <button
                  className={`px-4 py-4 text-sm font-medium ${activeButton === 'Articles' ? 'border-b-2 border-white' : ''}`}
                  onClick={() => handleClick('Articles')}
                >
                  Articles
                </button>
                <button
                  className={`px-4 py-4 text-sm font-medium ${activeButton === 'Media' ? 'border-b-2 border-white' : ''}`}
                  onClick={() => handleClick('Media')}
                >
                  Media
                </button>
              </div>
            </div>

            {/* {errorMessage && <p className="text-red-500 mt-4">{errorMessage}</p>} */}
          </div>
        </div>
      </main>
    </div>
  );
}
