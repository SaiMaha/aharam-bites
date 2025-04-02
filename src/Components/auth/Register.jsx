import React, { useState } from "react";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    createPassword: "",
    confirmPassword: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1606787366850-de6330128bfc?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}
    >
      <div className="bg-white bg-opacity-20 p-8 rounded-2xl shadow-lg backdrop-blur-md w-96">
        <h2 className="text-xl font-semibold text-center text-black mb-4 border-b pb-2">
          CREATE YOUR ACCOUNT
        </h2>
        <div className="space-y-4">
          <div className="flex items-center bg-white p-2 rounded-full">
            <FaUser className="text-black mx-2" />
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Username"
              className="bg-transparent focus:outline-none flex-1"
            />
          </div>
          <div className="flex items-center bg-white p-2 rounded-full">
            <FaEnvelope className="text-black mx-2" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="bg-transparent focus:outline-none flex-1"
            />
          </div>
          <div className="flex items-center bg-white p-2 rounded-full relative">
            <FaLock className="text-black mx-2" />
            <input
              type={showPassword ? "text" : "password"}
              name="createPassword"
              value={formData.createPassword}
              onChange={handleChange}
              placeholder="Create Password"
              className="bg-transparent focus:outline-none flex-1"
            />
            <button
              type="button"
              className="text-black mx-2"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? <AiFillEye />: <AiFillEyeInvisible />}
            </button>
          </div>
          <div className="flex items-center bg-white p-2 rounded-full relative">
            <FaLock className="text-black mx-2" />
            <input
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm Password"
              className="bg-transparent focus:outline-none flex-1"
            />
            <button
              type="button"
              className="text-black mx-2"
              onClick={() => setShowConfirmPassword((prev) => !prev)}
            >
              {showConfirmPassword ? <AiFillEye />: <AiFillEyeInvisible /> }
            </button>
          </div>
          <button className="w-full bg-black text-white py-2 rounded-full font-semibold">
            SIGN UP
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
