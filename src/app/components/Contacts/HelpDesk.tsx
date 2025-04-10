import React from "react";

const HelpDesk: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <img src="/empty.webp" alt="Help Desk" className="w-40 h-40 mb-4" />
      <p className="text-gray-500">There is no Help Desk</p>
    </div>
  );
};

export default HelpDesk;
