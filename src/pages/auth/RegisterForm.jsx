
import React, { useState } from "react";
import { Link } from "react-router-dom";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    city: "",
    email: "",
    phone: "",
    address: "",
    nin: "",
  });

  const [showResetModal, setShowResetModal] = useState(false);
  const [forgotInput, setForgotInput] = useState("");
  const [showOtpModal, setShowOtpModal] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const openResetModal = () => setShowResetModal(true);
  const closeResetModal = () => {
    setShowResetModal(false);
    setForgotInput("");
  };

  const handleForgotChange = (e) => setForgotInput(e.target.value);

  const handleResetSubmit = () => {
    if (forgotInput.trim() === "") {
      alert("Please enter your email or phone number.");
      return;
    }
    alert(`Reset instructions sent to: ${forgotInput}`);
    closeResetModal();
  };

  const openOtpModal = () => setShowOtpModal(true);
  const closeOtpModal = () => setShowOtpModal(false);

  const handleRetryOtp = () => {
    alert("Retrying OTP...");
  };

  return (
    <div className="min-h-screen bg-[#1A1A1A] flex items-center justify-center px-4 py-10">
      <div
        className="min-h-screen mx-auto justify-center items-center text-white p-8 md:p-10 rounded-xl w-full max-w-3xl"
        style={{
          backgroundImage: "url('/foundationabtbg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "100%",
        }}
      >
        <h2 className="text-2xl font-bold mb-1">REGISTER</h2>
        <p className="text-sm text-gray-400 mb-6">Enter your details to create a new account</p>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm mb-1">Full name:</label>
            <div className="flex gap-2">
              <input
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                type="text"
                placeholder="Enter your name"
                className={`w-1/2 p-2 rounded-full outline-none ${
                  formData.firstName ? "border border-red-500 text-white bg-[#121212]" : "bg-[#121212] text-gray-400"
                }`}
              />
              <input
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                type="text"
                placeholder="Enter your name"
                className={`w-1/2 p-2 rounded-full outline-none ${
                  formData.lastName ? "border border-red-500 text-white bg-[#121212]" : "bg-[#121212] text-gray-400"
                }`}
              />
            </div>

            <label className="block text-sm mt-4 mb-1">Gender:</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className={`w-full p-2 rounded-full outline-none ${
                formData.gender ? "border border-red-500 text-white bg-[#121212]" : "bg-[#121212] text-gray-400"
              }`}
            >
              <option value="">Select your gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>

          <div>
            <label className="block text-sm mb-1">City:</label>
            <select
              name="city"
              value={formData.city}
              onChange={handleChange}
              className={`w-full p-2 rounded-full outline-none ${
                formData.city ? "border border-red-500 text-white bg-[#121212]" : "bg-[#121212] text-gray-400"
              }`}
            >
              <option value="">Select your city</option>
              <option value="Lagos">Lagos</option>
              <option value="Abuja">Abuja</option>
            </select>

            <label className="block text-sm mt-4 mb-1">Residential Address:</label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              rows={4}
              placeholder="Enter your address"
              className={`w-full p-2 rounded-xl outline-none ${
                formData.address ? "border border-red-500 text-white bg-[#121212]" : "bg-[#121212] text-gray-400"
              }`}
            />
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-6">
          <label className="block text-sm mb-1">Email Address:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your Email Address"
            className={`w-full p-2 rounded-full outline-none ${
              formData.email ? "border border-red-500 text-white bg-[#121212]" : "bg-[#121212] text-gray-400"
            } mb-4`}
          />

          <label className="block text-sm mb-1">Phone Number:</label>
          <div
            className={`flex items-center gap-2 p-2 rounded-full outline-none ${
              formData.phone ? "border border-red-500" : ""
            } bg-[#121212]`}
          >
            <span className="text-green-500">+234</span>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="090 000 00000"
              className="w-full bg-transparent outline-none"
            />
          </div>

          <label className="block text-sm mt-4 mb-1">National Identification Number:</label>
          <input
            type="text"
            name="nin"
            value={formData.nin}
            onChange={handleChange}
            placeholder="Enter your NIN"
            className={`w-full p-2 rounded-full outline-none ${
              formData.nin ? "border border-red-500 text-white bg-[#121212]" : "bg-[#121212] text-gray-400"
            }`}
          />
        </div>

        <div className="mt-6 flex flex-col items-start md:items-center md:flex-row md:justify-between gap-4">
          <button className="bg-red-600 px-6 py-2 rounded-full text-white font-semibold hover:bg-red-700">
            Register
          </button>
          <button
            onClick={openOtpModal}
            className="bg-green-600 px-4 py-2 rounded-full text-white font-semibold hover:bg-green-700"
          >
            OTP Verification
          </button>

          <p className="mt-2 md:mt-0 text-sm text-gray-400">
            Already have an account?{" "}
            <Link to="/Login" className="text-red-500 cursor-pointer">
              Sign
            </Link>
          </p>
        </div>
      </div>



      {/* OTP Modal (assuming you have its JSX here or in a component you keep) */}
      {showOtpModal && (
        <div
          onClick={closeOtpModal}
          className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm flex items-center justify-center z-50"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-[#121212] rounded-2xl px-8 py-6 max-w-sm w-full text-white shadow-xl"
          >
            <h3 className="text-xl font-semibold mb-4 text-center">OTP Verification</h3>
            <p className="text-gray-400 mb-4 text-center">
              Enter the OTP sent to your phone/email.
            </p>
            {/* Add your OTP input fields and logic here */}
            <div className="flex justify-between gap-2 mb-6">
              {[...Array(4)].map((_, i) => (
                <input
                  key={i}
                  type="text"
                  maxLength={1}
                  className="w-14 h-14 text-center rounded-xl bg-[#1A1A1A] border border-gray-600 text-white text-2xl"
                />
              ))}
            </div>
            <button
              onClick={() => {
                alert("Verifying OTP...");
                closeOtpModal();
              }}
              className="w-full bg-green-600 hover:bg-green-700 transition-colors duration-200 text-white font-semibold py-3 rounded-full mb-3"
            >
              Verify OTP
            </button>
           <button
  onClick={async () => {
    try {
      // Call your retry OTP API endpoint here
      const response = await fetch('/api/retry-otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        // If you need to send data (e.g., user ID or phone/email), include it here:
        // body: JSON.stringify({ userId: someUserId }),
      });

      if (!response.ok) {
        throw new Error('Failed to retry OTP');
      }

      const data = await response.json();
      // Optionally handle success, e.g., show a success message
      alert('OTP resent successfully!');
    } catch (error) {
      // Handle errors (network, server, etc.)
      alert('Error retrying OTP: ' + error.message);
    }
  }}
  className="w-full bg-gray-700 hover:bg-gray-600 transition-colors duration-200 text-white font-semibold py-3 rounded-full mb-3"
>
  Retry OTP
</button>

            <button
              onClick={closeOtpModal}
              className="w-full bg-gray-700 hover:bg-gray-600 transition-colors duration-200 text-white font-semibold py-3 rounded-full"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RegisterForm;
