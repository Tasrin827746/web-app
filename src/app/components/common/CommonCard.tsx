'use client';
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface MenuItem {
  title: string;
  icon: React.ElementType;
  url: string;
}

interface CommonCardProps {
  icon: React.ElementType;
  title: string;
  textColor?: string;
  menuItems: MenuItem[];
}

const CommonCard: React.FC<CommonCardProps> = ({ icon: Icon, title, menuItems,textColor }) => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const handleMouseEnter = () => {
    setIsMenuVisible(true);
  };

  const handleMouseLeave = () => {
    setIsMenuVisible(false);
  };

  return (
    <div
      className="relative p-4 border bg-white min-w-52 lg:min-w-96 shadow-md rounded-lg"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Icon className={`${textColor} w-5 h-5 `} />
          <h3 className="text-[15px] font-semibold">{title}</h3>
        </div>
        {isMenuVisible ? (
          <ChevronUp className="w-6 h-6 text-gray-600" />
        ) : (
          <ChevronDown className="w-6 h-6 text-gray-600" />
        )}
      </div>
      {isMenuVisible && (
        <div className="absolute  top-full left-0 mt-2 w-full bg-white shadow-lg rounded-md">
          <ul className="py-2">
            {menuItems.map((item, index) => (
              <li key={index} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                <a href={item.url} className="flex  items-center space-x-2">
                  <item.icon className="w-5 h-5 text-gray-600" />
                  <span>{item.title}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CommonCard;