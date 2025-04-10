"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";
import OrganizationContacts from "@/app/components/Contacts/OrganizationContacts";
import TaskMain from "@/app/components/Tasks/TaskMain";
import Workplace from "@/app/components/Workplace/Workplace";
import Settings from "@/app/components/Profile/Settings/Settings";

const Sidebar = dynamic(() => import("@/app/components/messenger/Sidebar"), { ssr: false });

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [showContacts, setShowContacts] = useState(false);
  const [showTasks, setShowTasks] = useState(false);
  const [showWorkplace, setShowWorkplace] = useState(false);
  const [showSettings, setShowSettings] = useState(false); 
  
  
  const pathname = usePathname();
  

  return (
    <div className="flex h-screen w-full overflow-hidden">
      <Sidebar
        setShowContacts={setShowContacts} 
        setShowTasks={setShowTasks} 
        setShowWorkplace={setShowWorkplace} 
        setShowSettings={setShowSettings} 
      />
      <div className="ml-60 flex-1 h-full overflow-auto relative z-10">
        {pathname === "/next/contacts" || showContacts ? (
          <OrganizationContacts />
        ) : pathname === "/next/tasks" || showTasks ? (
          <TaskMain />
        ) : pathname === "/next/workplace" || showWorkplace ? ( 
          <Workplace />
        ) : pathname === "/next/settings" || showSettings ? ( 
          <Settings />
        ) : (
          children
        )}
      </div>
    </div>
  );
}
