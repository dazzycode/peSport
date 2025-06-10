import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

 import {
  FaHome,
  FaEllipsisH,
  FaEdit

} from 'react-icons/fa';

const PepSportsAI = () => {
  const [messages, setMessages] = useState([
    { from: "user", text: "Hi! How are you" },
    {
      from: "ai",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ullamco laboris nisi ut aliquip ex ea commodo consequat...",
    },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { from: "user", text: input }];
    setMessages(newMessages);
    setInput("");

    setTimeout(() => {
      setMessages([
        ...newMessages,
        {
          from: "ai",
          text: "This is a simulated AI response based on your message.",
        },
      ]);
    }, 1000);
  };

  return (
    <div
      className="relative text-white mt-20 p-6 rounded-lg max-w-xl mx-auto shadow-lg"
      style={{
        backgroundImage: "url('/foundationabtbg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "550px",
      }}
    >
      {/* Logo */}
      <div className="absolute top-4 left-4">
        <img src="/logo-peta.png" alt="PEPSports Logo" className="w-10 h-10" />
      </div>

      {/* Theme + Edit Icons */}
      <div className="absolute top-4 right-4 flex items-center gap-3">
        <Link to="/"> <FaHome /> </Link>  
  
        <div className="w-6 h-6" /><FaEdit />
      </div>

      {/* Title */}
      <h1 className="text-center text-2xl md:text-3xl font-mono font-bold mb-6">
        ASK ME ANYTHING?
      </h1>

      {/* Suggestions */}
      <div className="text-sm text-gray-400 mb-2">Suggestions:</div>
      <div className="flex flex-wrap gap-2 mb-6">
        {["Write Letter", "Summarize", "Help me write", "Code", "More"].map(
          (suggestion, idx) => (
            <button
              key={idx}
              className="bg-gradient-to-r from-purple-600 to-red-600 px-3 py-1 rounded-full text-sm text-white"
            >
              {suggestion}
            </button>
          )
        )}
      </div>

      {/* Chat area */}
      <div className="space-y-4 mb-4 max-h-[300px] overflow-y-auto pr-2">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`flex ${
              msg.from === "user" ? "justify-end" : "justify-start"
            }`}
          >
            {msg.from === "ai" ? (
              <div className="flex items-start gap-2">
                <img
                  src="/logo-peta.png"
                  alt="AI Icon"
                  className="w-6 h-6 rounded-full mt-1"
                />
                <div className="bg-[#1a1a1a] px-4 py-3 rounded-lg max-w-md text-sm">
                  <p>{msg.text}</p>
                  <div className="flex gap-4 text-xs text-gray-400 mt-2">
                    <span>📝</span>
                    <span>📌</span>
                    <span>❤️</span>
                    <span>🔄</span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-gray-700 px-4 py-2 rounded-lg max-w-xs text-sm">
                {msg.text}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Input + Button */}
      <div className="flex mt-4 gap-2 items-center">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          type="text"
          placeholder="Can you..."
          className="flex-1 bg-gray-800 text-white px-4 py-2 rounded-full border border-gray-700 focus:outline-none"
        />
        <button
          onClick={handleSend}
          className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full font-bold"
        >
          Ask Me
        </button>
      </div>
       <div className="absolute top-4 left-4">
          <img src="/logo-peta.png" alt="Logo" className="w-12" />
        </div>

        {/* Edit & Toggle Icons */}
      
        {/* Chat Messages */}
        <div className="mt-20 space-y-6">
          {/* AI message */}
          <div className="flex items-start gap-2">
            <img
              src="/logo-peta.png"
              alt="AI"
              className="w-6 h-6 rounded-full mt-1"
            />
            <div className="bg-[#1a1a1a] p-4 rounded-lg text-sm">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat...
              </p>
              <div className="flex gap-4 text-xs text-gray-400 mt-2">
                <span>📝</span>
                <span>📌</span>
                <span>❤️</span>
                <span>🔄</span>
              </div>
            </div>
          </div>

          {/* User message */}
          <div className="flex pt-10 justify-end">
            <div className="bg-gray-700 px-4 py-2 rounded-lg text-sm">
              Hi! How are you
            </div>
          </div>
        </div>

        {/* Input Section */}
        <div className="flex items-center gap-2 mt-10">
          <input
            type="text"
            placeholder="Send a message"
            disabled
            className="flex-1 bg-[#1a1a1a] text-gray-400 px-4 py-2 rounded-full border border-gray-700 cursor-not-allowed"
          />
          <button className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded-full font-bold text-white">
            Ask Me
          </button>
        </div>
         <div className="absolute top-4 left-4">
          <img src="/logo-peta.png" alt="Logo" className="w-12" />
        </div>
        <div className="space-y-4 mb-6">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}
            >
              {msg.from === "ai" && (
                <div className="flex items-end gap-2">
                  <img
                    src="./logo-peta.png"
                    alt="AI Avatar"
                    className="h-8 w-8 rounded-full"
                  />
                  <div className="bg-gray-900 text-white px-4 py-2 rounded-xl max-w-xs">
                    {msg.loading ? (
                      <FaEllipsisH className="text-lg animate-pulse" />
                    ) : (
                      msg.text
                    )}
                  </div>
                </div>
              )}

              {msg.from === "user" && (
                <div className="bg-gray-700 text-white px-4 py-2 rounded-xl max-w-xs">
                  {msg.text}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="flex gap-2 items-center">
          <input
            type="text"
            placeholder="Send a message"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 px-4 py-2 rounded-full bg-gray-800 text-white placeholder-gray-400 focus:outline-none"
          />
          <button
            onClick={handleSend}
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-full"
          >
            Ask Me
          </button>
        </div>
      </div>
  );
};

export default PepSportsAI;


  