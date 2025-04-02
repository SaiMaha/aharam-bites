import React from "react";
import { NavLink } from "react-router-dom";

const Landing = () => {
  return (
    <section className="w-full h-screen flex items-center justify-center relative text-white text-center">
      
      {/* Background Image */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: "url('/landing-bg.jpg')", // Replace with your actual image path
          filter: "brightness(0.7)",
        }}
      ></div>

      {/* Foreground Content */}
      <article className="relative z-10 max-w-3xl">
        <h1 className="text-6xl font-extrabold">Aharam Bites</h1>
        <p className="mt-4 text-2xl">
          Find the **perfect** recipe based on your ingredients.
        </p>
        <p className="mt-2 text-lg">
          Plan meals effortlessly with our **automatic grocery list** feature.
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
