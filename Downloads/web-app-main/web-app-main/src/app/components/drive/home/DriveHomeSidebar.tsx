'use client';
import React, { useState } from 'react';
import { Calendar, Home, Inbox, Search, Settings, Menu, X } from "lucide-react";
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const DriveHomeSidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const pathName = usePathname();
  console.log(pathName);

  const items = [
    {
      title: "Home",
      url: "#",
      icon: Home,
    },
    {
      title: "Inbox",
      url: "#",
      icon: Inbox,
    },
    {
      title: "Calendar",
      url: "#",
      icon: Calendar,
    },
    {
      title: "Search",
      url: "#",
      icon: Search,
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings,
    },
  ];

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={`flex ${isCollapsed ? 'w-16' : 'w-64'} min-h-screen bg-white shadow-md p-4 transition-width duration-300`}>
      <div className="flex flex-col w-full">
       <div className='flex items-center  gap-2'>
       <button onClick={toggleSidebar} className="">
          {isCollapsed ? <Menu className="w-6 h-6" /> : <X className="w-6 h-6" />}
        </button>
        <div className={`flex items-center space-x-2 ${isCollapsed ? 'hidden' : 'block'}`}>
        <span className="text-lg font-semibold text-gray-900">
          Taskir&apos;s <span className="text-blue-600">View</span>
        </span>
       </div>
     
      </div>
        <div className={`relative ${isCollapsed ? 'hidden' : 'block'}`}>
                <i className="fas absolute top-8 left-3 fa-search ml-3"></i>
            <input type="search" placeholder='Search' className='border my-5 py-2 pl-8 ml-3 outline-none' />
            </div>

        <ul className="menu">
          {items.map((item, index) => (
            <li key={index} className="mb-2">
              <Link
                href={item.url}
                className={`flex items-center p-4 hover:rounded-sm hover:no-underline hover:bg-gray-100 space-x-3 font-bold text-gray-900 hover:text-gray-900 rounded-md ${
                  (index === 0 && !isCollapsed )? "rounded-sm bg-gray-100 border-r-2 border-blue-600" : ""
                }`}
              >
                <item.icon className="w-6 h-6" />
                <span className={`${isCollapsed ? 'hidden' : 'block'}`}>{item.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DriveHomeSidebar;