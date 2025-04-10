import React, { forwardRef, useEffect, useRef } from "react";
import { IoSettingsOutline } from "react-icons/io5";

interface StatusModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const StatusModal = forwardRef<HTMLDivElement, StatusModalProps>(({ isOpen, onClose }, ref) => {
  const modalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="absolute top-16 left-[22rem] z-50">
      <div
        ref={(node) => {
          modalRef.current = node;
          if (typeof ref === "function") ref(node);
          else if (ref) (ref as React.MutableRefObject<HTMLDivElement | null>).current = node;
        }}
        className="bg-white rounded-lg shadow-lg p-4 w-64 border border-gray-200 relative"
      >
        <div className="my-6">
          <p className="text-gray-800 -mt-4">My Status</p>
        </div>
        <div className="border-t mt-2 pt-2 flex justify-between items-center">
          <button className="text-gray-500 text-sm hover:bg-gray-200 p-1 rounded-md">
            + New Status
          </button>
          <button className="hover:bg-gray-200 rounded-md p-1">
            <IoSettingsOutline className="text-gray-500 text-lg cursor-pointer" />
          </button>
        </div>
      </div>
    </div>
  );
});

StatusModal.displayName = "StatusModal";

export default StatusModal;
