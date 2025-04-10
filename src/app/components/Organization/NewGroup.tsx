"use client";

import { useState } from "react";

interface NewGroupModalProps {
  onClose: () => void;
}

const NewGroupModal: React.FC<NewGroupModalProps> = ({ onClose }) => {
  const [groupType, setGroupType] = useState("Chat");
  const [groupName, setGroupName] = useState("");

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white w-full max-w-lg rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-semibold mb-4">New Group</h2>

        {/* Group Type Selection */}
        <div className="mb-4">
          <label className="font-medium text-gray-700">Group type</label>
          <div className="flex space-x-4 mt-2">
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="radio"
                name="groupType"
                value="Chat"
                checked={groupType === "Chat"}
                onChange={() => setGroupType("Chat")}
                className="hidden"
              />
              <div className={`w-5 h-5 rounded-full border-2 ${groupType === "Chat" ? "bg-blue-500 border-blue-500" : "border-gray-400"}`} />
              <span>Chat</span>
            </label>

            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="radio"
                name="groupType"
                value="Topic"
                checked={groupType === "Topic"}
                onChange={() => setGroupType("Topic")}
                className="hidden"
              />
              <div className={`w-5 h-5 rounded-full border-2 ${groupType === "Topic" ? "bg-blue-500 border-blue-500" : "border-gray-400"}`} />
              <span>Topic</span>
            </label>
          </div>
        </div>

        {/* Group Name */}
        <div className="mb-4">
          <label className="font-medium text-gray-700">Group name</label>
          <input
            type="text"
            placeholder="Set group name (optional)"
            value={groupName}
            onChange={(e) => setGroupName(e.target.value)}
            className="w-full mt-2 p-2 border rounded-md"
          />
        </div>

        {/* Group Photo */}
        <div className="mb-4">
          <label className="font-medium text-gray-700">Group photo</label>
          <button className="block mt-2 text-blue-600 hover:underline">Click to edit</button>
        </div>

        {/* Members Section */}
        <div className="mb-4">
          <label className="font-medium text-gray-700">Members</label>
          <div className="mt-2 p-2 border rounded-md">
            <input type="text" placeholder="Search Contacts..." className="w-full p-2 border rounded-md" />
            <div className="mt-2">
              <button className="flex items-center w-full p-2 hover:bg-gray-100 rounded">
                <span className="mr-2">📂</span> Organization Contacts
              </button>
              <button className="flex items-center w-full p-2 hover:bg-gray-100 rounded">
                <span className="mr-2">🌎</span> External Contacts
              </button>
              <button className="flex items-center w-full p-2 hover:bg-gray-100 rounded">
                <span className="mr-2">👥</span> Groups I Manage
              </button>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end space-x-4">
          <button onClick={onClose} className="px-4 py-2 border rounded-md">Cancel</button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md">Create (Ctrl+Enter)</button>
        </div>
      </div>
    </div>
  );
};

export default NewGroupModal;
