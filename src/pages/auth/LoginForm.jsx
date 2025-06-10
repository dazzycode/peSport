
import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [showForgotModal, setShowForgotModal] = useState(false);
  const [forgotInput, setForgotInput] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleForgotChange = (e) => {
    setForgotInput(e.target.value);
  };

  const handleForgotSubmit = () => {
    if (forgotInput.trim() === "") {
      alert("Please enter your email or phone number.");
      return;
    }
    alert(`Reset instructions sent to: ${forgotInput}`);
    setShowForgotModal(false);
    setForgotInput("");
  };

  const handleLogin = () => {
    // Fake validation
    if (formData.email !== "demo@email.com" || formData.password !== "password123") {
      setShowErrorModal(true);
    } else {
      alert("Login successful!");
    }
  };

  return (
    <div className="min-h-screen bg-[#1A1A1A] flex items-center justify-center px-4 py-10 relative">
      <div
        className="rounded-xl overflow-hidden w-full max-w-5xl shadow-xl flex flex-col md:flex-row"
        style={{
          backgroundImage: "url('/foundationabtbg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "100%",
        }}
      >
        {/* Left Side */}
        <div className="md:w-1/2 md:h-1/2 w-full">
          <img src="loginimg.png" alt="Arcade Login" className="w-full h-full object-cover" />
        </div>

        {/* Right Side */}
        <div className="md:w-1/2 w-full px-8 py-10 text-white">
          <h2 className="text-3xl font-bold font-mono mb-2 tracking-widest">WELCOME BACK</h2>
          <p className="text-sm text-gray-400 mb-8">
            Enter the gaming universe and take your journey to the next level.
          </p>

          {/* Email */}
          <div className="mb-6">
            <label className="block text-sm mb-1">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your Email Address"
              className={`w-full p-3 rounded-full outline-none ${
                formData.email
                  ? "border border-red-500 text-white bg-[#1A1A1A]"
                  : "bg-[#1A1A1A] text-white"
              }`}
            />
          </div>

          {/* Password */}
          <div className="mb-6 relative">
            <label className="block text-sm mb-1">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your Password"
              className={`w-full p-3 pr-12 rounded-full outline-none ${
                formData.password
                  ? "border border-red-500 text-white bg-[#1A1A1A]"
                  : "bg-[#1A1A1A] text-gray-400"
              }`}
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-9 cursor-pointer text-gray-400 hover:text-white"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </span>
            <div className="text-right mt-2">
              <button
                onClick={() => setShowForgotModal(true)}
                className="text-red-400 text-sm hover:underline focus:outline-none"
              >
                Reset Password?
              </button>
            </div>
          </div>

          {/* Login Button */}
          <button
            onClick={handleLogin}
            className="w-full bg-red-600 hover:bg-red-700 transition-colors duration-200 text-white font-semibold py-3 rounded-full"
          >
            Log In
          </button>

          {/* Divider */}
          <div className="text-center my-6 text-gray-500 text-sm">or</div>

          {/* Google Button */}
          <button className="w-full bg-white text-black font-semibold py-3 rounded-full flex items-center justify-center gap-2 hover:bg-gray-100 transition">
            <img src="https://img.icons8.com/color/24/google-logo.png" alt="Google" />
            Login with Google
          </button>

          {/* Footer */}
          <p className="text-center text-sm mt-6 text-gray-400">
            Don’t have an account?{" "}
            <Link to="/Signup" className="text-red-500 cursor-pointer">
              Create your account
            </Link>
          </p>
        </div>
      </div>

      {/* Error Modal */}
      {showErrorModal && (
        <div
          onClick={() => setShowErrorModal(false)}
          className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center z-50 transition-opacity duration-300"
        >
          {/* Modal Content */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-[#0F0F0F] text-white rounded-2xl px-8 py-6 max-w-sm w-full text-center shadow-xl
                       transform transition-transform duration-300 ease-in-out scale-100 opacity-100"
          >
            <div className="text-purple-500 text-4xl mb-2">⚠️</div>
            <h2 className="text-xl font-semibold mb-1">Sorry you entered the wrong password</h2>
            <p className="text-sm text-gray-400 mb-6">
              Learn, grow, adapt, and re-enter. Simpler unlock mechanisms reduce login stress.
            </p>
            <button
              onClick={() => setShowErrorModal(false)}
              className="bg-red-600 hover:bg-red-700 text-white w-full py-2 rounded-full mb-3 transition"
            >
              Try again
            </button>
            <button
              onClick={() => {
                setShowErrorModal(false);
                setShowForgotModal(true);
              }}
              className="bg-white hover:bg-gray-200 text-black w-full py-2 rounded-full transition"
            >
              Reset Password
            </button>
          </div>
        </div>
      )}

      {/* Reset Password Modal */}
      {showForgotModal && (
        <div
          onClick={() => setShowForgotModal(false)}
          className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm flex items-center justify-center z-50"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-[#121212] rounded-2xl px-8 py-6 max-w-sm w-full text-white shadow-xl"
          >
            <h3 className="text-xl font-semibold mb-4 text-center">Reset Password</h3>
            <p className="text-gray-400 mb-4 text-center">
              Enter your email address or phone number to reset your password.
            </p>
            <input
              type="text"
              value={forgotInput}
              onChange={handleForgotChange}
              placeholder="Email or Phone Number"
              className="w-full p-3 rounded-full bg-[#1A1A1A] border border-gray-600 focus:border-red-600 outline-none mb-6 text-white"
            />
            <button
              onClick={handleForgotSubmit}
              className="w-full bg-red-600 hover:bg-red-700 transition-colors duration-200 text-white font-semibold py-3 rounded-full mb-3"
            >
              Reset Password
            </button>
            <button
              onClick={() => setShowForgotModal(false)}
              className="w-full bg-gray-700 hover:bg-gray-600 transition-colors duration-200 text-white font-semibold py-3 rounded-full"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginForm;
