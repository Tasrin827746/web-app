"use client";

import React, { useState, useRef, useEffect } from "react";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLDivElement | null>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setTimeout(() => setIsDropdownOpen(false), 100);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full flex items-center px-6 py-4 border-b bg-white shadow-md z-50">
      {/* Logo */}
      <div className="flex items-center">
        <img src="https://i.ibb.co.com/CzYmGpN/lark-logo.png" alt="Lark Mail Logo" className="h-6 w-6 mr-2" />
        <span className="text-lg font-semibold">Lark Mail</span>
      </div>

      {/* Right Side */}
      <div className="ml-auto flex items-center space-x-4 relative">
        {/* Dropdown Trigger */}
        <div
          ref={buttonRef}
          className="w-6 h-5 flex items-center justify-center rounded-full bg-gray-100 cursor-pointer"
          onClick={() => setIsDropdownOpen((prev) => !prev)}
        >
          <div className="grid grid-cols-3 gap-1">
            {[...Array(9)].map((_, i) => (
              <span key={i} className="w-1.5 h-1.5 bg-black rounded-full"></span>
            ))}
          </div>
        </div>

        {/* Dropdown Menu */}
        {isDropdownOpen && (
          <div
            ref={dropdownRef}
            className="absolute top-full right-0 mt-2 w-64 bg-white shadow-lg rounded-lg p-4 grid grid-cols-3 gap-4 border"
          >
            {[
              { name: "Messenger", icon: "💬" },
              { name: "Calendar", icon: "📅" },
              { name: "Docs", icon: "📄" },
              { name: "Wiki", icon: "📘" },
              { name: "Email", icon: "✉️" },
              { name: "Meetings", icon: "🎥" },
              { name: "Minutes", icon: "📝" },
              { name: "Open Platform", icon: "📦" },
              { name: "App Directory", icon: "🛍️" },
              { name: "Admin", icon: "⚙️" },
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center text-sm cursor-pointer hover:bg-gray-100 p-2 rounded">
                <span className="text-2xl">{item.icon}</span>
                <span>{item.name}</span>
              </div>
            ))}
          </div>
        )}

        {/* Profile Icon */}
        <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gradient-to-br from-pink-500 to-purple-500 text-white">
          TT
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
