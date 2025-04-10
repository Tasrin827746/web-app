"use client";

import { useRouter } from "next/navigation";
import { FaUserShield, FaGlobe, FaBell, FaTasks, FaInfoCircle } from "react-icons/fa";
import AccountSettings from "./Account";
import LanguageSettings from "./Language";
import NotificationsSettings from "./Notification";
import TasksSettings from "./Task";
import AboutSettings from "./About";

const settingsOptions = [
  { id: "account", name: "Account and Security", icon: <FaUserShield /> },
  { id: "language", name: "Language and Time", icon: <FaGlobe /> },
  { id: "notifications", name: "Notifications", icon: <FaBell /> },
  { id: "tasks", name: "Tasks", icon: <FaTasks /> },
  { id: "about", name: "About Lark 7.37.0", icon: <FaInfoCircle /> },
];

export default function SettingsPage() {
  
  const router = useRouter();

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="h-screen flex flex-col bg-gray-100">
      {/* Top Navbar */}
      <div className="flex justify-between items-center bg-white p-3 border-b">
        <h1 className="text-2xl font-semibold">Settings</h1>
        <button
  onClick={() => {
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push("/next/messenger"); 
    }
  }}
  className="text-gray-500 hover:text-gray-700 text-2xl"
>
  &times;
</button>

      </div>

      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside className="w-60 bg-white border-r overflow-y-auto">
          <ul className="mt-4">
            {settingsOptions.map((option) => (
              <li
                key={option.id}
                onClick={() => scrollToSection(option.id)}
                className="flex items-center px-2 py-4 rounded-lg text-sm cursor-pointer hover:bg-gray-100 transition-all"
              >
                <span className="mr-3 text-lg">{option.icon}</span>
                {option.name}
              </li>
            ))}
          </ul>
        </aside>

        {/* Content Area */}
        <main className="flex-1 p-4 bg-gray-100 overflow-y-auto">
          <div id="account" className="">
            <AccountSettings />
            <div className="border-b border-gray-400 mt-8"></div>
          </div>
          <div id="language" className="mt-8">
            <LanguageSettings />
            <div className="border-b border-gray-400 mt-8"></div>
          </div>
          <div id="notifications" className="mt-8">
            <NotificationsSettings />
            <div className="border-b border-gray-400 mt-8"></div>
          </div>
          <div id="tasks" className="mt-8">
            <TasksSettings />
            <div className="border-b border-gray-400 mt-8"></div>
          </div>
          <div id="about" className="mt-8">
            <AboutSettings />
          </div>
        </main>
      </div>
    </div>
  );
}
