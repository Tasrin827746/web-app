
import "@/styles/global.css";
import DriveHomeSidebar from "@/app/components/drive/home/DriveHomeSidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen gap-2">
      {/* Sidebar on all pages */}
      <DriveHomeSidebar/>

      {/* Main Content */}
      <div className="flex-1 p-6">
        {children}
      </div>
    </div>
  );
}
