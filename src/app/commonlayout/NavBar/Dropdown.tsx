"use client";

import React, { JSX, useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

type DropdownProps = {
  label: string;
  items: {
    id: string;
    name: string;
    description: string;
    icon: string;
    link: string;
  }[];
};

function Dropdown({ label, items }: DropdownProps): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <div 
      className="relative"
      ref={dropdownRef}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* Dropdown Trigger */}
      <button className="text-defaultText font-medium hover:text-orange-500 focus:outline-none">
        {label}
        <span className="ml-1">▾</span>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          className="fixed left-0 top-auto bg-white border border-gray-200 shadow-lg p-8 grid grid-cols-4 gap-4 z-50"
          style={{
            width: "100vw",
          }}
        >
          {items.map(({ id, name, description, icon, link }) => (
            <Link
              key={id}
              href={link}
              className="flex items-start space-x-3 p-1 rounded-md hover:bg-gray-100 transition duration-200"
            >
              {icon && (
                <img
                  src={icon}
                  alt={name}
                  className="h-5 w-5 object-cover rounded-md"
                />
              )}
              <div>
                <h4 className="text-gray-900 font-medium">{name}</h4>
                <p className="text-sm text-gray-500">{description}</p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default Dropdown;
