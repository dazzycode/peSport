



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

const VlogGallery = () => {
  return (
    <div className="bg-black text-white min-h-screen p-4">
    
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
  <h2 className="text-xl font-bold mb-4">Gallery</h2>

  {/* Video Grid */}
 
 {/* Gallery Grid */}
  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
    {[
      "./vgallery3.png",
      "./vgallery2.png",
      "./vgallery1.png",
      "./vgallery1.png",
      "./vgallery2.png",
      "./vgallery3.png",
      "./vgallery1.png",
      "./vgallery2.png",
      "./vgallery3.png",
    ].map((src, i) => (
      <img
        key={i}
        src={src}
        alt={`Gallery image ${i + 1}`}
        className="rounded-lg w-full object-cover"
      />
    ))}
  </div>
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

export default VlogGallery;
