import React from "react";
import { Link, BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import EventCard from "./EventCard";
import { FaChevronLeft, FaChevronRight,   } from "react-icons/fa";
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
const EventPage = () => {
   const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate(`/event/${id}`);
  }; 
    const eventData = [
  {
    image: "/event1.png",
    title: "GTA V",
    mode: "GTA 5",
    location: "Nigeria",
    host: "Dev Gamers",
    price: "1000",
    status: "in 20mins",
  },
  {
    image: "/event2.png",
    title: "Valorant",
    mode: "GTA 5",
    location: "Nigeria",
    host: "Dev Gamers",
    price: "800",
    status: "in 20mins",
  },
  {
    image: "/event3.png",
    title: "Mobile Legends",
    mode: "GTA 5",
    location: "Nigeria",
    host: "Dev Gamers",
    price: "FREE ENTRY",
    status: "in 20mins",
  },
  {
    image: "/event1.png",
    title: "FIFA 23",
    mode: "GTA 5",
    location: "Nigeria",
    host: "Dev Gamers",
    price: "500",
    status: "in 20mins",
  },
  {
    image: "/event2.png",
    title: "GTA V",
    mode: "GTA 5",
    location: "Nigeria",
    host: "Dev Gamers",
    price: "1000",
    status: "in 20mins",
  },
  {
    image: "/event3.png",
    title: "GTA V",
    mode: "GTA 5",
    location: "Nigeria",
    host: "Dev Gamers",
    price: "1000",
    status: "in 20mins",
  },
];
  
  return (
    <div> 
    <div
      className="relative h-[534px] w-full bg-cover bg-center text-white"
      style={{
        backgroundImage: "url('./zombie.png')", 
      }}
    >
      <div className="mb-4">
           <Link to="/ "> <button className="text-white mx-3 text-3xl">&larr;</button>
         </Link>    
         </div>  
      {/* Countdown */}
      <div className="absolute top-20 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-70 rounded-full px-6 py-3 flex space-x-6 items-center text-center text-sm font-medium z-10">
        <div>
          <p className="text-lg font-bold">20</p>
          <p className="uppercase text-gray-300 text-xs">Days</p>
        </div>
        <div>
          <p className="text-lg font-bold">17</p>
          <p className="uppercase text-gray-300 text-xs">Hours</p>
        </div>
        <div>
          <p className="text-lg font-bold">50</p>
          <p className="uppercase text-gray-300 text-xs">Minutes</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center z-10 px-4">
        <p className="uppercase tracking-widest text-sm text-gray-300">Events Name</p>
        <h1 className="text-6xl font-extrabold mt-2">Zombie Hunger</h1>
        <div className="mt-4 bg-red-600 px-6 py-2 rounded-full text-sm font-semibold tracking-wide">
          Prize Poll: $1000
        </div>
      </div>

      {/* Navigation Arrows */}
      <button className="absolute left-10 top-1/2 transform -translate-y-1/2 bg-purple-600 p-3 rounded-full">
        <FaChevronLeft className="text-white text-xl" />
      </button>
      <button className="absolute right-10 top-1/2 transform -translate-y-1/2 bg-purple-600 p-3 rounded-full">
        <FaChevronRight className="text-white text-xl" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-2">
        <span className="w-3 h-3 bg-white rounded-full"></span>
        <span className="w-3 h-3 bg-gray-500 rounded-full"></span>
        <span className="w-3 h-3 bg-gray-500 rounded-full"></span>
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div></div>
 <div className="bg-black min-h-screen text-white p-8">
      <h2 className="text-3xl font-bold text-center mb-8">More Events</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {eventData.map((event) => (
          <EventCard key={event.id} {...event} onClick={() => handleCardClick(event.id)} />

        ))}
      </div>
    </div>
    {/* Footer */}
                <footer className="bg-black text-white py-10 px-6 md:px-16">
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

export default EventPage;
