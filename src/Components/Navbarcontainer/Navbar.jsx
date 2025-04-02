import React from "react";
import { Link } from "react-router-dom";
import { FaUtensils } from "react-icons/fa";

const NavBar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full h-16 backdrop-blur-lg bg-white/80 border-b border-gray-200 shadow-md z-50">
      <div className="h-full max-w-7xl mx-auto px-6 flex justify-between items-center text-gray-800 text-lg font-medium">
        <div className="flex items-center text-2xl font-bold">
          <FaUtensils className="text-red-500 mr-2" />
          <Link to="/" className="hover:text-red-500">Aharam Bites</Link>
        </div>
        <div className="space-x-6">
          <Link to="/" className="hover:text-red-500">Home</Link>
          <Link to="/signup" className="hover:text-red-500">Sign Up</Link>
          <Link to="/login" className="hover:text-red-500">Log In</Link>
          <Link to="/about" className="hover:text-red-500">About</Link>
          <Link to="/contact" className="hover:text-red-500">Contact Us</Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
