
import React, { useState, useEffect } from "react";

const OtpVerificationModal = ({ onClose, onRetry }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger fade/slide-in on mount
    setIsVisible(true);
  }, []);

  const handleClose = () => {
    // Trigger fade/slide-out
    setIsVisible(false);
    // Wait for animation before calling onClose
    setTimeout(() => {
      onClose();
    }, 300);
  };

  return (
    <div
      onClick={handleClose}
      className={`fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`bg-[#121212] p-6 rounded-xl w-[90%] max-w-md text-white text-center
          transform transition-transform duration-300 ${
            isVisible ? "translate-y-0 opacity-100" : "-translate-y-6 opacity-0"
          }`}
      >
        <h3 className="text-lg font-semibold mb-2">OTP Verification</h3>
        <p className="text-sm text-gray-400 mb-4">
          An 8-digit code has been sent to +234 ******3210
        </p>

        <div className="flex justify-center gap-2 mb-4">
          {[...Array(4)].map((_, i) => (
            <input
              key={i}
              type="text"
              maxLength={1}
              className="w-10 h-12 bg-black border border-gray-700 rounded-md text-center text-white"
            />
          ))}
        </div>

        <p className="text-xs text-red-500 mb-2">33s</p>

        <button
          onClick={onRetry}
          className="w-full py-2 bg-red-600 hover:bg-red-700 rounded-full mb-3 font-semibold"
        >
          Try again
        </button>
        <button
          onClick={handleClose}
          className="text-sm text-white border border-gray-600 rounded-full w-full py-2"
        >
          Reset Password
        </button>
      </div>
    </div>
  );
};

export default OtpVerificationModal;
