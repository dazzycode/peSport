
import React from "react";
import { Link } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const EventCard = ({ image, title, mode, location, host, price, status, onClick   }) => {
  return (
    <div className="bg-[#1b1c1e] rounded-xl overflow-hidden shadow-lg border border-gray-700 hover:scale-105 transition-all">
      <img onClick={onClick}  src={image} alt={title} className="w-full h-40 object-cover" />
      <div className="p-4 text-white space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-gray-300">Escape mode - <span className="text-purple-400">{mode}</span></span>
          <span className="text-green-400">{status}</span>
        </div>
        <div className="text-xs text-gray-400">
          <p>Location: {location}</p>
          <p>Hosted by: {host}</p>
        </div>
        <div className="flex justify-between items-center mt-2 text-xs">
          <span className="bg-[#26282b] px-2 py-1 rounded text-gray-300">${price}</span>
        </div>
        <Link to="/Register">
        <button className="w-full bg-red-600 text-white font-semibold text-sm py-2 rounded-lg mt-3 hover:bg-red-700 transition">
          REGISTER NOW
        </button></Link>
      </div>
    </div>
  );
};

export default EventCard;
