import { sendPasswordResetEmail } from 'firebase/auth';
import React, { useState } from 'react';
import { __AUTH } from '../Backend/Firebase';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

import {  FaEnvelope } from "react-icons/fa";

const ForgotPassword = () => {
  let [email, setEmail] = useState("");
  let navigate = useNavigate();

  let handleChange = (e) => {
    setEmail(e.target.value);
  }

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await sendPasswordResetEmail(__AUTH, email);
      toast.success(`A reset password link has been sent to ${email}`);
      navigate("/login");
    } catch (err) {
      toast.error(err.message);
    }
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1606787366850-de6330128bfc?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}
    >
      <div className="bg-white bg-opacity-80 p-8 rounded-2xl shadow-lg backdrop-blur-md w-96">
        <h2 className="text-2xl font-semibold text-center text-black  mb-4 border-b pb-2">
          RESET PASSWORD
        </h2>
        <div className="space-y-4">
          <div className="flex items-center bg-white p-2 rounded-full">
            <FaEnvelope className="text-black mx-2" />
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              placeholder="Enter your email address"
              className="bg-transparent focus:outline-none flex-1 text-black "
            />
          </div>
          <button
            className="w-full bg-white text-black  py-2 rounded-full font-semibold mt-4 hover:bg-[#FF6F00] border-2 border-[#FF6F00] hover:border-white"
            onClick={handleSubmit}
          >
            Send Reset Link
          </button>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
