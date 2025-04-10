"use client";

import { useState, useRef, useEffect } from "react";
import AvatarEditor from "react-avatar-editor";
import { FiEdit2, FiExternalLink, FiCamera } from "react-icons/fi";

export default function ProfileDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [profileName, setProfileName] = useState("Tasmira Tasrin");
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [imageToEdit, setImageToEdit] = useState<File | null>(null);
  const [scale, setScale] = useState(1);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const editorRef = useRef<AvatarEditor>(null);
  const [isEditingName, setIsEditingName] = useState(false);
  const [newName, setNewName] = useState(profileName);

  const user = {
    name: "Tasmira Tashu",
  };

  const firstLetter = user.name.charAt(0).toUpperCase();

  // Load profile image from localStorage
  useEffect(() => {
    const storedName = localStorage.getItem("profileName");
    const storedImage = localStorage.getItem("profileImage");
    if (storedName) setProfileName(storedName);
    if (storedImage) setProfileImage(storedImage);
  }, []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        imageToEdit ||
        (dropdownRef.current &&
          dropdownRef.current.contains(event.target as Node)) ||
        (buttonRef.current && buttonRef.current.contains(event.target as Node))
      ) {
        return;
      }
      setIsOpen(false);
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [imageToEdit]);

  // Handle Image Selection
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setImageToEdit(file);
    }
  };

  // Save Cropped Image
  const handleSave = () => {
    if (editorRef.current) {
      const canvas = editorRef.current.getImageScaledToCanvas();
      const newProfileImage = canvas.toDataURL(); 
      setProfileImage(newProfileImage); 
      localStorage.setItem("profileImage", newProfileImage); 
      setImageToEdit(null);
    }
  };

  const handleSaveName = () => {
    setProfileName(newName);
    localStorage.setItem("profileName", newName);
    setIsEditingName(false);
  };

  return (
    <div className="relative">
      {/* Profile Icon (Trigger) */}
      <button
        ref={buttonRef}
        onClick={() => setIsOpen((prev) => !prev)}
        className="w-10 h-10 flex items-center justify-center rounded-full text-lg font-medium text-white bg-gradient-to-r from-pink-500 to-purple-500 focus:outline-none"
      >
        {profileImage ? (
          <img
            src={profileImage}
            alt="Profile"
            className="w-full h-full rounded-full border border-gray-300"
          />
        ) : (
          <span className="text-white">{firstLetter}</span>
        )}
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div
          ref={dropdownRef}
          className="absolute left-0 mt-2 w-80 bg-white shadow-lg rounded-2xl p-4 border border-gray-200 z-50"
        >
          {/* Profile Info */}
          <div className="flex items-center gap-3 relative group">
            <div className="relative">
              {profileImage ? (
                <img
                  src={profileImage}
                  alt="Profile"
                  className="w-12 h-12 rounded-full"
                />
              ) : (
                <div className="w-12 h-12 flex items-center justify-center text-lg font-medium text-white bg-gradient-to-r from-pink-500 to-purple-500 rounded-full">
                  {firstLetter}
                </div>
              )}

              {/* Camera Icon on Hover */}
              <div
                className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                onClick={() => fileInputRef.current?.click()}
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
              <button className="mt-3 w-1/2 border border-gray-300 text-gray-600 py-1.5 rounded-lg text-sm hover:bg-gray-100">
                + Status
              </button>
            </div>
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

      {/* Edit Name Modal */}
      {isEditingName && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-5 rounded-lg shadow-lg w-1/2">
            <h2 className="text-lg font-semibold mb-3 text-black">Personal Information</h2>
            <div> <div className="mb-4">
              <label className="text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                className="w-full mt-1 px-3 py-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-400"
              />
            </div>
            <div className="mb-4">
              <label className="text-sm font-medium text-gray-700">
                My Alias
              </label>
              <input
                type="text"
                disabled
                placeholder="Enter content"
                className="w-full mt-1 px-3 py-1 border border-gray-300 rounded-lg bg-gray-100 text-gray-500 cursor-not-allowed"
              />
            </div>
            </div>

            <div className="border border-b-0 border-gray-300 my-6"></div>

            <div className="mb-4">
              <label className="text-sm font-medium text-gray-700">
                Organization
              </label>
              <input
                type="text"
                disabled
                value="John Doe's org"
                className="w-full mt-1 px-3 py-1 border border-gray-300 rounded-lg bg-gray-100 text-gray-500 cursor-not-allowed"
              />
            </div>

            <div className="flex justify-end gap-3 mt-4">
              <button
                onClick={() => setIsEditingName(false)}
                className="px-4 py-2 bg-gray-300 rounded-lg"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveName}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Image Editing Modal */}
      {imageToEdit && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-5 rounded-lg shadow-lg w-96">
            <h2 className="text-lg font-semibold mb-3">Edit Profile Picture</h2>
            
            <AvatarEditor
              ref={editorRef}
              image={URL.createObjectURL(imageToEdit)}
              width={150}
              height={150}
              border={10}
              borderRadius={100}
              scale={scale}
            />
            
            {/* Zoom Slider */}
            <input
              type="range"
              min="1"
              max="2"
              step="0.01"
              value={scale}
              onChange={(e) => setScale(parseFloat(e.target.value))}
              className="w-full mt-3"
            />

            <div className="flex justify-end gap-3 mt-4">
              <button
                onClick={() => setImageToEdit(null)}
                className="px-4 py-2 bg-gray-300 rounded-lg"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
