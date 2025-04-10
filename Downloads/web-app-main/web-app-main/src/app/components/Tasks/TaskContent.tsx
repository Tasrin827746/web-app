import React from "react";
import Subscribed from "./Subscribed";
import Activities from "./Activites";
import Owned from "./Owned";
import TaskList from "./TaskList";

interface TaskContentProps {
  selectedCategory: string;
}

const TaskContent: React.FC<TaskContentProps> = ({ selectedCategory }) => {
  return (
    <div className="flex-1 p-2 bg-white min-h-screen">
      {selectedCategory === "owned" && <Owned />}
      {selectedCategory === "subscribed" && <Subscribed />}
      {selectedCategory === "activities" && <Activities />}
      {selectedCategory === "task_list" && <TaskList />}

    </div>
  );
};

export default TaskContent;
