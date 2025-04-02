import React from "react";
import NavBar from "../NavbarContainer/NavBar";
import { Outlet, useLocation } from "react-router-dom";
import Landing from "../pages/Landing";
import { useContext } from "react";
import { AuthContext } from "../Context/Contextapi";

const Layout = () => {
  const location = useLocation();
  const { AuthUser } = useContext(AuthContext); // Check if user is authenticated

  // Check if the current page is the landing page
  const isLandingPage = location.pathname === "/";

  return (
    <div>
      {/* Navigation Bar */}
      <NavBar />

      {/* If on the Landing Page and User is not Authenticated, Show Landing Page */}
      {isLandingPage && !AuthUser ? <Landing /> : <Outlet />}
    </div>
  );
};

export default Layout;
