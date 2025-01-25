import React from "react";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("verificationToken");
  const location = useLocation();

  if (!token) {
    // Redirect to signup if token is missing
    return <Navigate to="/signup" replace state={{ from: location }} />;
  }

  // Allow access to protected route if token exists
  return children;
};

export default ProtectedRoute;
