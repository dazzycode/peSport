
import React, { useState } from "react";
import { Link } from "react-router-dom";
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
} from "react-icons/fa";

const AcademyPage = () => {
  const [activeTab, setActiveTab] = useState("individual");
  const [isOpen, setIsOpen] = useState(false);

  const tabs = [
    { id: "individual", label: "Join as an Individual" },
    { id: "club", label: "Join as Club" },
    { id: "sponsor", label: "Join as a Sponsor" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: "PeSport", path: "/" },
    { name: "Academy", path: "/academy" },
    { name: "Foundation", path: "/foundation" },
    { name: "Event", path: "/events" },
    { name: "Contact", path: "/contact" },
  ];

  const services = [
    {
      title: "GHETTO TO GLORY (G2G)",
      description:
        "Setting up Esports in the underserved communities. Engaging in grass to fame and social. Scaled tournaments skill development, career potential platform.",
    },
    {
      title: "PROFESSIONAL TEAMS AND TALENT MANAGEMENT",
      description:
        "Individual talents are scouted, coached, trained to become completely professional Esports gamers. Effective systematic approach driven towards career success.",
    },
    {
      title: "ACADEMY",
      description:
        "Teaching coding, developing education, Esports innovation and blockchain. Empowering tomorrow’s generation in esports. Teach gaming, prep tools for tournament success.",
    },
    {
      title: "TOURNAMENT ORGANISATION",
      description:
        "Entertaining Esports enthusiasts nationwide with thrilling events. Offering live gameplay, broadcast, friendly competitions. Strong experience when organizing Esport events.",
    },
    {
      title: "MEDIA RIGHTS AND CONTENT PRODUCTION",
      description:
        "Collaboration with big brands. Curating and broadcasting international tournaments. World-class Esport commentary, behind-the-scenes multiple platforms.",
    },
    {
      title: "WHITE LABEL AND ACTIVATION",
      description:
        "Active idea providing solutions for launching Esports businesses. Brand collaboration, and campaigns promoted across all platforms.",
    },
  ];

  const registerOptions = [
    {
      title: "Join as an Individual",
      image: "/academy1.png",
    },
    {
      title: "Join Our Club",
      image: "/academy2.png",
    },
    {
      title: "Join as a Sponsor",
      image: "/academy3.png",
    },
  ];
const getButtonLabel = () => {
    switch (activeTab) {
      case "individual":
        return "Join as an Individual";
      case "club":
        return "Join Club";
      case "sponsor":
        return "Become a Sponsor";
      default:
        return "Submit";
    }
  };
  const getFormTitle = () => {
    switch (activeTab) {
      case "individual":
        return "Register as an Individual";
      case "club":
        return "Register Your Club";
      case "sponsor":
        return "Register as a Sponsor";
      default:
        return "Register";
    }
  };
  return (
    <>
      {/* Background */}
      <div
        className="text-white"
        style={{
          backgroundImage: "url('/academy.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "114vh",
        }}
      >
        {/* Navbar */}
        <div className="pt-20">
          <nav className="flex justify-between items-center px-8 py-2 rounded-full max-w-4xl mx-auto bg-gradient-to-r from-[#432f47] to-[#2a252d]">
            <img src="/logo-peta.png" alt="Logo" className="h-10" />

            {/* Desktop Links */}
            <div className="hidden text-center md:flex space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="hover:text-purple-500 transition"
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
          className={`fixed top-0 right-0 w-3/4 max-w-xs h-full bg-gradient-to-r from-[#432f47] to-[#2a252d] text-white transform transition-transform duration-300 ease-in-out z-50 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col items-center space-y-6 mt-20 px-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={toggleMenu}
                className="text-xl hover:text-purple-500 transition"
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
          <h2 className="text-2xl font-bold">Our Academy</h2>

          <div className="items-center mt-5 justify-center">
            <Link
              to="/auth/Donate"
              className="bg-red-600 px-10 py-2 rounded-full inline-block"
            >
              Donate
            </Link>
          </div>
        </section>
      </div>

      {/* About Section */}
      <div
        className="py-10 bg-black text-white"
        style={{
          backgroundImage: "url('/foundationabtbg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "100%",
        }}
      >
        <div className="bg-black bg-opacity-90 px-6 py-12 space-y-12 max-w-7xl mx-auto">
          <div>
            <h2 className="text-3xl font-bold mb-8 text-center">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, idx) => (
                <div
                  key={idx}
                  className="bg-[#1a1a1a] p-6 rounded-lg shadow-lg flex flex-col"
                >
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-sm text-gray-300 mb-4 flex-grow">
                    {service.description}
                  </p>
                  <button className="bg-red-500 hover:bg-red-600 px-4 py-2 text-sm rounded-full self-start">
                    Learn More
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-8 text-center">
              Join Petabyte Esports
            </h2>
            <p className="text-center text-gray-300 mb-8">
              Grow the gaming community by filling out one of the forms below
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {registerOptions.map((option, idx) => (
                <div
                  key={idx}
                  className="bg-[#1a1a1a] p-6 rounded-lg shadow-lg text-center"
                >
                  <img
                    src={option.image}
                    alt={option.title}
                    className="mx-auto mb-4 rounded"
                  />
                  <h3 className="text-lg font-semibold mb-2">{option.title}</h3>
                  <button className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-full">
                    Register
                  </button>
                </div>
              ))}
            </div>
          </div>
</div>
          {/* Tabbed Join Section */}
          

<div className="bg-black text-white px-6 py-12 space-y-12">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-2">Join Our Club</h2>
        <p className="text-sm text-gray-400 mb-6">
          Be part of our team of gamers who will receive professional training,
          brand identity and marketing training to become high level gamers.
          Register below:
        </p>

        {/* Tabs */}
        <div className="w-full flex flex-col items-center">
          <div className="flex space-x-6 relative border-b border-purple-700">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative pb-2 text-sm font-medium ${
                  activeTab === tab.id
                    ? "text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <span className="absolute left-0 bottom-0 w-full h-1 bg-purple-600 rounded-full transition-all duration-300"></span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Form */}
        <form className="space-y-4 text-left mt-10">
          <h3 className="text-xl font-semibold mb-4">{getFormTitle()}</h3>

          <div>
            <label className="block mb-1 text-sm">Full Name</label>
            <input
              type="text"
              className="w-full p-2 rounded bg-[#1a1a1a] border border-gray-600 text-white"
              placeholder="Enter your full name"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm">Age Group</label>
            <select className="w-full p-2 rounded bg-[#1a1a1a] border border-gray-600 text-white">
              <option>Under 13</option>
              <option>13 - 17</option>
              <option>18 - 24</option>
              <option>25+</option>
            </select>
          </div>

          <div>
            <label className="block mb-1 text-sm">Email Address</label>
            <input
              type="email"
              className="w-full p-2 rounded bg-[#1a1a1a] border border-gray-600 text-white"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm">Areas of Interest</label>
            <div className="flex flex-col gap-2">
              {["FIFA23", "Gaming", "Streaming", "Esports", "Team building"].map(
                (area, idx) => (
                  <label key={idx} className="inline-flex items-center">
                    <input type="checkbox" className="form-checkbox mr-2" />
                    <span className="text-sm">{area}</span>
                  </label>
                )
              )}
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-full mt-4"
          >
            {getButtonLabel()}
          </button>
        </form>
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
    </>
  );
};

export default AcademyPage;
