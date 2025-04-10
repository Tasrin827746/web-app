"use client";

import { useRef, useEffect } from "react";
import { FiEdit2, FiExternalLink, FiCamera } from "react-icons/fi";

export default function ProfileMenu({
  profileImage,
  profileName,
  setIsEditingName,
  setImageToEdit,
  isOpen,
  setIsOpen,
}: {
  profileImage: string | null;
  profileName: string;
  setIsEditingName: (value: boolean) => void;
  setImageToEdit: (file: File | null) => void;
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const firstLetter = profileName.charAt(0);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        (dropdownRef.current && dropdownRef.current.contains(event.target as Node)) ||
        (buttonRef.current && buttonRef.current.contains(event.target as Node)) ||
        (fileInputRef.current && fileInputRef.current.contains(event.target as Node))
      ) {
        return;
      }
      setIsOpen(false);
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [setIsOpen]);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setImageToEdit(file);
    }
  };

  return (
    <>
      {isOpen && (
        <div
          ref={dropdownRef}
          className="absolute left-0 mt-2 w-80 bg-white shadow-lg rounded-2xl p-4 border border-gray-200 z-50"
        >
          {/* Profile Info */}
          <div className="flex flex-col gap-3 relative group">
            <div className="flex items-center gap-3">
              <div className="relative group w-14 h-14">
                {profileImage ? (
                  <img
                    src={profileImage}
                    alt="Profile"
                    className="w-14 h-14 rounded-full object-cover"
                  />
                ) : (
                  <div className="w-14 h-14 flex items-center justify-center text-lg font-medium text-white bg-gradient-to-r from-pink-500 to-purple-500 rounded-full">
                    {firstLetter}
                  </div>
                )}

                {/* Camera Icon */}
                <div
                  className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    fileInputRef.current?.click();
                  }}
                >
                  <FiCamera className="text-white w-5 h-5" />
                </div>

                {/* Hidden File Input */}
                <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                className="hidden"
                onChange={handleImageChange}
              />
              </div>

              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h2 className="font-semibold text-gray-800">{profileName}</h2>
                  <FiEdit2
                    className="text-gray-500 cursor-pointer"
                    size={14}
                    onClick={() => setIsEditingName(true)}
                  />
                </div>
                <p className="text-sm text-gray-500">Tashu&apos;s org</p>
                <button className="mt-2 w-1/3 border border-gray-300 text-gray-600 py-0.5 rounded-lg text-sm hover:bg-gray-100">
                  + Status
                </button>
              </div>
            </div>

            <input
              type="text"
              placeholder="Say something about yourself..."
              className="mt-1 w-full bg-gray-200 rounded-lg py-1 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Menu Options */}
          <ul className="mt-4 text-sm text-gray-700">
            <li className="py-1 cursor-pointer hover:bg-gray-100 px-3 rounded-lg">
              Profile
            </li>
            <li className="py-1 cursor-pointer hover:bg-gray-100 px-3 rounded-lg">
              My QR Code and Profile Link
            </li>
            <li className="py-1 cursor-pointer flex justify-between items-center hover:bg-gray-100 px-3 rounded-lg">
              Add Account <span className="w-2 h-2 bg-red-500 rounded-full"></span>
            </li>
            <hr className="my-2" />
            <li className="py-1 cursor-pointer flex justify-between items-center hover:bg-gray-100 px-3 rounded-lg">
              Contact Us <FiExternalLink size={14} />
            </li>
            <li className="py-1 cursor-pointer hover:bg-gray-100 px-3 rounded-lg">
              Settings
            </li>
            <li className="py-1 cursor-pointer hover:bg-gray-100 px-3 rounded-lg">
              Log Out
            </li>
            <hr className="my-2" />
            <li className="py-1 cursor-pointer flex justify-between items-center hover:bg-gray-100 px-3 rounded-lg">
              Admin Console <FiExternalLink size={14} />
            </li>
          </ul>
        </div>
      )}
    </>
  );
}
