import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { __AUTH } from "../Backend/Firebase";
import toast from "react-hot-toast";

export const AuthContext = createContext(null); // Context Creation

const ContextApi = ({ children }) => {
  const [AuthUser, setAuthUser] = useState(null);

  // Logout Function
  const logout = async () => {
    try {
      await signOut(__AUTH);
      toast.success("You have successfully logged out.");
      localStorage.removeItem("TOKEN");
      setAuthUser(null);
      setTimeout(() => {
        window.location.assign("/login"); // Redirect to login page
      }, 2000);
    } catch (error) {
      toast.error("Error logging out. Try again!");
      console.error(error);
    }
  };

  // Track Authentication State
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(__AUTH, (user) => {
      if (user?.emailVerified) {
        setAuthUser(user);
        localStorage.setItem("TOKEN", user.accessToken);
      } else {
        setAuthUser(null);
      }
    });

    return () => unsubscribe(); // Cleanup on unmount
  }, []);

  return (
    <AuthContext.Provider value={{ AuthUser, setAuthUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default ContextApi;
