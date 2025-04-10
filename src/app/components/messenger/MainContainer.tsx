"use client";
import React, { useState } from 'react';

import ChatsSidebar from './ChatsSidebar';

const MainContainer = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="w-full min-h-screen flex">
      {/* Sidebar for large and medium screens */}
      <div className="hidden md:block w-64">
        <ChatsSidebar />
      </div>

      {/* Toggle button for small screens */}
      <div className="md:hidden p-4">
        <button onClick={toggleSidebar}>
        <i className="fas fa-bars"></i>
          
        </button>
      </div>

      {/* Sidebar for small screens */}
      {isSidebarOpen && (
        <div className="fixed inset-0 z-50 bg-white w-64 h-full shadow-lg md:hidden">
          <ChatsSidebar />
          <button onClick={toggleSidebar} className="absolute top-4 right-4">
          <i className="fas fa-bars"></i>
          </button>
        </div>
      )}

      {/* Main content */}
      <div className="flex-1 p-4">
 
      <div className='flex justify-center items-center h-full flex-col'>
      <span role="img" aria-label="smile" className='text-3xl'>😊</span>
      <span>A flower for your effort</span>
      </div>
      </div>
    </div>
  );
};

export default MainContainer;