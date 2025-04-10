import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const tabs = ["All", "Created", "Involved", "From Docs", "From Chats"];

const TaskList: React.FC = () => {
  const [activeTab, setActiveTab] = useState("All");

  return (
    <div className="px-2 py-4 bg-white min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        {/* Task List Title with Dropdown */}
        <h2 className="text-lg font-semibold flex items-center text-gray-900">
          Task List <ChevronDown className="ml-2 text-gray-500" size={16} />
        </h2>

        {/* New Task Button */}
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium flex items-center">
          New Task <ChevronDown size={14} className="ml-1" />
        </button>
      </div>

      {/* Tabs */}
      <div className="flex space-x-6 text-sm border-b pb-2 text-gray-600">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`relative pb-2 ${
              activeTab === tab
                ? "text-blue-600 font-semibold border-b-2 border-blue-600"
                : "hover:text-gray-800"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Empty State Illustration */}
      <div className="flex flex-col items-center justify-center mt-24 text-gray-500">
        <img
          src="/empty-tasks.png" 
          alt="No tasks"
          className="w-40 h-40"
        />
        <p className="mt-4 text-sm text-gray-500 text-center max-w-xs">
          Create your first task list and enjoy seamless task coordination and
          management.
        </p>
      </div>
    </div>
  );
};

export default TaskList;
