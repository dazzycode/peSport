
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./landing.css"
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
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow } from 'swiper/modules';

const LandingPage = () => {
   const [isOpen, setIsOpen] = useState(false);
     const toggleMenu = () => setIsOpen(!isOpen);
  
    const navLinks = [
      { name: "PeSport", path: "/" },
      { name: "Academy", path: "/academy" },
      { name: "Foundation", path: "/foundation" },
      { name: "Event", path: "/events" },
      { name: "Vlog", path: "/vlog" },
    ];
 const team = [
    {
      name: "",
      role: "",
      image: "/member.png",
    },
    {
      name: "",
      role: "role",
      image: "/member.png",
    },
    {
      name: "",
      role: "role",
      image: "/member.png",
    },
    {
      name: "",
      role: "role",
     image: "/member.png",
    },
    {
      name: "",
      role: "Role",
      image: "/member.png",
    },
    
    
  ];

    return (
<div>
      <div  className="text-white"
  style={{
    backgroundImage: "url('/Herobg.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "154vh",
  }}
>
{/* Navbar */}
        <div className="pt-20">
        <nav className="flex justify-between  items-center px-8 py-2 rounded-full max-w-4xl mx-auto bg-gradient-to-r from-[#432f47] to-[#2a252d]">
          <img src="/logo-peta.png" alt="Logo" className="h-10" />
          

          {/* Desktop Links */}
          <div className="hidden text-center md:flex space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className=" hover:text-purple-500  transition"
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/Login"
              onClick={() => setIsOpen(false)}
              className="bg-red-600 px-4 py-1 rounded-full"
            >
              Login
            </Link>
            <Link
              to="/Signup"
              onClick={() => setIsOpen(false)}
              className="border border-red-600 px-4 py-1 rounded-full"
            >
              Register
            </Link>
          </div>

          {/* Hamburger Icon (mobile) */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-white text-2xl focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </nav>
</div>
        {/* Mobile Menu Overlay */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm z-40"
            onClick={toggleMenu}
          />
        )}

        {/* Mobile Slide-in Menu */}
        <div
          className={`fixed top-0 right-0 w-3/4 max-w-xs h-full  bg-gradient-to-r from-[#432f47] to-[#2a252d]  text-white transform transition-transform duration-300 ease-in-out z-50 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col items-center space-y-6 mt-20 px-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={toggleMenu}
                className="text-xl hover:text-purple-500  transition"
              >
                {link.name}
              </Link>
            ))}

            <Link
              to="/Login"
              onClick={toggleMenu}
              className="bg-red-600 px-4 py-1 rounded-full w-full text-center"
            >
              Login
            </Link>
            <Link
              to="/Signup"
              onClick={toggleMenu}
              className="border border-red-600 px-4 py-1 rounded-full w-full text-center"
            >
              Register
            </Link>
          </div>
        </div>
          
            {/* Hero Section */}
            <section className="pt-24 text-center py-4 px-4">
                <h2 className="text-sm font-joystix">DIVE INTO FUN:</h2>
                <h1 className="text-5xl font-bold pt-5 font-joystix">LET THE GAMES BEGIN!</h1>
            </section>
            {/* Gamepad Image */}
            <div className="flex justify-center relative "> 
        <img
          src="/bggame.png"
          alt="Gamepad"
              className="w-[600px] md:w-[600px] lg:w-[700px] mx-auto  mt-10 z-20 relative"

        />
      </div>
      {/* Logo Ribbon */}
      <div className="flex  pt-md-10 pt-sm-5 justify-center relative">

      <img
        src="Frame 7.png"
        alt="Ribbon"
        className="relative mx-auto bottom-0 w-100 z-0"
        style={{ transform: "rotate( -2deg)" }}
      />
<img
        src="Frame 6.png"
        alt="Ribbon"
        className="absolute  w-100 z-0"
        style={{ transform: "rotate(-2deg)" }}
      />
      </div>
</div>
            <div  className="pt-20 py-5 bg-black text-white"
  style={{
    backgroundImage: "url('/aboutbg.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "100%",
  }}
>
  <div className="max-w-6xl pt-10 mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-12 h-full">
        {/* LEFT - TEXT */}
        <div className="md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-joystix mb-2">PESPORTS</h2>
          <h3 className="text-lg font-semibold mb-4">
            Connect, Compete, and Save!
          </h3>
          <p className="text-sm mb-4">
            Level up your gaming experience with the Petabyte Esports all-in-one app! Designed to connect gamers,
            the app gives you access to exclusive tournaments, coaching, and exciting events. Whether you're a
            casual player or an aspiring pro, join a vibrant community of gamers across Nigeria and Africa.
          </p>
          <p className="text-sm mb-4">
            But that's not all! Petabyte Esports has partnered with mobile service providers to offer Nigerians
            cheaper and even free mobile data, ensuring you can game without worrying about data costs.
          </p>
          <p className="text-sm">
            Don’t miss out—download the app today for unlimited gaming opportunities, exclusive content, and
            affordable internet for your gaming needs!
          </p>
        </div>
        {/* RIGHT - IMAGE  */}
          <div className="max-w-6xl pt-10 mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-12 h-full">
          {/* Gamer Image */}
          <img
            src="/about.png"
            alt="Gamer"
            className="rounded-md w-full max-w-md mx-auto relative z-10"
          />  
</div>
</div>
  <div className="max-w-6xl pt-10 mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-12 h-full">

      {/* Phone Image */}
      <div className="relative w-[700px] md:w-[700px]">
        <img src="./about1.png" alt="App Preview" className="w-full" />  
      </div>

      {/* Text Content */}
      <div className="max-w-md text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-bold font-mono tracking-widest mb-6">
          DOWNLOAD <br /> OUR APP
        </h2>
        <ul className="space-y-3 mb-6">
          {[
            'Connect with gamers',
            'Get free Mobile Data',
            'Join tournaments',
            'Livestream your games',
            'Engage and discuss',
            'Chat up your game buddy',
            'Send and receive payments easily'
          ].map((item, idx) => (
            <li key={idx} className="flex items-start">
              <span className="text-red-500 text-xl mr-3">🔺</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        {/* App Store Buttons */}
        <div className="flex gap-4 justify-center md:justify-start">
          <img src="./ios.png" alt="Download on App Store" className="w-32" />
          <img src="./googleplay.png" alt="Get it on Google Play" className="w-32" />
        </div>
      </div>
    </div>
</div>

            {/* Board Members */}
            <div  className=" py-5 bg-black text-white"
  style={{
    backgroundImage: "url('/bg-peta.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "100%",
  }}
>
            <section className=" text-white text-center py-12">
                <h2 className="text-3xl font-joystix font-bold mb-6">BOARD MEMBERS</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-6">
                    {[...Array(8)].map((_, idx) => (
                        <div key={idx} className="text-center">
                            <img src="/team.png" alt="Member" className="rounded-lg border-2 border-red-600" />
                            <p className="mt-2 text-sm">Name</p>
                        </div>
                    ))}
                </div>
            </section>
</div>
            {/* Our Partners */}
            <div  className=" py-5 pt-20 bg-black text-white"
  style={{
    backgroundImage: "url('/partners.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "100%",
  }}
>
            <div className="text-3xl font-joystix py-2 pt-10  text-center text-sm">Our Partners</div>
{/* Logo Ribbon */}
      <img
        src="ribbon.png"
        alt="Ribbon"
        className="relative pt-5  mx-auto "
      />
            {/* Meet the Team */}
            <section className="text-center  pt-40 py-12 px-6">
                <h2 className="text-xl font-bold mb-6">MEET THE TEAM</h2>
                
<div className="w-full overflow-hidden">
  <Swiper
  effect="coverflow"
  grabCursor={true}
  centeredSlides={true}
  slidesPerView="auto"
  loop={true}
  className="mySwiper"
>
  {team.map((member, index) => (
    <SwiperSlide key={index} className="!w-[300px]">
      <div className="relative overflow-hidden rounded-lg shadow-lg">
        <img
          src={member.image}
          alt={member.name}
          className="w-[300px] h-[400px] object-cover"
        />
        <div className="absolute bottom-0 w-full bg-gradient-to-t from-black to-transparent p-4">
          <h3 className="text-white text-lg font-semibold">{member.name}</h3>
          <p className="text-white text-sm">{member.role}</p>
        </div>
      </div>
    </SwiperSlide>
  ))}
</Swiper>

   
</div>

                
            </section>
</div>
            {/* Contact Section */}
             <div  className=" py-5 pt-20 bg-black text-white"
  style={{
    backgroundImage: "url('/foundationabtbg.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "100%",
  }}
>
            <section className="px-6 py-12 md:flex gap-10 items-center">
                <img src="/bggame2.png" alt="Blue Gamepad" className="w-100 mx-auto" />
                <div className="md:w-1/2">
                    <h2 className="text-3xl font-joystix font-bold mb-4">SEND US A MESSAGE</h2>
                    <input type="text" placeholder="Enter your email address"  className="w-full bg-[#1a1a1a] text-white placeholder-gray-400 rounded-full px-4 py-3 focus:outline-none"
  />
                    <textarea placeholder="Write a message"   className="w-full bg-[#1a1a1a] text-white placeholder-gray-400 rounded-2xl px-5 py-3 mt-4 h-32 resize-none focus:outline-none"
></textarea>
                    <button   className="w-full bg-red-600 text-white font-semibold py-3 rounded-xl mt-4 hover:bg-red-700 transition"
 >Submit</button>
                </div>
            </section>

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
            </div>
        );
};

export default LandingPage;  