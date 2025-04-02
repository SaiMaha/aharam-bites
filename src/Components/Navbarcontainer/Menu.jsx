import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../Context/Contextapi";

const Menu = () => {
  let { AuthUser, logout } = useContext(AuthContext);

  let Anonymous = () => {
    return (
      <ul className="flex gap-7 items-center">
        <li>
          <NavLink to="/login" className="hover:text-[#FFD700] transition duration-300">
            Log In
          </NavLink>
        </li>
        <li>
          <NavLink to="/register" className="hover:text-[#FFD700] transition duration-300">
            Sign Up
          </NavLink>
        </li>
      </ul>
    );
  };

  let Authenticated = () => {
    return (
      <ul className="flex gap-7 items-center">
        <li>
          <NavLink to="/profile" className="hover:text-[#FFD700] transition duration-300">
            My Recipes
          </NavLink>
        </li>
        <li>
          <NavLink to="/meal-planner" className="hover:text-[#FFD700] transition duration-300">
            Meal Planner
          </NavLink>
        </li>
        <li>
          <NavLink to="/grocery-list" className="hover:text-[#FFD700] transition duration-300">
            Grocery List
          </NavLink>
        </li>
        <li>
          <NavLink to="/profile">
            <img
              src="https://img.icons8.com/ios-filled/50/user-male-circle.png"
              className="h-[40px] w-[40px] rounded-full"
              alt="User Avatar"
            />
          </NavLink>
        </li>
        <li className="text-amber-200 cursor-pointer" onClick={logout}>
          Logout
        </li>
      </ul>
    );
  };

  return (
    <nav>
      <ul className="flex gap-10 pr-10 p-4 justify-around items-center text-lg font-medium text-[#E0E0E0]">
        <li>
          <NavLink to="/" className="hover:text-[#FFD700] transition duration-300">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className="hover:text-[#FFD700] transition duration-300">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className="hover:text-[#FFD700] transition duration-300">
            Contact
          </NavLink>
        </li>
        {AuthUser ? <Authenticated /> : <Anonymous />}
      </ul>
    </nav>
  );
};

export default Menu;
