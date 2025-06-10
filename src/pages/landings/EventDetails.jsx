
import React from "react";
import { Link } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  FaEnvelope,
  FaCommentDots,
  FaYoutube,
  FaTwitch,
  FaDiscord,
  FaTiktok,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaFacebook,
} from 'react-icons/fa';
const EventDetails = () => {
  return (
    <div className="bg-[#0a060b] min-h-screen text-white flex flex-col">
      {/* Banner */}
      <div className="w-full h-64">
        <img
          src="/eventdetails.png"
          alt="Event Banner"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Main Content */}
      <div className="flex-grow max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Register Form */}
        <div className="bg-[#1a1a1a] p-6 rounded-lg shadow-lg">
          <h2 className="text-lg font-semibold mb-4">REGISTER</h2>
          <form className="space-y-4">
            <div className="bg-[#121212] p-3 rounded-full flex items-center gap-2">
              <span className="text-purple-500">🌐</span>
              <input
                type="text"
                placeholder="Country"
                className="bg-transparent outline-none text-sm w-full"
              />
            </div>
            <div className="bg-[#121212] p-3 rounded-full flex items-center gap-2">
              <span className="text-purple-500">📞</span>
              <input
                type="text"
                placeholder="Phone number"
                className="bg-transparent outline-none text-sm w-full"
              />
            </div>
            <div className="flex gap-1">
              <div className="bg-[#121212] px-4 py-2 rounded-full flex items-center gap-2 w-1/2">

                <span className="text-purple-500">📅</span>
                <input
                  type="date"
                  className="bg-transparent outline-none text-sm w-full"
                />
              </div>
              <div className="bg-[#121212] p-3 rounded-full flex items-center gap-1 w-1/2">
                <span className="text-purple-500">👤</span>
                <select className="bg-transparent outline-none text-sm w-full">
                  <option>Gender</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </div>
            </div>
            <button
              type="submit"
              className="bg-red-600 hover:bg-red-700 text-white w-full py-2 rounded-full transition duration-200"
            >
              Register
            </button>
          </form>
        </div>

        {/* Event Info */}
        <div className="text-sm md:text-base">
          <h2 className="text-lg font-semibold mb-4">DETAILS</h2>
          <div className="space-y-2">
            <InfoRow label="Game" value="GTAV" />
            <InfoRow label="Organiser" value="DEV GAMERS" />
            <InfoRow
              label="Country"
              value={<span className="flex items-center gap-1">🇮🇳 🇧🇩 🇳🇵</span>}
            />
            <InfoRow label="Date" value="21/01/2025" />
            <InfoRow label="Time" value="06:00 PM" />
            <InfoRow label="Event End Date" value="31/10/2024" />
            <InfoRow label="Event End Time" value="11:59 PM" />
            <InfoRow label="Registration Closing Date" value="24/09/2024" />
            <InfoRow label="Prize Poll" value="$100" />
          </div>
        </div>
      </div>
  {/* Footer */}
            <footer className="bg-black mx-auto text-white py-10 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Logo and About */}
        <div>
          <img src="/logo-peta.png" alt="Petabyte Esports" className="mb-4 w-32" />
          <p className="text-sm text-gray-300">
            Petabyte Esports is a sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus.
          </p>
        </div>

        {/* Contact Us */}
                <div>
                  <h3 className="text-lg font-semibold mb-3">Contact Us:</h3>
                     <Link to="mailto:info@pesports.gg " className="flex items-center gap-2 text-gray-300 text-sm" >  <FaEnvelope />info@pesport.gg</Link>
        
           <Link to="/Chatbot" className="flex items-center gap-2 text-gray-300 text-sm" >  <FaCommentDots /> Chat with Us </Link>
                </div>
         {/* Call to Action */}
                <div>
                  <h3 className="text-lg font-semibold mb-3">New to Petabyte ESports?</h3>
                   <Link to="/Signup" className="text-sm text-gray-300 underline" > Create your account </Link>
                </div>
        {/* Browse Tournaments */}
                    <div>
                      <h3 className="text-lg font-semibold mb-3">Test your skills</h3>
                    <Link to="/tournament"><a  className="text-sm text-gray-300 underline">Browse tournaments</a></Link>  
                    </div>
                  </div>
    
    
          {/* Social Icons */}
          <div className="mt-10 flex justify-center space-x-5 text-xl text-white">
         <Link to="/https:youtube.com"> <FaYoutube /> </Link>
                  <Link to="/https:Discord.com"><FaDiscord /> </Link>
                  <Link to="/https:twitch.com"><FaTwitch />  </Link>
                  <Link to="/https:tiktok.com"> <FaTiktok /> </Link>
                  <Link to="/https:instagram.com"> <FaInstagram /> </Link>
                  <Link to="/https:twitter.com"> <FaTwitter /> </Link>
                  <Link to="/https:linkedin.com"> <FaLinkedin /> </Link>
                  <Link to="/https:facebook.com"><FaFacebook /></Link>

      
          </div>
    
          {/* Footer Bottom Links */}
          <div className="mt-6 text-center text-sm text-gray-400 space-x-4">
            <a href="#">About</a>
            <a href="#">Privacy and Policy</a>
            <a href="#">Terms of service</a>
          </div>
        </footer>
    </div>
  );
};

const InfoRow = ({ label, value }) => (
  <div className="flex justify-between border-b border-gray-800 py-1">
    <span className="text-gray-400">{label}</span>
    <span>{value}</span>
  </div>
);

export default EventDetails;
