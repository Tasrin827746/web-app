"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaArrowCircleRight } from "react-icons/fa";
interface TabData {
    [key: string]: string;
  }
  
  const tabData: TabData = {
    Workflow: "https://i.ibb.co/NSHRq6X/project1.webp",
    Fields: "https://i.ibb.co/pRtkLmY/fields.webp",
    Details: "https://i.ibb.co/r6NmrWN/details.webp",
    Kanban: "https://i.ibb.co/L88sQBY/kanan.webp",
    Gantt: "https://i.ibb.co/mBsmWqc/gantt.webp",
    Tree: "https://i.ibb.co/Wf7K43T/tree.webp",
    Charts: "https://i.ibb.co/FmBBHVr/chart.webp",
    Automation: "https://i.ibb.co/3zfKVrv/automation.webp",
  };

const ProjectManagement = () => {
  const [activeTab, setActiveTab] = useState<string>("Workflow");



  return (
    <div className="min-h-screen flex flex-col items-center">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 mt-6 text-center">
        All You Need for Project Management <br /> is in{" "}
        <span className="text-indigo-500">Meegle</span>
      </h1>
      <div className="bg-lime-200 p-3">
        <h2>Extract and visualize every step from start to finish.</h2>
      </div>
      <div className="flex flex-wrap items-center gap-4 mb-6 mt-6">
        {Object.keys(tabData).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-xl ${
              activeTab === tab
                ? "bg-purple-500 text-white"
                : "bg-gray-200 text-gray-700"
            } transition`}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="w-full max-w-4xl rounded-lg">
        <Image
          width={500}
          height={500}
          src={tabData[activeTab]}
          alt={activeTab}
          className="w-full h-auto rounded"
        />
      </div>
      <button
        onClick={() => alert(`You clicked on ${activeTab}`)}
        className="mt-5 px-6 py-3 bg-gradient-to-l from-purple-300 to-purple-500 text-white text-xl font-semibold rounded-full shadow transition flex items-center"
      >
        Explore More Features {activeTab}
        <FaArrowCircleRight className="ml-2" />
      </button>
    </div>
  );
};

export default ProjectManagement;
