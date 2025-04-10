import React from "react";

const MainContent = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Main Content */}
      <div className="flex flex-col items-center justify-center h-[calc(100vh-56px)] text-center">
        <h2 className="text-lg font-semibold">No email address</h2>
        <p className="text-gray-600 max-w-md">
          Please contact the email administrator to set your email address, or switch to another account.
        </p>
        <div className="flex space-x-3 text-blue-600">
          <a href="#" className="hover:underline">Lark official website</a>
          <span>|</span>
          <a href="#" className="hover:underline">Help Center</a>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
