import React from "react";

interface Step3Props {
  onNext: (step: number) => void;
  onBack: () => void;
}

const Step3: React.FC<Step3Props> = ({ onNext, onBack }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4">
      {/* Back Button */}
      <button onClick={onBack} className="text-blue-600 hover:underline mb-4 self-start">
        &larr; Back
      </button>

      {/* Heading */}
      <div className="mb-10 text-center">
        <h1 className="text-2xl font-bold">Welcome to Lark</h1>
      </div>

      {/* Options Container */}
      <div className="w-full max-w-md space-y-4">
        {/* Create Organization Section */}
        <div
          className="border rounded-lg p-4 bg-white shadow hover:shadow-lg transition cursor-pointer"
          onClick={() => onNext(4)}
        >
          <h2 className="text-lg font-bold text-orange-500">Create organization</h2>
          <p className="text-sm text-gray-600 mt-2">
            Once created, you&apos;ll become the organization administrator who can invite
            members to join and kickstart efficient collaboration.
          </p>
        </div>

        {/* Join Organization Section */}
        <div
          className="border rounded-lg p-4 bg-white shadow hover:shadow-lg transition cursor-pointer"
          onClick={() => onNext(5)}
        >
          <h2 className="text-lg font-bold text-blue-500">Join organization</h2>
          <p className="text-sm text-gray-600 mt-2">
            Join organization through Invite QR Code or Invite Code, and start
            efficient collaboration with others.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Step3;
