"use client";

import { FiX, FiUsers, FiBriefcase, FiUser } from "react-icons/fi";

export default function AccountModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white w-96 rounded-2xl shadow-lg p-5 relative">
        <button className="absolute top-3 right-3 text-gray-500" onClick={onClose}>
          <FiX size={20} />
        </button>
        <h2 className="text-lg font-semibold text-gray-900">Log into more accounts</h2>
        <div className="mt-4 space-y-3">
          <div className="flex items-center p-3 text-sm border text-black rounded-lg cursor-pointer hover:bg-gray-100">
            <FiUsers className="text-gray-700 mr-3" size={20} />
            <span>Join Existing Organization</span>
          </div>
          <div className="flex items-center p-3 text-sm border text-black rounded-lg cursor-pointer hover:bg-gray-100">
            <FiBriefcase className="text-gray-700 mr-3" size={20} />
            <span>Set Up New Organization</span>
          </div>
          <div className="flex items-center p-3 text-sm border text-black rounded-lg cursor-pointer hover:bg-gray-100">
            <FiUser className="text-gray-700 mr-3" size={20} />
            <span>Personal Use</span>
          </div>
        </div>
        <div className="mt-4 text-center text-sm text-black">
          <a href="#" className="text-blue-600 text-sm">Log in with another email or phone number &gt;</a>
        </div>
      </div>
    </div>
  );
}
