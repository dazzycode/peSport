

import React  from "react";
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
   FaBars,
  FaTimes,
} from 'react-icons/fa';

const VlogVideos = () => {
  return (
    <div className="bg-black text-white min-h-screen p-4">
     <section className="min-h-screen px-4 py-6 bg-black text-white">
  {/* Back Button */}
  <div className="mb-4">
    <Link to="/ "> <button className="text-white text-2xl">&larr;</button>
  </Link>    
  </div>

  {/* Search Bar */}
  <div className="flex items-center gap-2 mb-6">
    <input
      type="text"
      placeholder="Search for Videos"
      className="flex-1 px-4 py-2 rounded-full bg-zinc-900 text-white placeholder-gray-400 focus:outline-none"
    />
    <button className="bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-700 transition">
      Search
    </button>
  </div>

  {/* Video Blog Title */}
  <h2 className="text-xl font-bold mb-4">Video Blog</h2>

  {/* Video Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-2 gap-6">
    {[...Array(6)].map((_, i) => (
      <div
        key={i}
        className="bg-zinc-900 p-4 rounded-xl flex flex-col justify-between"
      >
        <div className="relative rounded-lg overflow-hidden">
          <img
            src="./vlog1.png"
            alt="video"
            className="w-full h-auto object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-purple-600 w-12 h-12 rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
          <span className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-sm px-2 py-0.5 rounded">
            40 mins
          </span>
        </div>
        <h3 className="mt-4 text-base font-semibold">
          Exploring the Art of Video Game Soundtracks
        </h3>
        <div className="mt-2 flex justify-between items-center text-sm text-gray-400">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-full bg-gray-300" />
            @johndoe
          </div>
          <span>618 views</span>
        </div>
      </div>
    ))}
  </div>
</section>

{/* Footer */}
            <footer className="bg-black text-white py-10 mt-10 px-6 md:px-16">
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

export default VlogVideos;
