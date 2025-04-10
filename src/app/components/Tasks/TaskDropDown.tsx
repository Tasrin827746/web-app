import { useState } from "react";
import { PiDotsThreeBold } from "react-icons/pi";
import { FaQuestionCircle, FaCog } from "react-icons/fa";

const TaskDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block">
      <div
        className="p-2 hover:bg-slate-100 rounded-md cursor-pointer"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        <PiDotsThreeBold className="text-2xl" />
      </div>

      {isOpen && (
        <div
          className="absolute right-0 w-40 bg-white border border-gray-200 shadow-md rounded-md z-50"
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          <ul className="p-1">
            <li className="flex items-center text-sm gap-2 px-2 py-2 hover:bg-gray-100 cursor-pointer rounded-md">
              <FaQuestionCircle className="text-gray-600" />
              Learn More
            </li>
            <li className="flex items-center gap-2 px-2 py-2 text-sm hover:bg-gray-100 cursor-pointer rounded-md">
              <FaCog className="text-gray-600" />
              Settings
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default TaskDropdown;
