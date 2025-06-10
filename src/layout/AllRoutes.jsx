import EventPage from "../pages/landings/EventPage";
import PepSportsAI from "../pages/ai/PepSportsAI";
import FoundationPage from "../pages/landings/FoundationPage";
import LandingPage from "../pages/landings/LandingPage";
import React from "react";
import { Routes, Route } from "react-router-dom";
import EventDetails from "../pages/landings/EventDetails";
import LoginForm from "../pages/auth/LoginForm";
import RegisterTeam from "../pages/RegisterTeam";
import RegisterForm from "../pages/auth/RegisterForm";
import OtpVerificationModal from "../pages/auth/OtpVerfiicationModal";
import AcademyPage from "../pages/landings/AcademyPage";
import VlogPage from "../pages/landings/VlogPage";
import ForgotPasswordModal from "../pages/auth/ForgotPasswordModal";
import VlogDetails from "../pages/landings/VlogDetails";
import VlogVideos from "../pages/landings/VlogVideos";
import VlogGallery from "../pages/landings/VlogGallery";
const AllRoutes = () => {
  return (
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/Foundation" element={<FoundationPage/>}/>
        <Route path="/Chatbot" element={<PepSportsAI/>}/>
        <Route path="/events" element={<EventPage/>}/>
        <Route path="/Register" element={<RegisterTeam/>}/>
        <Route path="/event/:id" element={<EventDetails />} />
<Route path="/Login" element={<LoginForm/>} />
<Route path="/Signup" element={<RegisterForm/>} />
<Route path="/otpmodal" element={<OtpVerificationModal/>} />
<Route path="/forgotpasswordmodal" element={<ForgotPasswordModal/>} />
        <Route path="/academy" element={<AcademyPage/>}/>
        <Route path="/vlog" element={<VlogPage/>}/>
        <Route path="/vlogdetails" element={<VlogDetails/>}/>
        <Route path="/vlogvideos" element={<VlogVideos/>}/>
                <Route path="/vlogGallery" element={<VlogGallery/>}/>



      </Routes>
  );
};

export default AllRoutes;
