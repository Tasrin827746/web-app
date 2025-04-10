"use client";
import CommonCard from "@/app/components/common/CommonCard";
import React from "react";
import {
  FileText,
  FileSpreadsheet,
  File,
  Database,
  Brain,
  Folder,
  Layout,
  Flower,
  Worm,
  UploadCloud,
  FilePlus,
  Import,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TableComponent from "@/app/components/drive/TableComponent";
const Page = () => {
  const menuItemsNew = [
    { title: "Docs", icon: FileText, url: "/docs" },
    { title: "Sheets", icon: FileSpreadsheet, url: "/sheets" },
    { title: "Slides", icon: File, url: "/slides" },
    { title: "Base", icon: Database, url: "/base" },
    { title: "Form", icon: Worm, url: "/form" },
    { title: "Mindnotes", icon: Brain, url: "/mindnotes" },
    { title: "Folder", icon: Folder, url: "/folder" },
    { title: "Board", icon: Layout, url: "/board" },
    { title: "Flowchart", icon: Flower, url: "/flowchart" },
  ];

  const menuItemsUpload = [
    { title: "Upload Folder", icon: Folder, url: "/upload-folder" },
    { title: "Upload File", icon: FilePlus, url: "/upload-file" },
    { title: "Import as New Docs", icon: Import, url: "/import-new-docs" }, // Replaced FileImport with Import
  ];

  return (
    <div>
      <div className="flex gap-3 ">
        <CommonCard
          textColor={"text-blue-800"}
          icon={FileText}
          title="New"
          menuItems={menuItemsNew}
        />
        <CommonCard
          textColor={"text-orange-800"}
          icon={UploadCloud}
          title="Upload"
          menuItems={menuItemsUpload}
        />
      </div>
      <div className="mt-10">
        <Tabs defaultValue="account" className="w-[400px]">
          <TabsList>
            <TabsTrigger value="recent">Recent</TabsTrigger>
            <TabsTrigger value="shared_with_me">Shared With Me</TabsTrigger>
            <TabsTrigger value="favorites">Favorites</TabsTrigger>
          </TabsList>
          <TabsContent value="recent">
            <TableComponent/>
          </TabsContent>
          <TabsContent value="shared_with_me">Change your password here.</TabsContent>
          <TabsContent value="favorites">password here.</TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Page;
