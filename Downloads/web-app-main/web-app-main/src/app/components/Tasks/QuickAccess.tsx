import React from "react";
import { TaskCategory } from "../types";

interface TaskSectionProps {
  title: string;
  categoryId: TaskCategory;
}

const QuickAccess: React.FC<TaskSectionProps> = ({ title, categoryId }) => {

  const getCategoryButtonText = () => {
    switch (categoryId) {
      case "created":
        return "Created Tasks";
      case "assigned":
        return "Assigned Tasks";
      case "completed":
        return "Completed Tasks";
      default:
        return "All Tasks";
    }
  };

  return (
    <div className="flex-1 bg-white min-h-screen px-6 py-4">
      {/* Header Section */}
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">{title}</h2>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm shadow">
          New Task ▾
        </button>
      </div>

      {/* Toolbar */}
      <div className="flex items-center justify-start gap-4 mt-4 border-b pb-3 text-gray-600 text-sm">
        <button className="flex items-center gap-1 px-2 py-1 bg-gray-100 text-blue-600 rounded">
          ⚖ {getCategoryButtonText()} {/* Dynamically set text */}
        </button>
        <button className="px-2 py-1 text-gray-600">Filter 1</button>
        <button className="px-2 py-1">Sort by: Due Date</button>
        <button className="px-2 py-1">Group by: None</button>
        <button className="px-2 py-1">Sub-task: Show</button>
        <button className="px-2 py-1">Customize</button>
      </div>

      {/* Task Table Headers */}
      <div className="flex justify-between mt-4 text-gray-500 text-sm font-medium">
        <span className="w-1/3">Task Title</span>
        <span className="w-1/6">Owner</span>
        <span className="w-1/6">Start Time</span>
        <span className="w-1/6">Due Date</span>
      </div>

      {/* Placeholder for Empty State */}
      <div className="mt-6 text-gray-400 text-center">No tasks available...</div>
    </div>
  );
};

export default QuickAccess;
