"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

type TabContent = {
  heading: string;
  backgroundImage: string;
  overlayImage: string;
  description: string[];
  textBgColor: string;
};

const CollaborateInteractive = () => {
  const router = useRouter();

  const [isMounted, setIsMounted] = useState(false);
  const [activeTab, setActiveTab] = useState<
    "All Businesses" | "Food & Beverage" | "Retail" | "Technology"
  >("All Businesses");

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  const tabContent: Record<typeof activeTab, TabContent> = {
    "All Businesses": {
      heading: "All Businesses",
      backgroundImage: "https://i.ibb.co/HhFppp5/allbusiness.jpg",
      overlayImage: "https://i.ibb.co/mX6YQRD/overlaybusiness.jpg",
      description: [
        "Work together globally, with translations for chats, documents, meetings, and more.",
        "Manage projects and track progress from your phone.",
        "Streamline approval process for purchases, promotions, and more.",
      ],
      textBgColor: "bg-purple-50",
    },
    "Food & Beverage": {
      heading: "Food & Beverage",
      backgroundImage: "https://i.ibb.co/10y09dq/foodandbev.jpg",
      overlayImage: "https://i.ibb.co/FWDPWg7/foodoverlay.jpg",
      description: [
        "Streamline HQ <> frontline communication with mobile-optimized secure chat.",
        "Digitalize store opening and closing checklists.",
        "Set up approval workflows for purchase, promotions, and more.",
      ],
      textBgColor: "bg-orange-50",
    },
    Retail: {
      heading: "Retail",
      backgroundImage: "https://i.ibb.co/Ctdttgg/retail.jpg",
      overlayImage: "https://i.ibb.co/k3hyqby/retailoverlay.jpg",
      description: [
        "Increase frontline productivity with mobile-optimized chat-based task management.",
        "Digitalize store opening and closing, incident reporting, approvals workflows.",
        "Get daily insights on sales and revenue on your phone.",
      ],
      textBgColor: "bg-blue-50",
    },
    Technology: {
      heading: "Technology",
      backgroundImage: "https://i.ibb.co/N6TcwTm/tech.jpg",
      overlayImage: "https://i.ibb.co/1XzXZpN/techoverlay.jpg",
      description: [
        "Collaborate across borders with translations in chat, docs, meetings.",
        "Manage projects and visualize progress in one-click.",
        "Replace multiple tools for chat, video, docs, analytics, and more with Lark.",
      ],
      textBgColor: "bg-yellow-50",
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9 }}
      viewport={{ once: true }}
    >
      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {Object.keys(tabContent).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab as keyof typeof tabContent)}
            className={`font-bold py-2 px-4 sm:py-3 sm:px-6 ${
              activeTab === tab
                ? "bg-black text-white"
                : "text-black border border-gray-300"
            } rounded-lg text-sm sm:text-base`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row items-center lg:items-stretch lg:space-x-10 space-y-8 lg:space-y-0 w-full max-w-7xl mx-auto h-full lg:h-[600px]">
        {/* Left Image Section */}
        <div className="relative flex-1 bg-gray-100 h-64 sm:h-96 lg:h-full">
          <img
            src={tabContent[activeTab].backgroundImage}
            alt={activeTab}
            className="rounded-3xl w-full h-full object-cover"
          />
          <div className="absolute bottom-4 left-4 lg:bottom-8 lg:left-8 p-4 w-32 sm:w-48 lg:w-64">
            <img
              src={tabContent[activeTab].overlayImage}
              alt="Overlay"
              className="rounded-xl w-full h-auto"
            />
          </div>
        </div>

        {/* Right Text Section */}
        <div
          className={`flex-1 p-6 sm:p-8 rounded-3xl flex flex-col justify-between ${tabContent[activeTab].textBgColor} h-full`}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4">
            {tabContent[activeTab].heading}
          </h2>
          <ul className="space-y-4 sm:space-y-6 text-gray-600 font-semibold text-base sm:text-lg lg:text-xl px-4">
            {tabContent[activeTab].description.map((item, index) => (
              <li key={index} className="flex items-center space-x-4">
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <button
            onClick={() => router.push("/components/contact")}
            className="text-xl bg-gradientLinear text-white px-4 py-2 h-12 w-44 rounded-full shadow-lg font-semibold hover:bg-gradientLinear transition sm:w-40"
          >
            Book a demo
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default CollaborateInteractive;
