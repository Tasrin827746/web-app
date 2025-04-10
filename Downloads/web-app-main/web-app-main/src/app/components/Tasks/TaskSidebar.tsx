import React, { useState } from "react";
import { ChevronDown, ChevronRight, Folder, User, Bell, Activity } from "lucide-react";
import { RxDropdownMenu } from "react-icons/rx";
import TaskDropdown from "./TaskDropDown";
import NewGroup from "./NewGroup";
import { JSX } from "react/jsx-runtime";

// Define a strict type for task categories
type TaskCategory =
  | "owned"
  | "subscribed"
  | "activities"
  | "all"
  | "created"
  | "assigned"
  | "completed"
  | "task_list";

// Define task categories with icons
const taskCategories: { id: TaskCategory; name: string; icon: JSX.Element }[] = [
  { id: "owned", name: "Owned", icon: <User size={16} /> },
  { id: "subscribed", name: "Subscribed", icon: <Bell size={16} /> },
  { id: "activities", name: "Activities", icon: <Activity size={16} /> },
];

// Define quick access items
const quickAccessItems: { id: TaskCategory; name: string }[] = [
  { id: "all", name: "All Tasks" },
  { id: "created", name: "Created" },
  { id: "assigned", name: "Assigned" },
  { id: "completed", name: "Completed" },
];

interface TaskSidebarProps {
  selectedCategory: TaskCategory;
  setSelectedCategory: React.Dispatch<React.SetStateAction<TaskCategory>>;
}

const TaskSidebar: React.FC<TaskSidebarProps> = ({ selectedCategory, setSelectedCategory }) => {
  const [isQuickAccessOpen, setQuickAccessOpen] = useState(true);

  return (
    <div className="w-1/4 border-r min-h-screen">
      {/* Sidebar Header */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <RxDropdownMenu className="text-2xl mr-2" />
          <h1 className="text-xl font-semibold">Tasks</h1>
        </div>
        <TaskDropdown />
      </div>

      {/* Task Categories */}
      <div>
        {taskCategories.map((category) => (
          <button
            key={category.id}
            className={`flex items-center w-3/4 text-left p-2 rounded-lg ${
              selectedCategory === category.id ? "bg-blue-100 text-blue-600" : "text-gray-700 hover:bg-gray-200"
            }`}
            onClick={() => setSelectedCategory(category.id)}
          >
            {category.icon}
            <span className="ml-2">{category.name}</span>
          </button>
        ))}
      </div>

      {/* Quick Access Section */}
      <div className="border-b my-3" />
      <button className="flex items-center w-full text-left p-2 font-medium text-gray-700 hover:bg-gray-200 rounded-lg" onClick={() => setQuickAccessOpen(!isQuickAccessOpen)}>
        {isQuickAccessOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
        <span className="ml-2">Quick Access</span>
      </button>

      {isQuickAccessOpen && (
        <div className="ml-6">
          {quickAccessItems.map((item) => (
            <button
              key={item.id}
              className={`block w-3/4 text-left p-2 rounded-lg ${
                selectedCategory === item.id ? "bg-blue-100 text-blue-600" : "text-gray-700 hover:bg-gray-200"
              }`}
              onClick={() => setSelectedCategory(item.id)}
            >
              {item.name}
            </button>
          ))}
        </div>
      )}

      {/* Task List & New Group */}
      <div className="border-b my-3" />
      <button className="flex items-center w-full text-left p-2 font-medium text-gray-700 hover:bg-gray-200 rounded-lg" onClick={() => setSelectedCategory("task_list")}>
        <Folder size={16} />
        <span className="ml-2">Task List</span>
      </button>

      {/* New Group Component */}
      <NewGroup />
    </div>
  );
};

export default TaskSidebar;
