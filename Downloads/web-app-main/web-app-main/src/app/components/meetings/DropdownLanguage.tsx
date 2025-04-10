'use client';
import { usePathname } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react'

const DropdownLanguage = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const pathname = usePathname();
  
    useEffect(() => {
      setIsOpen(false);
    }, [pathname]);
  
    const handleDocumentClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
  
    useEffect(() => {
      document.addEventListener("mousedown", handleDocumentClick);
      return () => {
        document.removeEventListener("mousedown", handleDocumentClick);
      };
    }, []);
    const languages = [
        { name: "English", code: "en" },
        { name: "Spanish", code: "es" },
        { name: "French", code: "fr" },
        { name: "German", code: "de" },
        { name: "Chinese", code: "zh" },
        { name: "Japanese", code: "ja" },
        { name: "Korean", code: "ko" },
        { name: "Russian", code: "ru" },
        { name: "Portuguese", code: "pt" },
        { name: "Italian", code: "it" },
        { name: "Dutch", code: "nl" },
        { name: "Arabic", code: "ar" },
        { name: "Hindi", code: "hi" },
        { name: "Bengali", code: "bn" },
        { name: "Turkish", code: "tr" },
        { name: "Vietnamese", code: "vi" },
        { name: "Polish", code: "pl" },
        { name: "Thai", code: "th" },
        { name: "Swedish", code: "sv" },
        { name: "Greek", code: "el" },
      ];
  
    return (
      <div className="relative" ref={dropdownRef}>
        {/* Dropdown Trigger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-defaultText font-medium hover:text-orange-500 focus:outline-none"
        >
          English
          <span className="ml-1">▾</span>
        </button>
  
        {/* Dropdown Menu */}
        {isOpen && (
          <ul
            className="fixed left-0 top-auto mt-4 bg-white border border-gray-200 shadow-lg p-8 grid grid-cols-4 gap-4 z-50"
            style={{
              width: "30vw",
            }}
          >
            {languages.map((language, index) => (
              <li key={index}>
                {language.name}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
}

export default DropdownLanguage