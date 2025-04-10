import React, { useState } from "react";

const JoinOrg = ({ onNext, onBack }: { onNext: () => void; onBack: () => void }) => {
  const [loading, setLoading] = useState(false);

  const handleNextStep = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onNext();
    }, 500);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full text-center bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
          Join your Feishu organization
        </h1>
        <p className="text-gray-600 mt-2 text-sm sm:text-base">
          Please enter the invite code or scan the QR code to join the organization.  
          View{' '}
          <a href="#" className="text-blue-600 underline" rel="noopener noreferrer">
            How to join an organization via Invite Code?
          </a>{' '}
          or{' '}
          <a href="#" className="text-blue-600 underline" rel="noopener noreferrer">
            How to join an organization via a QR code?
          </a>
        </p>

        <div className="mt-6 space-y-4">
          {/* Enter Invite Code Button */}
          <button
            onClick={handleNextStep}
            className="w-full flex items-center p-4 border rounded-lg bg-white shadow-sm hover:bg-gray-100 transition focus:ring-2 focus:ring-blue-500"
            disabled={loading}
          >
            <div className="w-10 h-10 flex items-center justify-center bg-green-500 text-white rounded-full text-lg font-semibold">
              ID
            </div>
            <span className="ml-4 text-gray-900 font-medium">
              {loading ? "Processing..." : "Enter Invite Code"}
            </span>
          </button>

          {/* Scan QR Code Button */}
          <button
            onClick={handleNextStep}
            className="w-full flex items-center p-4 border rounded-lg bg-white shadow-sm hover:bg-gray-100 transition focus:ring-2 focus:ring-blue-500"
            disabled={loading}
          >
            <div className="w-10 h-10 flex items-center justify-center bg-blue-500 text-white rounded-full text-lg font-semibold">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 3h2v2H3V3zm4 0h2v2H7V3zM3 7h2v2H3V7zm4 0h2v2H7V7zM3 11h2v2H3v-2zm8-8h2v2h-2V3zm-4 4h2v2H7V7zm4 0h2v2h-2V7zm-4 4h2v2H7v-2zm8-8h2v2h-2V3zm4 4h2v2h-2V7zm-4 4h2v2h-2v-2zm4 0h2v2h-2v-2zM3 15h2v2H3v-2zm4 0h2v2H7v-2zm8-8h2v2h-2V7zm4 0h2v2h-2V7zm-4 4h2v2h-2v-2zm4 0h2v2h-2v-2zM3 19h2v2H3v-2zm4 0h2v2H7v-2zm8-8h2v2h-2v-2zm4 0h2v2h-2v-2zm-4 4h2v2h-2v-2zm4 0h2v2h-2v-2z"
                />
              </svg>
            </div>
            <span className="ml-4 text-gray-900 font-medium">
              {loading ? "Processing..." : "Scan Invite QR Code"}
            </span>
          </button>
        </div>

        {/* Back Button */}
        <button
          onClick={onBack}
          className="mt-4 px-6 py-2 text-gray-700 hover:text-gray-900 transition"
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default JoinOrg;
