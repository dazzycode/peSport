
import React, { useState } from "react";
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
const FoundationPage = () => {
  const [isOpen, setIsOpen] = useState(false);
   const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: "PeSport", path: "/" },
    { name: "Academy", path: "/academy" },
    { name: "Foundation", path: "/foundation" },
    { name: "Event", path: "/events" },
    { name: "Vlog", path: "/vlog" },
  ];
    return (
<div>
      <div  className="text-white"
  style={{
    backgroundImage: "url('/foundationbg.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "114vh",
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
                <h2 className="text-2xl text-bold">Our Foundation</h2>
                <div className="max-w-2xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-12 h-full">
              <p className="text- m text-justify mt-5 mb-4">Petabyte Esports G2G is a selfless and innovative 
                    project targeting the underserved communities 
                    in Nigeria. The idea aims to address people living in low-income urban areas, 
                    offering a unique solution that can drive positive change and improve quality of life.</p>
                    </div>
                      <div className="items-center mt-5 justify-between ">
 <Link to="/auth/Donate" className="bg-red-600 px-10 py-2 rounded-full">Donate</Link></div>
            </section>
          </div>

           {/*About*/}
            <div  className="py-10 bg-black text-white"
  style={{
    backgroundImage: "url('/foundationabtbg.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "100%",
  }}
>
  <div className="max-w-6xl mx-auto t-5 flex flex-col md:flex-row items-center justify-between px-6 md:px-12 h-full">
        {/* LEFT - TEXT */}
        <div className=" mx-5 md:w-1/2">
  <p className="text-sm text-justify mb-4">
           Petabyte Esports G2G refers to an organized competitive video gaming that involves youths in underserved 
           communities learning and competing in various games. The industry has seen significant growth and has captured
            the attention of  millions of teenagers worldwide. It therefore offers a unique platform for social interaction, 
           skill development, and potential career opportunities for those in such under privileged environments.
          </p>
         
        </div>
  {/* RIGHT - IMAGE*/}
        <div className="relative md:w-1/2  md:mt-0">
          {/* Gamer Image */}
          <img
            src="/foundation1.png"
            alt="Gamer"
            className="rounded-md w-full max-w-md mx-auto relative z-10"
          />  
</div></div>

       <section className="bg-black text-white py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto space-y-16">

        {/* Top Two Columns: Benefits & Key Factors */}
        <div className="flex flex-col md:flex-row justify-between gap-12">
          {/* Benefits */}
          <div className="flex-1">
            <h2 className="text-2xl font-semibold mb-6">Benefits</h2>
            <ul className="space-y-6 text-sm md:text-base text-justify">
              {[
                {
                  title: "Social Engagement:",
                  text: "Esports provides opportunities for students to connect, communicate, and collaborate in both competitive and casual settings."
                },
                {
                  title: "Skills Development:",
                  text: "Participating in esports develops teamwork, discipline, communication, strategy, and time management skills."
                },
                {
                  title: "Educational Potential:",
                  text: "Esports can help students develop critical thinking, problem solving, and creativity."
                }
              ].map(({ title, text }, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <img src="./icons.png"alt="icon" className="w-4 h-4 mt-1" />
                  <span><strong>{title}</strong> {text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Key Factors */}
          <div className="flex-1">
            <h2 className="text-2xl font-semibold mb-6">Key Factors</h2>
            <ul className="space-y-6 text-sm md:text-base text-justify">
              {[
                {
                  title: "Educational Potential:",
                  text: "Esports can be used as an educational tool to teach teamwork, communication, and critical thinking."
                },
                {
                  title: "Evaluation and Career Pathways:",
                  text: "Esports helps identify student strengths and create evaluation systems that support career pathways."
                },
                {
                  title: "Infrastructure and Support:",
                  text: "Providing facilities, technology, mentorship, and support for students is essential for growth."
                }
              ].map(({ title, text }, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <img src="./icons.png" alt="icon" className="w-4 h-4 mt-1" />
                  <span><strong>{title}</strong> {text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
<div className="flex flex-col md:flex-row justify-between gap-12">
          {/* Benefits */}
          <div className="flex-1">
            <h2 className="text-2xl font-semibold mb-6">Benefits</h2>
            <ul className="space-y-6 text-sm md:text-base text-justify">
              {[
                {
                  title: "Market Potential:",
                  text: "The teenage demographic represents a significant target market for Esports. With a growing interest in video games and competitive gaming, teenagers offer a valuable audience for Esports organizations, sponsors, and advertisers. Ghetto community faces numerous challenges, including limited access to resources, high crime rates, unemployment, and limited educational opportunities. Understanding these needs is crucial for developing a tailored solution that addresses the specific issues faced by individuals in these communities."
                },
                {
                  title: "Innovative System:",
                  text: "The Petabyte Esports G2G focuses on creating a community- driven project that combines technology, education, and entrepreneurship to empower youths and uplift the ghetto community. This project aims to provide accessible resources, skill development programs, and opportunities for economic growth through diverse esport gaming activities."
                },
                {
                  title: "Market Potential:",
                  text: " The teenage demographic represents a significant target market for Esports. With a growing interest in video games and competitive gaming, teenagers offer a valuable audience for Esports organizations, sponsors, and advertisers. "
                },
               
              ].map(({ title, text }, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <img src="./icons.png"alt="icon" className="w-4 h-4 mt-1" />
                  <span><strong>{title}</strong> {text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Key Factors */}
          <div className="flex-1">
            <h2 className="text-2xl font-semibold mb-6">Key Factors</h2>
            <ul className="space-y-6 text-sm text-justify md:text-base">
              {[
                {
                  title: "Empowerment through Education:",
                  text:"Education plays a vital role in breaking the cycle of poverty. The innovative idea aims to provide educational programs tailored to the specific needs of the ghetto community, offering skill training, vocational courses, and mentorship opportunities that enhance employability and entrepreneurship prospects. Petabyte Esports G2G can provide avenues for teenagers to pursue academic interests. Sponsorship opportunities will be available for outstanding youths, as this project will serve as a bridge between academic pursuits and passion for gaming."
                },
                {
                  title: "Career Pathways, Recognition, and Validation: ",
                  text: "The Esports industry presents various career pathways for teenagers. Beyond professional gaming, careers such as Esports management, event production, content creation, coaching, and game development offer promising opportunities for those passionate about Esports. Recognizing Esports as a legitimate and valuable pursuit can enhance teenagers' self-esteem and motivation. Acknowledging their achievements in Esports gaming through awards, scholarships, and tournaments can encourage their continued involvement and personal growth.  "
                },
                {
                  title: "Technology Integration:",
                  text: "Leveraging technology, such as mobile applications or online platforms, will bridge gaps and improve access to information, resources, and services within the ghetto community. Digital tools can facilitate communication, educational content delivery, job searching, and networking. "
                }
              ].map(({ title, text }, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <img src="./icons.png" alt="icon" className="w-4 h-4 mt-1" />
                  <span><strong>{title}</strong> {text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div> 
    </section>
 </div>
 <div  className="text-white"
  style={{
    backgroundImage: "url('/gamer1.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "114vh",
  }}
></div>
 <div  className="py-10 bg-black text-white"
  style={{
    backgroundImage: "url('/foundationabtbg.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "100%",
  }}
>
 

       <section className="bg-black text-white py-12 px-6 md:px-16">
         <h2 className="text-3xl  font-semibold mb-6">Recommendations</h2>
      <div className="max-w-7xl mx-auto space-y-16">

        {/* Top Two Columns: Benefits & Key Factors */}
        <div className="flex flex-col pt-10  md:flex-row justify-between gap-12">
          {/* Benefits */}
          <div className="flex-1">
            <h2 className="text-2xl font-semibold mb-6">Benefits</h2>
            <ul className="space-y-6 text-sm md:text-base text-justify">
              {[
                {
                  title: "Needs Assessment:",
                  text: "Conduct a comprehensive needs assessment to identify the specific challenges, aspirations, and opportunities within the target ghetto community. Engage with community members, local leaders, and organizations to gather insights and understand the most pressing issues and how Petabyte Esports G2G can be effective in solving their challenges. "
                },
                {
                  title: "Responsible Gaming:",
                  text: " Encouraging responsible gaming habits is essential. Promoting healthy screen time limits, emphasizing the importance of physical activity, andeducating teenagers about online safety and responsible online behavior will ensure a balanced approach to Esports gaming. "
                },
                {
                  title: "Partneership Development:",
                  text: "Foster collaborations with local organizations, NGOs, educational institutions, businesses, and government agencies to leverage their expertise, resources, and networks. Establishing strong partnerships will enhance the project's impact and sustainability. "
                }
                
              ].map(({ title, text }, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <img src="./icons.png"alt="icon" className="w-4 h-4 mt-1" />
                  <span><strong>{title}</strong> {text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Key Factors */}
          <div className="flex-1">
            <h2 className="text-2xl font-semibold mb-6">Key Factors</h2>
            <ul className="space-y-6 text-sm md:text-base text-justify">
              {[
                {
                  title: "Educational Skill Development:",
                  text: " Design and implement educational programs that cater to the specific needs of the ghetto community, that can run side by side with Petabyte Esports G2G. These programs will focus on developing practical skills, fostering entrepreneurship, and providing mentorship opportunities to empower the youths to improve their mental well-being."
                },
                {
                  title: "Community Engagement:",
                  text: "Active community participation and involvement are crucial for the success and sustainability of the Petabyte Esports G2G.Implement outreach initiatives, community forums, and feedback mechanisms to ensure that the project remains responsive to the community's evolving needs and aspirations. "
                },
                {
                  title: "  Technology Infrastructure:",
                  text: "Develop an accessible and user-friendly technology infrastructure (Petabyte Esports G2G). "
                }
              ].map(({ title, text }, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <img src="./icons.png" alt="icon" className="w-4 h-4 mt-1" />
                  <span><strong>{title}</strong> {text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
 </div>
</section>
 <div className="max-w-6xl mx-auto t-5 flex flex-col md:flex-row items-center justify-between px-6 md:px-12 h-full">
        {/* LEFT - TEXT */}
        <div className=" mx-5 md:w-1/2">
  <p className="text-sm text-justify mb-4">
           By addressing the specific challenges faced by the ghetto community through an innovative solution that combines technology, education, and entrepreneurship, Petabyte Esports G2G will empower youths, foster economic growth, and improve the overall quality of life. This idea has the potential to create a positive and lasting impact on the ghetto community by providing accessible resources, skill development opportunities, and pathways to economic empowerment.
          </p>
         
        </div>
  {/* RIGHT - IMAGE*/}
        <div className="relative md:w-1/2  md:mt-0">
          {/* Gamer Image */}
          <img
            src="./foundation2.png"
            alt="Gamer"
            className="rounded-md w-full max-w-md mx-auto relative z-10"
          />  
</div></div>
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
    </footer></div>
           
        );
};

export default FoundationPage;  