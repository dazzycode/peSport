

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

const VlogDetails = () => {
  return (
    <div className="bg-black text-white min-h-screen p-4">
      {/* Header */}
       {/* Background */}
      <div
        className="text-white"
        style={{
          backgroundImage: "url('/vlog2.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "34vh",
        }}
      >
    <div className="mb-4">
       <Link to="/ "> <button className="text-white mx-3 text-3xl">&larr;</button>
     </Link>    
     </div>     
</div>
<div className="bg-[#0e0b16] text-white min-h-screen px-6 py-8 space-y-12">
    <div className="bg-[#0e0b16] text-white min-h-screen px-6 py-8 space-y-16">
      {/* Video Blog Section */}
      <section>
        <div className=" justify-between items-center mb-6">
          <h2 className="text-2xl font-bold"> Exploring the Art of Video Game Soundtracks  </h2>
<div className="mt-2 flex justify-between items-center text-sm text-gray-400">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 text-sm rounded-full bg-gray-300" />
          @johndoe
        <br></br>3 min read
      </div></div>
            <p className="mt-10"> Hey there, fellow gamers! Today, I want to delve into a topic that's close to every gamer's heart: video game soundtracks. Whether you're battling dragons, exploring post-apocalyptic wastelands, or solving intricate puzzles, the music playing in the background can elevate the entire gaming experience to a whole new level. Think about it – can you imagine playing your favorite game without its iconic soundtrack? From the haunting melodies of "The Elder Scrolls V: Skyrim" to the adrenaline-pumping beats of "DOOM," video game soundtracks have the power to immerse us in the worlds we love. </p><br></br>
         <p> 
One of the most remarkable aspects of video game music is its ability to evoke emotions and memories long after we've put down the controller. Hearing a familiar tune can instantly transport us back to the moment we first encountered a challenging boss, uncovered a hidden treasure, or triumphed against all odds. </p><br></br>
       <p> The odds </p>  
       <p>Hey there, fellow gamers! Today, I want to delve into a topic that's close to every gamer's heart: video game soundtracks. Whether you're battling dragons, exploring post-apocalyptic wastelands, or solving intricate puzzles, the music playing in the background can elevate the entire gaming experience to a whole new level. check the news here
Think about it – can you imagine playing your favorite game without its iconic soundtrack? From the haunting melodies of "The Elder Scrolls V: Skyrim" to the adrenaline-pumping beats of "DOOM," video game soundtracks have the power to immerse us in the worlds we love.  </p><br></br>
        <p> One of the most remarkable aspects of video game music is its ability to evoke emotions and memories long after we've put down the controller. Hearing a familiar tune can instantly transport us back to the moment we first encountered a challenging boss, uncovered a hidden treasure, or triumphed against all </p>
         </div>
      </section>
       <section>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Related Articles</h2>
                      
        </div>
      
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left: Big Vertical Blog Card */}
          <div className="bg-[#1c1a29] p-4 rounded-lg">
            <img
              src="./vlog2.png"
              alt="Main blog"
              className="rounded mb-4 w-full"
            />
            <h3 className="text-lg font-semibold mb-1">Exploring the Art of Video Game Soundtracks</h3>
            <p className="text-sm text-gray-400"> Hey y there, fellow gamers! Today, I want to delve into a topic that's close to every gamer's heart: video game soundtracks.
      <span className="text-sm text-red-400"> Read More...   </span> </p>
          </div>
      
          {/* Right: Two stacked horizontal blog cards */}
          <div className="flex flex-col gap-5">
            {[1, 2,3].map((i) => (
              <div
                key={i}
                className="bg-[#1c1a29] p-3 rounded-lg flex items-center gap-4"
              >
                <img
                  src="./vlog2.png"
                  alt={`Blog ${i}`}
                  className="rounded w-28 h-40 my-0 object-cover"
                />
                <div className="space-y-4">
                  <h4 className="text-xl font-semibold">
                    Exploring the Art of Video Game Soundtracks
                  </h4>
      <p className="text-sm text-gray-400 pt-5"> Hey y there, fellow gamers! Today, I want to delve into a topic that's close to every gamer's heart: video game soundtracks.
      <span className="text-sm text-red-400"> Read More...   </span> </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
          </div>
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

export default VlogDetails;
