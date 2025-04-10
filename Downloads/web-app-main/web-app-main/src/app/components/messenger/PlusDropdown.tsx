import { useState, useRef, useEffect } from "react";
import { FiPlusCircle } from "react-icons/fi";
import { Users, UserPlus, FileText, Video } from "lucide-react";
import NewGroupModal from "../Organization/NewGroup"; 

const PlusDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleNewGroupClick = () => {
    setIsModalOpen(true);
    setIsOpen(false); // Close dropdown when modal opens
  };

  const menuItems = [
    { label: "New Group", icon: <Users className="w-5 h-5 mr-2 text-gray-700" />, onClick: handleNewGroupClick },
    { label: "Add Organization Member", icon: <UserPlus className="w-5 h-5 mr-2 text-gray-700" /> },
    { label: "Add External Contact", icon: <UserPlus className="w-5 h-5 mr-2 text-gray-700" /> },
    { label: "New Docs", icon: <FileText className="w-5 h-5 mr-2 text-gray-700" /> },
    { label: "Join Meeting", icon: <Video className="w-5 h-5 mr-2 text-gray-700" /> },
  ];

  return (
    <div className="relative">
      <button
        ref={buttonRef}
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex items-center justify-center w-8 h-8"
      >
        <FiPlusCircle className="text-xl text-gray-200 transition-colors hover:text-gray-300" />
      </button>

      {isOpen && (
        <div ref={dropdownRef} className="absolute left-8 top-0 w-60 bg-white shadow-lg rounded-lg py-2 z-50 border border-gray-200">
          {menuItems.map((item, index) => (
            <button
              key={index}
              onClick={item.onClick}
              className="flex items-center p-2 w-full text-sm font-medium transition-all hover:bg-gray-100"
            >
              {item.icon}
              {item.label}
            </button>
          ))}
        </div>
      )}

      {/* Modal */}
      {isModalOpen && <NewGroupModal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
};

export default PlusDropdown;
