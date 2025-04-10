"use client";
import HeadingComponent from "@/app/components/common/HeadingComponent";
import HeadingDescriptionComponent from "@/app/components/common/HeadingDescriptionComponent";
import ImageComponent from "@/app/components/common/ImageComponent";
import LinkComponent from "@/app/components/common/LinkComponent";
import { useState, useEffect } from "react";

const ProductivityHub = () => {
  // State to track the active tab
  const [activeTab, setActiveTab] = useState("Email Share");

  // Images for each view
  const images = {
    "Email Share": ["https://i.ibb.co.com/Vp3xSdZ/messenger4.jpg"],
    "Calender Scheduling": ["https://i.ibb.co.com/hyBzRgt/messenger7.jpg"],
    Task: ["https://i.ibb.co.com/BqLqJ24/messenger5.jpg"],
    Approval: ["https://i.ibb.co.com/34w6Q6h/messenger6.jpg"],
  };

  // Array of the tabs
  const tabs = Object.keys(images);

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
      <HeadingComponent headingLabel="Turn chats to productivity hubs" />
      <HeadingDescriptionComponent headingDescriptionLabel="Chat connects with everything. Share, schedule, meet, assign, and approve without leaving your chat feed." />

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

export default ProductivityHub;
