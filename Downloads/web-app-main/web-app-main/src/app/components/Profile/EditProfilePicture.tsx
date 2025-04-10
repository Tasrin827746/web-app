"use client";

import AvatarEditor from "react-avatar-editor";
import { useRef, useState, useEffect } from "react";

export default function EditProfilePicture({
  imageToEdit,
  setImageToEdit,
  setProfileImage,
}: {
  imageToEdit: File;
  setImageToEdit: (file: File | null) => void;
  setProfileImage: (image: string) => void;
}) {
  const editorRef = useRef<AvatarEditor>(null);
  const [scale, setScale] = useState(1);
  const [isClient, setIsClient] = useState(false); 

  useEffect(() => {
    setIsClient(true); 
  }, []);

  const handleSave = () => {
    if (editorRef.current) {
      const canvas = editorRef.current.getImageScaledToCanvas();
      const newProfileImage = canvas.toDataURL();

      setProfileImage(newProfileImage);

      if (isClient) {
        localStorage.setItem("profileImage", newProfileImage);
      }

      // Close the modal
      setImageToEdit(null);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-5 rounded-2xl shadow-xl">
        <h2 className="text-lg font-semibold mb-4 text-black">Edit Profile Picture</h2>

        {/* Avatar Editor */}
        {imageToEdit && isClient && ( 
          <AvatarEditor
            ref={editorRef}
            image={URL.createObjectURL(imageToEdit)}
            width={150}
            height={150}
            border={10}
            borderRadius={100}
            scale={scale}
          />
        )}

        {/* Zoom Slider */}
        <div className="mt-4 flex items-center gap-4">
          <input
            type="range"
            min="1"
            max="3"
            step="0.1"
            value={scale}
            onChange={(e) => setScale(parseFloat(e.target.value))}
            className="w-full cursor-pointer"
          />
          <span className="text-gray-600 text-sm">Zoom</span>
        </div>

        {/* Action Buttons */}
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
  );
}
