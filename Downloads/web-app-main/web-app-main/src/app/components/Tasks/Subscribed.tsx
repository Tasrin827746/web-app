import React from "react";
import { Button } from "@/components/ui/button";
import { Filter, Plus, SlidersHorizontal } from "lucide-react";

const Subscribed: React.FC = () => {
  return (
    <div className="flex-1 px-2 py-4 bg-white min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center border-b pb-3 mb-4">
        <h2 className="text-xl font-semibold">Subscribed</h2>
        <Button className="bg-blue-600 text-white h-8 w-28 text-sm flex items-center">
          <Plus size={16} className="" /> New Task
        </Button>
      </div>

      {/* Toolbar */}
      <div className="flex items-center gap-4 mb-4">
        <Button variant="outline" className="flex items-center">
          <SlidersHorizontal size={16} className="mr-2" /> Ongoing
        </Button>
        <Button variant="outline" className="flex items-center">
          <Filter size={16} className="mr-2" /> Filter 3
        </Button>
        <Button variant="outline">Sort by: Due Date</Button>
        <Button variant="outline">Group by: None</Button>
        <Button variant="outline">Customize</Button>
      </div>

      {/* Table Headers */}
      <div className="border-b text-gray-600 text-sm font-medium flex justify-between pb-2">
        <span>Task Title</span>
        <div className="flex gap-6">
          <span>Owner</span>
          <span>Start Time</span>
          <span>Due Date</span>
        </div>
      </div>
    </div>
  );
};

export default Subscribed;
