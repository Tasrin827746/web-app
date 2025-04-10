"use client";

import { usePathname } from "next/navigation";
import OrganizationContacts from "@/app/components/Contacts/OrganizationContacts";

export default function Home() {
  const pathname = usePathname();

  return (
    <div className="h-screen bg-gray-200">
      {pathname === "/next/contacts" ? <OrganizationContacts /> : <p>Contacts</p>}
    </div>
  );
}
