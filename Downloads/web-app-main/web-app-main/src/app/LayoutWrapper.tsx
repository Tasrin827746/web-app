"use client";
import { usePathname } from "next/navigation";
import CommonNavbar from "@/app/commonlayout/NavBar/CommonNavbar";
import CommonFooter from "@/app/commonlayout/Footer/CommonFooter";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isExcludedPage =
  pathname.startsWith("/email") ||
  pathname.startsWith("/next/tasks") ||
  pathname.startsWith("/next/workplace") ||
  pathname.startsWith("/next/settings"); 


  return (
    <>
      {!isExcludedPage && <CommonNavbar />}
      {children}
      {!isExcludedPage && <CommonFooter />}
    </>
  );
}
