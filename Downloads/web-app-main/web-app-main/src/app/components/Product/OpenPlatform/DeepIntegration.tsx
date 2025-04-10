'use client';
import React, { useState } from "react";
import HeadingComponent from "../../common/HeadingComponent";
import HeadingDescriptionComponent from "../../common/HeadingDescriptionComponent";
import Image from "next/image";

const DeepIntegration = () => {
  const [showMore, setShowMore] = useState(false);

  const cards = [
    { title: "Contacts", apis: "73 APIs", events: "17 Events", color: "bg-amber-50", icon: "https://i.ibb.co.com/WKD19Jy/contact.png" },
    { title: "Messenger", apis: "86 APIs", events: "13 Events", color: "bg-green-100", icon: "https://i.ibb.co.com/BKKF71w/messenger.jpg" },
    { title: "Calendar", apis: "35 APIs", events: "4 Events", color: "bg-orange-50", icon: "https://i.ibb.co.com/NmPfYqv/calender.jpg" },
    { title: "Drive", apis: "36 APIs", events: "8 Events", color: "bg-blue-100", icon: "https://i.ibb.co.com/DGWfmDY/drive.png" },
    { title: "Doc", apis: "11 APIs", events: "8 Events", color: "bg-purple-50", icon: "https://i.ibb.co.com/R3vBNLS/docs.png" },
    { title: "Sheet", apis: "56 APIs", events: "8 Events", color: "bg-teal-100", icon: "https://i.ibb.co.com/tzVD8kC/sheet.png" },
    { title: "Wiki", apis: "14 APIs", events: "8 Events", color: "bg-indigo-100", icon: "https://i.ibb.co.com/vQTrcZn/m-Ru-FNIyra-FZRVq-HNSd1gf-P4izg.jpg" },
    { title: "Rooms", apis: "", events: "4 Events", color: "bg-green-50", icon: "https://i.ibb.co.com/L0ZnkD1/rooms.jpg" },
    { title: "Video Conferencing", apis: "71 APIs", events: "19 Events", color: "bg-teal-100", icon: "https://i.ibb.co.com/Nn9yPHr/meetings.jpg" },
    { title: "App Information", apis: "22 APIs", events: "11 Events", color: "bg-blue-50", icon: "https://i.ibb.co.com/FBYNb9B/appinfo.png" },
    { title: "Email", apis: "37 APIs", events: "8 Events", color: "bg-amber-100", icon: "https://i.ibb.co.com/CMxL9Vm/maill.jpg" },
    { title: "Approval", apis: "51 APIs", events: "7 Events", color: "bg-cyan-50", icon: "https://i.ibb.co.com/9TzsFGc/approvall.png" },
    { title: "AI", apis: "8 APIs", events: "8 Events", color: "bg-green-100", icon: "https://i.ibb.co.com/tm0fFsW/AI.png" },
    { title: "Attendance", apis: "48 APIs", events: "1 Event", color: "bg-blue-50", icon: "https://i.ibb.co.com/9gcxkPk/attendance.png" },
    { title: "Tasks", apis: "52 APIs", events: "8 Events", color: "bg-pink-100", icon: "https://i.ibb.co.com/pQ0gyJT/task.png" },
    { title: "Company Information", apis: "37 APIs", events: "8 Events", color: "bg-purple-50", icon: "https://i.ibb.co.com/Fhx9kSc/companyinfo.png" },
    { title: "Admin", apis: "51 APIs", events: "7 Events", color: "bg-indigo-100", icon: "https://i.ibb.co.com/fv2X2FF/admin.png" },
    { title: "OKR", apis: "8 APIs", events: "8 Events", color: "bg-blue-50", icon: "https://i.ibb.co.com/tY35PZj/okr.jpg" },
    { title: "Workplace", apis: "48 APIs", events: "1 Event", color: "bg-orange-100", icon: "https://i.ibb.co.com/TrgPzTd/workplace.png" },
    { title: "Base", apis: "52 APIs", events: "8 Events", color: "bg-teal-50", icon: "https://i.ibb.co.com/Xb8ZRzr/basee.jpg" },
  ];

  const visibleCards = showMore ? cards : cards.slice(0, 12);

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-6">
        {/* Main Heading */}
        <div className="text-center">
        <HeadingComponent headingLabel="Leverage open capabilities for deep integration" />
        <HeadingDescriptionComponent
          headingDescriptionLabel="Diversified, robust APIs help to integrate your own system with Lark."
        />
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-8">
          {visibleCards.map((card, index) => (
            <div
              key={index}
              className={`${card?.color} p-4 rounded-xl text-center`}
            >
              {/* Image Icon */}
              <Image
                src={card?.icon}
                alt={card?.title}
                width={32}
                height={32}
                className="w-6 h-6 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">{card?.title}</h3>
              <p className="text-gray-600 mt-2">{card?.apis}</p>
              {card?.events && <p className="text-gray-500">{card?.events}</p>}
            </div>
          ))}
        </div>

        {/* Show More Button */}
        <div className="mt-8 flex items-center justify-center">
          <button
            onClick={() => setShowMore(!showMore)}
            className="text-blue-600 flex items-center justify-center gap-2 hover:text-blue-800"
          >
            {showMore ? "Show Less" : "Show More"}
            <span className="text-lg">{showMore ? "▲" : "▼"}</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default DeepIntegration;
