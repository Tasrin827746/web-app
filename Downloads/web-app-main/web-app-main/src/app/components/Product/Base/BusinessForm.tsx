"use client";
import HeadingComponent from "@/app/components/common/HeadingComponent";
import ImageComponent from "@/app/components/common/ImageComponent";
import LinkComponent from "@/app/components/common/LinkComponent";
import { useState, useEffect } from "react";

// Define union type for tab keys
type TabKey = "List View" | "Kanban View" | "Gantt View" | "Gallery View";

// Images for each view with type safety
const images: Record<TabKey, string[]> = {
  "List View": ["https://i.ibb.co.com/DG5h3WL/listview.png"],
  "Kanban View": ["https://i.ibb.co.com/cyfYsRc/kanbanview.png"],
  "Gantt View": ["https://i.ibb.co.com/6gQrW5J/ganttview.png"],
  "Gallery View": ["https://i.ibb.co.com/2ZHwsMn/galleryview.png"],
};

const BusinessForm = () => {
  // State to track the active tab
  const [activeTab, setActiveTab] = useState<TabKey>("List View");

  // Array of the tabs
  const tabs = Object.keys(images) as TabKey[];

  useEffect(() => {
    // Set interval to change the tab every 5 seconds
    const interval = setInterval(() => {
      setActiveTab((prevTab) => {
        const currentIndex = tabs.indexOf(prevTab);
        const nextIndex = (currentIndex + 1) % tabs.length; // Cycle through tabs
        return tabs[nextIndex];
      });
    }, 5000); // Change every 5 seconds

    // Cleanup the interval when component is unmounted
    return () => clearInterval(interval);
  }, [tabs]);

  return (
    <div className="flex flex-col items-center w-full">
      {/* Header */}
      <HeadingComponent headingLabel="Understand your business from all angles" />

      {/* Tabs */}
      <div className="flex space-x-4 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`text-purple-600 font-medium text-2xl ${
              activeTab === tab ? "underline" : "hover:underline"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Image Section Centered */}
      <div className="bg-purple-100 rounded-xl p-6 flex justify-center items-center w-full h-full">
        <div className="grid grid-cols-1 gap-8">
          {images[activeTab].map((image, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow p-4 text-center"
            >
              <ImageComponent
                width={800}
                height={400}
                src={image}
                alt={`${activeTab} ${index + 1}`}
                className="rounded w-[800px] h-[400px] object-cover mb-4"
              />
            </div>
          ))}
        </div>
      </div>

      <LinkComponent hrefText="/contactsales" linkLabel=" Learn how" />
    </div>
  );
};

export default BusinessForm;
