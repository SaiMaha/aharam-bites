import React from "react";
import { NavLink } from "react-router-dom";

const Landing = () => {
  return (
    <section className="w-full h-screen flex items-center justify-center relative text-white text-center">
      
     
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1558909552-8fcf7c94b575?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')", 
          filter: "brightness(0.7)",
        }}
      ></div>

      
      <article className="relative z-10 max-w-3xl">
        <h1 className="text-6xl font-extrabold">Aharam Bites</h1>
        <p className="mt-4 text-2xl">
          Find the perfect recipe based on your ingredients.
        </p>
        <p className="mt-2 text-lg">
          Plan meals effortlessly with our automatic grocery list feature.
        </p>

        <div className="mt-6 flex justify-center gap-4">
          <NavLink to="/register">
            <button className="px-6 py-3 bg-[#FFD700] text-black font-semibold rounded-full shadow-md hover:bg-black hover:text-[#FFD700] transition">
              Get Started
            </button>
          </NavLink>
          <NavLink to="/about">
            <button className="px-6 py-3  bg-[#FFD700] text-black font-semibold rounded-full shadow-md hover:bg-black hover:text-[#FFD700] transition">
              Learn More
            </button>
          </NavLink>
        </div>
      </article>
      
    </section>
  );
};

export default Landing;
