
import React from "react";
import { Link } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const RegisterTeam = () => {
  return (
    
        <div className="min-h-screen bg-[#1A1A1A] flex items-center justify-center px-4 py-10">

    <div className="min-h-screen mx-auto justify-center items-center text-white p-8 md:p-10 rounded-xl w-full max-w-3xl"
 style={{
    backgroundImage: "url('/foundationabtbg.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "100%",
  }}

    >
        <h2 className="text-2xl font-bold mb-2 uppercase">Register</h2>
        <p className="text-sm text-gray-400 mb-8">Fill out the form to register your team</p>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Personal/Team Info */}
          <div>
            <h3 className="text-sm text-gray-300 mb-2 font-semibold">Personal/Team Info</h3>
            <input
              type="text"
              placeholder="Full Name"
              className="w-full bg-gray-800 p-3 rounded-md mb-4 text-sm"
            />
            <input
              type="text"
              placeholder="Username"
              className="w-full bg-gray-800 p-3 rounded-md mb-4 text-sm"
            />
            <input
              type="text"
              placeholder="Game ID"
              className="w-full bg-gray-800 p-3 rounded-md mb-4 text-sm"
            />
            <textarea
              placeholder="Enter Bio Details"
              className="w-full bg-gray-800 p-3 rounded-md h-24 text-sm"
            ></textarea>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm text-gray-300 mb-2 font-semibold">Contact Information</h3>
            <input
              type="email"
              placeholder="Email Address"
              className="w-full bg-gray-800 p-3 rounded-md mb-4 text-sm"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full bg-gray-800 p-3 rounded-md mb-4 text-sm"
            />
            <input
              type="text"
              placeholder="Discord Handle (e.g., Gamer#1234)"
              className="w-full bg-gray-800 p-3 rounded-md mb-6 text-sm"
            />

            <button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded-md transition"
            >
              Register
            </button>
          </div>
        </form>

        <p className="text-center text-sm text-gray-500 mt-6">
          Already have an account?{" "}
                     <Link to="/Login" className="text-sm text-red-500 cursor-pointer hover:underline" > Sign in </Link>

          
        </p>
      </div>
    </div>
  );
};

export default RegisterTeam;
