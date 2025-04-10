import React from "react";
import { Button } from "@/components/ui/button";
import { Filter, Plus, SlidersHorizontal } from "lucide-react";

const Owned: React.FC = () => {
  return (
    <div className="flex-1 px-2 py-4 bg-white min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center border-b pb-3 mb-4">
        <h2 className="text-xl">Owned</h2>
        <Button className="bg-blue-600 h-8 w-28 text-white text-sm flex items-center">
          <Plus size={16} className="" /> New Task
        </Button>
      </div>

      {/* Toolbar */}
      <div className="flex items-center gap-4 mb-4">
        <div className="flex gap-2">
          <Button variant="outline" className="flex items-center">
            <SlidersHorizontal size={16} className="mr-2" /> Ongoing
          </Button>
          <Button variant="outline" className="flex items-center">
            <Filter size={16} className="mr-2" /> Filter 1
          </Button>
          <Button variant="outline">Sort by: Custom</Button>
          <Button variant="outline">Group by: Custom Group</Button>
        </div>
      </div>

      {/* Task List Section */}
      <div className="border rounded-lg p-4">
        <div className="flex justify-between items-center text-gray-700 text-sm font-medium border-b pb-2">
          <span>Task Title</span>
          <div className="flex gap-4">
            <span>Start Time</span>
            <span>Due Date</span>
            <span>Creator</span>
          </div>
        </div>

        {/* Default Group */}
        <div className="mt-4">
          <div className="text-gray-600 font-medium">Default Group 0</div>
          <div className="text-blue-500 cursor-pointer mt-2">New Task</div>
          <div className="text-blue-500 cursor-pointer mt-1">+ New Group</div>
        </div>
      </div>
    </div>
  );
};

export default Owned;
