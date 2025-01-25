import React, { createContext, useState, useEffect, useContext } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
   const [email,setEmail] =useState("");
  useEffect(() => {
    const token = localStorage.getItem("jwtToken");
    if (token) {
      try {
        const decodedToken = JSON.parse(atob(token.split(".")[1])); // Decode JWT payload
        setUser(decodedToken.user);
      } catch (error) {
        localStorage.removeItem("jwtToken"); // Clear invalid token
      }
    }
  }, []);

  const login = (token) => {
    localStorage.setItem("jwtToken", token);
    const decodedToken = JSON.parse(atob(token.split(".")[1]));
    setUser(decodedToken.user);
  };

  const logout = () => {
    localStorage.removeItem("jwtToken");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout,email,setEmail  }}>
      {children}
    </AuthContext.Provider>
  );
};

