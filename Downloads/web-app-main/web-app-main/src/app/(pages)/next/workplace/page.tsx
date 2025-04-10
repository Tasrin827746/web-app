"use client";

import { usePathname } from "next/navigation";
import Workplace from "@/app/components/Workplace/Workplace";

export default function Home() {
  const pathname = usePathname();

  return (
    <div className="h-screen bg-gray-200">
      {pathname === "/next/workplace" ? <Workplace /> : <p>Workplace</p>}
    </div>
  );
}
