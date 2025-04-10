import { useEffect, useRef, useState } from "react";
import { FaCamera } from "react-icons/fa";
import EditProfilePicture from "../EditProfilePicture";

export default function AccountSettings() {
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [imageToEdit, setImageToEdit] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [profileName, setProfileName] = useState<string>("Tasmira Tasrin");
  const [email, setEmail] = useState<string>("tasrintasmira09@gmail.com");

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const storedImage = window.localStorage.getItem("profileImage");
      if (storedImage) {
        setProfileImage(storedImage);
      }
      const storedName = window.localStorage.getItem("profileName");
      if (storedName) {
        setProfileName(storedName);
      }
      const storedEmail = window.localStorage.getItem("userEmail");
      if (storedEmail) {
        setEmail(storedEmail);
      }
    }
  }, []);

  const handleProfilePictureClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setImageToEdit(file);
    }
  };

  return (
    <div>
      <h3 className="text-xl font-medium">My Account</h3>
      <div className="flex items-center mt-5 relative">
        <div 
          className="w-10 h-10 bg-green-500 text-white flex items-center justify-center rounded-full text-xl overflow-hidden cursor-pointer"
          onClick={handleProfilePictureClick} 
        >
          {profileImage ? (
            <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
          ) : (
            profileName.charAt(0)
          )}
        </div>

        <div className="ml-3 text-sm">
          <p className="font-semibold">{profileName}</p>
          <p className="text-gray-500">{email || "No email set"}</p>
        </div>

        <button
          onClick={handleProfilePictureClick} 
          className="absolute bottom-0 left-6 bg-gray-800 p-1 rounded-full text-white text-xs hover:bg-gray-700 transition"
        >
          <FaCamera />
        </button>

        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          className="hidden"
          onChange={handleFileChange}
        />
      </div>
      <div className=" mt-8">
        <h2 className="text-gray-900 font-medium">Account And Security</h2>
      <p className="text-gray-500 text-sm">
        Ensure your account security via Account Management, Password Settings, Two-Step Verification, Manage Devices, and other functions.
      </p>

      </div>
      <button className="mt-4 bg-blue-600 text-white px-4 py-1 text-sm rounded-lg flex items-center">
        Go to Account Security Center
      </button>

      {imageToEdit && (
        <EditProfilePicture
          imageToEdit={imageToEdit}
          setImageToEdit={setImageToEdit}
          setProfileImage={setProfileImage}
        />
      )}
    </div>
  );
}
