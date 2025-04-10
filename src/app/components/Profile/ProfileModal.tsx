import { Share } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { BiSolidMessageRoundedDots } from "react-icons/bi";

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  profileImage: string | null;
  profileName: string;
}

const ProfileModal: React.FC<ProfileModalProps> = ({ isOpen, onClose, profileImage, profileName }) => {
  const modalRef = useRef<HTMLDivElement>(null);
   const [email, setEmail] = useState<string>("tasrintasmira09@gmail.com");

  const user = {
    name: "Tasmira Tashu",
  };
  const firstLetter = user.name.charAt(0).toUpperCase();

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const profileNameElement = document.getElementById("profile-name");
  
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node) &&
        event.target !== profileNameElement 
      ) {
        onClose();
      }
      const storedEmail = window.localStorage.getItem("userEmail");
      if (storedEmail) {
        setEmail(storedEmail);
      }
    }
  
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
  
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);
  

  if (!isOpen) return null;

  return (
    <div 
      className="absolute top-16 left-[22rem] flex items-center justify-center z-50"
      onClick={onClose} 
    >
      <div
        id="profile-modal"
        ref={modalRef}
        className="bg-gray-200 rounded-lg shadow-lg px-6 py-14 w-72 relative"
        onClick={(e) => e.stopPropagation()} 
      >
        {/* Close Button */}
        <div className="absolute top-3 right-3 flex space-x-2">
          <button className="text-gray-500 hover:text-gray-700">
            <Share size={18} />
          </button>
        </div>

        {/* Profile Section */}
        <div className="flex flex-col items-center">
          <div className="w-20 h-20 rounded-full overflow-hidden bg-gray-300">
            {profileImage ? (
              <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-r from-green-400 to-blue-500 text-white text-2xl font-bold">
                 {firstLetter}
              </div>
            )}
          </div>
          <h2 className="font-semibold text-gray-800 mt-2">{profileName}</h2>
          <button className="mt-2 px-3 py-1 border border-gray-400 rounded-lg text-sm text-gray-600 hover:bg-gray-100">
            + Status
          </button>
        </div>

        {/* Bio Placeholder */}
        <p className="text-gray-500 text-sm text-center mt-2">Say something about yourself...</p>

        {/* Message Button */}
        <button className="w-full mt-3 py-2 text-sm flex items-center justify-center bg-white rounded-lg text-gray-700 hover:bg-gray-50">
        <BiSolidMessageRoundedDots className="mr-1 text-base"/> Message
        </button>

        {/* Contact Info */}
        <div className="mt-12">
        <div className="flex mt-4 text-sm">
          <p className="text-gray-600 mr-2">Email</p>
          <a href="" className="text-blue-600 hover:underline">
          {email || "No email set"}
          </a>
        </div>

        <div className="flex mt-2 text-sm">
          <p className="text-gray-600 mr-2">Profile Link</p>
          <button className="text-blue-600 hover:underline">Copy Link</button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileModal;