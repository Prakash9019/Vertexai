
import React, { useEffect, useState } from "react";
import axios from "axios";
export default function Google() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5000/auth/user", { withCredentials: true })
      .then((response) => setUser(response.data))
      .catch(() => setUser(null));
  }, []);

  const handleLogout = async () => {
    await axios.get("http://localhost:5000/auth/logout", { withCredentials: true });
    setUser(null);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1>Welcome to Google OAuth App</h1>
      {user ? (
        <div>
          <h2>Hello, {user.name}</h2>
          <img src={user.profilePicture} alt="profile" width="100" />
          <p>Email: {user.email}</p>
          <button onClick={handleLogout} className="p-2 bg-red-500 text-white">
            Logout
          </button>
        </div>
      ) : (
        <a
          href="http://localhost:5000/auth/google"
          className="p-2 bg-blue-500 text-white"
        >
          Login with Google
        </a>
      )}
    </div>
  );
};