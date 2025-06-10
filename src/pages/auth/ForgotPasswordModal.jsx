
import React, { useState, useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";

const ForgotPasswordModal = ({ onClose }) => {
  const [method, setMethod] = useState("email");
  const [isVisible, setIsVisible] = useState(false);

  // Trigger fade-in on mount
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Handle close with fade-out animation
  const handleClose = () => {
    setIsVisible(false);
    // Wait for animation to finish before calling onClose
    setTimeout(() => {
      onClose();
    }, 300);
  };

  return (
    <div
      onClick={handleClose}
      className={`fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`bg-[#121212] p-6 rounded-xl w-[90%] max-w-md text-white relative
          transform transition-transform duration-300 ${
            isVisible ? "translate-y-0 opacity-100" : "-translate-y-6 opacity-0"
          }`}
      >
        <button onClick={handleClose} className="absolute top-4 left-4 text-white">
          <ArrowLeft />
        </button>

        <div className="flex flex-col items-center mb-4 mt-6">
          <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mb-2">
            <i className="fas fa-lock text-white"></i>
          </div>
          <h3 className="text-lg font-semibold">Forgot Password?</h3>
          <p className="text-sm text-gray-400 text-center">
            Enter the email address associated with your account
          </p>
        </div>

        <div className="flex justify-center gap-4 mb-4">
          <button
            className={`py-1 px-3 rounded-full text-sm ${
              method === "email" ? "bg-purple-600 text-white" : "bg-gray-800"
            }`}
            onClick={() => setMethod("email")}
          >
            Email address
          </button>
          <button
            className={`py-1 px-3 rounded-full text-sm ${
              method === "phone" ? "bg-purple-600 text-white" : "bg-gray-800"
            }`}
            onClick={() => setMethod("phone")}
          >
            Phone number
          </button>
        </div>

        <input
          type={method === "email" ? "email" : "tel"}
          placeholder={method === "email" ? "Email address" : "Phone number"}
          className="w-full p-2 bg-black border border-gray-700 rounded-full text-white mb-4"
        />

        <button className="w-full py-2 bg-red-600 hover:bg-red-700 rounded-full font-semibold">
          Continue
        </button>
      </div>
    </div>
  );
};

export default ForgotPasswordModal;
