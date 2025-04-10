"use client";

import React, { useState } from "react";
import TaskSidebar from "./TaskSidebar";
import TaskContent from "./TaskContent";
import QuickAccess from "./QuickAccess";

// Define a type that matches the valid category keys
type TaskCategory = "owned" | "subscribed" | "activities" | "all" | "created" | "assigned" | "completed" | "task_list";

// Map only valid QuickAccess categories
const categoryMap: Record<Extract<TaskCategory, "all" | "created" | "assigned" | "completed">, { title: string}> = {
  all: { title: "All Tasks" },
  created: { title: "Created" },
  assigned: { title: "Assigned" },
  completed: { title: "Completed" },
};

const TaskMain: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<TaskCategory>("task_list");

  return (
    <div className="flex">
      {/* Sidebar */}
      <TaskSidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />

      {/* Conditionally render TaskContent or QuickAccess */}
      {["owned", "subscribed", "activities", "task_list"].includes(selectedCategory) ? (
        <TaskContent selectedCategory={selectedCategory} />
      ) : selectedCategory in categoryMap ? ( 
        <QuickAccess
          title={categoryMap[selectedCategory as keyof typeof categoryMap].title}
          categoryId={selectedCategory}
        />
      ) : (
        <div className="p-4">No category selected</div> 
      )}
    </div>
  );
};

export default TaskMain;
