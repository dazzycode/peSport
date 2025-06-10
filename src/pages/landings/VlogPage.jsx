
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

const VlogPage = () => {
  return (
    <div className="bg-black text-white min-h-screen p-4">
      {/* Header */}
       {/* Background */}
      <div
        className="text-white"
        style={{
          backgroundImage: "url('/vlogheadings.png')",
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
        <h1 className="text-4xl text-center pt-20 text-NexaBold font-bold">Vlog</h1></div>
<div className="bg-[#0e0b16] text-white min-h-screen px-6 py-8 space-y-12">
    <div className="bg-[#0e0b16] text-white min-h-screen px-6 py-8 space-y-16">
      {/* Video Blog Section */}
     <section className="mt-10 text-white">
  <div className="flex justify-between items-center mb-6">
    <h2 className="text-2xl font-bold">Video Blog</h2>
                    <Link to="/vlogvideos "><a  className="text-sm text-gray-300 hover:underline  "> Watch More›› </a></Link>  
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {/* Left: Big Vertical video*/}
    <div className="bg-[#1c1a29] p-4 rounded-lg">
      <div className="relative rounded-lg overflow-hidden">
        <img
          src="./vgallery2.png"
          alt="Main Video"
          className="w-full h-auto object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-purple-600 w-12 h-12 rounded-full flex items-center justify-center">
            <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
  
      </div>
      <h3 className="mt-4 font-semibold text-lg">Exploring the Art of Video Game Soundtracks</h3>
      <div className="mt-2 flex justify-between items-center text-sm text-gray-400">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded-full bg-gray-300" />
          @johndoe
        </div>
        <span>618 views</span>
      </div>
    </div>

    {/* Right Sidebar Videos */}
    <div className="flex  max-w-1xl flex-col gap-4">
      {[1, 2, 3].map((item) => (
        <div key={item} className="bg-gray-900 rounded-xl p-2 flex gap-3  items-center">
          <div className="relative w-28 h-36 rounded-lg overflow-hidden">
            <img
              src="./vgallery2.png"
              alt="Video Thumbnail"
              className="w-full h-full object-cover"
            />
            <span className="absolute bottom-1 right-1 bg-black bg-opacity-70 text-white text-xs px-1 rounded">
              40 mins
            </span>
          </div>
          <div className="flex-1 text-sm">
            <h4 className="font-semibold text-white leading-tight mb-1">Video Tutorials Story 101</h4>
            <div className="text-gray-400 flex items-center gap-2 text-xs">
              <div className="w-4 h-4 bg-gray-300 rounded-full" />
              <span>@johndoe</span>
            </div>
            <span className="text-gray-400 text-xs">100 views</span>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


   <section>
  <div className="flex justify-between items-center mb-6">
    <h2 className="text-2xl font-bold">Blogs and Articles</h2>
                <Link to="/vlogdetails "><a  className="text-sm text-gray-400 hover:text-white "> Read More &rarr;</a></Link>  
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
            className="rounded w-28 h-20 object-cover"
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
       <section className="mt-10">
  <h2 className="text-2xl font-bold mb-6">Gallery</h2>

  {/* Gallery Grid */}
  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
    {[
      "./vgallery3.png",
      "./vgallery2.png",
      "./vgallery1.png",
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

  {/* Load More Button */}
  <div className="flex justify-center mt-8">
       <Link to="/vlogGallery" ><button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full text-sm font-semibold transition">
      Load More
    </button>   </Link>

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

export default VlogPage;
