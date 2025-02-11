import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import {
  GoogleOAuthProvider,
  GoogleLogin,
  googleLogout,
} from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
const CLIENT_ID = '673542565874-ssffgagnlcbstnstkkg4q8lg27dbo9l3.apps.googleusercontent.com';
export default function Login() {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState(
    localStorage.getItem("loginData")
      ? JSON.parse(localStorage.getItem("loginData"))
      : null
  );
  const [user, setUser] = useState({});
  useEffect(() => {
    if (loginData) {
      console.log(loginData.token);
      console.log("hello")
      const decodedUser = jwtDecode(loginData.token);
      console.log(decodedUser);
      setUser(decodedUser);
      console.log(user);
      localStorage.setItem('verificationToken', loginData.token); 
      navigate("/profile");
    }
  }, [loginData]);
  const handelLogin = async (googleData) => {
    try {
      const res = await fetch("http://localhost:5000/api/google-login", {
        method: "POST",
        body: JSON.stringify({ token: googleData }),
        credentials: "include", 
        headers: { "Content-Type": "application/json","Cross-Origin-Opener-Policy": "same-origin" },
      });
       console.log(res);  
       const data = await res.json();
       console.log(data);
       console.log(res.ok);
      if (!res.ok) {
        throw new Error("Failed to log in with Google");
      }
      setLoginData(data);
      
      localStorage.setItem("loginData", JSON.stringify(data));
      localStorage.setItem('verificationToken', loginData.token); 
      navigate("/profile");
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };
  const handelLogout = () => {
    setLoginData(null);
    localStorage.removeItem("loginData");
    googleLogout();
  };
  return (
   
             
     
              <GoogleLogin 
                onSuccess={(credentialResponse) => {
                  handelLogin(credentialResponse.credential);
                }}
                size="Large" 
                className="w-full max-w-[350px]"
                shape="pill"
                onError={() => {}}
              />
         
      
  );
}