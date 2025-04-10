"use client";

import { usePathname } from "next/navigation";
import TaskMain from "@/app/components/Tasks/TaskMain";

export default function Home() {
  const pathname = usePathname();

  return (
    <div className="h-screen bg-gray-200">
      {pathname === "/next/tasks" ? <TaskMain /> : <p>Task</p>}
    </div>
  );
}
