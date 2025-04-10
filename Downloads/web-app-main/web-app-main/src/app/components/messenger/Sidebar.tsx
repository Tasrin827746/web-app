"use client";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Link from "next/link";

import PlusDropdown from "./PlusDropdown";
import ProfileDropdown from "./Dropdown";

interface SidebarProps {
  setShowContacts: (value: boolean) => void;
  setShowTasks: (value: boolean) => void;
  setShowWorkplace: (value: boolean) => void;
  setShowSettings: (value: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ setShowContacts, setShowTasks, setShowWorkplace, setShowSettings }) => {
  const router = useRouter();
  const pathName = usePathname();
  const [mounted, setMounted] = useState(false);

 
  // const userName = "Tasmira Tasrin";
  // const firstLetter = userName.charAt(0).toUpperCase(); 

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="w-56 min-h-screen bg-cyan-800 shadow-md fixed top-0 left-0 z-50">
      
      {/* Profile & Plus Icon Section */}
      <div className="flex items-center justify-between px-4 py-3">
        {/* Profile Avatar */}
        <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-500 text-white flex items-center justify-center rounded-full text-lg">
        <ProfileDropdown
        setShowContacts={setShowContacts}
        setShowTasks={setShowTasks}
        setShowWorkplace={setShowWorkplace}
        setShowSettings={setShowSettings}
        />

        </div>

        {/* Plus Icon */}
       <PlusDropdown />
      </div>

      {/* Search Bar */}
      <div className="relative flex mt-2 px-4">
        <i className="fas fa-search absolute top-3 left-6 text-gray-200"></i>
        <input
          type="search"
          placeholder="Search (Ctrl+K)"
          className="border bg-cyan-900 rounded-lg py-2 pl-8 w-full outline-none text-sm text-gray-200"
        />
      </div>

      {/* Sidebar Menu */}
      <ul className="menu mt-2 px-0">
        <li className="ml-0 pl-0 w-full">
          <Link
            href={"/next/messenger"}
            className={`flex items-center px-4 py-3 hover:bg-cyan-700 font-medium rounded-lg 
              ${pathName === "/next/messenger" ? "bg-cyan-700 border-r-2 border-blue-600" : ""}
            `}
          >
            <i className="fas fa-envelope text-gray-200"></i>
            <span className="ml-2 text-sm text-gray-200">Messenger</span>
          </Link>
        </li>

        <li className="ml-0 pl-0 w-full">
          <Link
            href={"/meetings"}
            className={`flex items-center px-4 py-3 hover:bg-cyan-700 font-medium rounded-lg 
              ${pathName === "/meetings" ? "bg-cyan-700 border-r-2 border-blue-600" : ""}
            `}
          >
            <i className="fas fa-video text-gray-200"></i>
            <span className="ml-2 text-sm text-gray-200">Meetings</span>
          </Link>
        </li>

        <li className="ml-0 pl-0 w-full">
          <Link
            href={"/calendar/week"}
            className={`flex items-center px-4 py-3 hover:bg-cyan-700 font-medium rounded-lg 
              ${pathName === "/calendar/week" ? "bg-cyan-700 border-r-2 border-blue-600" : ""}
            `}
          >
            <i className="fas fa-calendar-alt text-gray-200"></i>
            <span className="ml-2 text-sm text-gray-200">Calendar</span>
          </Link>
        </li>

        <li className="ml-0 pl-0 w-full">
          <Link
            href={"/drive/home"}
            className={`flex items-center px-4 py-3 hover:bg-cyan-700 font-medium rounded-lg 
              ${pathName === "/drive/home" ? "bg-cyan-700 border-r-2 border-blue-600" : ""}
            `}
          >
            <i className="fas fa-file-alt text-gray-200"></i>
            <span className="ml-2 text-sm text-gray-200">Docs</span>
          </Link>
        </li>

        <li className="ml-0 pl-0 w-full">
          <button
            onClick={() => {
              setShowContacts(true);
              setShowTasks(false);
              router.push("/next/contacts", { scroll: false });
            }}
            className={`flex items-center w-full px-4 py-3 hover:bg-cyan-700 font-medium rounded-lg
              ${pathName === "/next/contacts" ? "bg-cyan-700 border-r-2 border-blue-600" : ""}
            `}
          >
            <i className="fas fa-address-book text-gray-200"></i>
            <span className="ml-2 text-sm text-gray-200">Contacts</span>
          </button>
        </li>

        <li className="ml-0 pl-0 w-full">
          <button
            onClick={() => router.push("/email")}
            className={`flex items-center w-full px-4 py-3 hover:bg-cyan-700 font-medium rounded-lg 
              ${pathName === "/next/email" ? "bg-cyan-700 border-r-2 border-blue-600" : ""}
            `}
          >
            <i className="fas fa-users text-gray-200"></i>
            <span className="ml-2 text-sm text-gray-200">Email</span>
          </button>
        </li>

        <li className="ml-0 pl-0 w-full">
          <button
            onClick={() => {
              setShowTasks(true);
              setShowContacts(false);
              router.push("/next/tasks", { scroll: false });
            }}
            className={`flex items-center w-full px-4 py-3 hover:bg-cyan-700 font-medium rounded-lg
              ${pathName === "/next/tasks" ? "bg-cyan-700 border-r-2 border-blue-400" : ""}
            `}
          >
            <i className="fas fa-tasks text-gray-200"></i>
            <span className="ml-2 text-sm text-gray-200">Tasks</span>
          </button>
        </li>

        <li className="ml-0 pl-0 w-full">
          <button
            onClick={() => {
              setShowWorkplace(true);
              setShowContacts(false);
              setShowTasks(false);
              router.push("/next/workplace", { scroll: false });
            }}
            className={`flex items-center w-full px-4 py-3 hover:bg-cyan-700 font-medium rounded-lg 
              ${pathName === "/next/workplace" ? "bg-cyan-700 border-r-2 border-blue-600" : ""}
            `}
          >
            <i className="fas fa-building text-gray-200"></i>
            <span className="ml-2 text-sm text-gray-200">Workplace</span>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
