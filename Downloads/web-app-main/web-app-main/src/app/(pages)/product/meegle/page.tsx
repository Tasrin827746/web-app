import Collaboration from "@/app/components/Product/Meegle/Collaboration";
import CustomerStories from "@/app/components/Product/Meegle/CustomerStories";
import Development from "@/app/components/Product/Meegle/Development";
import MeegleBanner from "@/app/components/Product/Meegle/MeegleBanner";
import Partnership from "@/app/components/Product/Meegle/Partnership";
import ProjectManagement from "@/app/components/Product/Meegle/ProjectManagement";
import ProjectTemplate from "@/app/components/Product/Meegle/ProjectTemplate";
import SecurityCompliance from "@/app/components/Product/Meegle/SecurityCompliance";
import Together from "@/app/components/Product/Meegle/Together";
import Workflow from "@/app/components/Product/Meegle/Workflow";
import React from "react";

const page = () => {
  return (
    <div className="space-y-28 ">
      <MeegleBanner />
      <div className="max-w-7xl mx-auto space-y-28 px-5">
        <Workflow />
        <ProjectManagement/>
        <Collaboration />
        <Together />
      </div>
        <ProjectTemplate/>
        <Development/>
        <div className="max-w-7xl mx-auto space-y-28 px-5">
          <CustomerStories />
          <Partnership />
          <SecurityCompliance />
        </div>
    </div>
  );
};

export default page;
