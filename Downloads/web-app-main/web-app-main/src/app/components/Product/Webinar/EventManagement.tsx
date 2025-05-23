import React from "react";
import HeadingComponent from "../../common/HeadingComponent";

const EventManagement = () => {
  const sections = [
    {
      title: "Education",
      items: ["Seminar", "Conference", "Workshop"],
    },
    {
      title: "Training",
      items: ["Employee onboarding", "Company training", "Partner enablement"],
    },
    {
      title: "Business",
      items: ["Product launches", "Company training", "Partner enablement"],
    },
  ];

  return (
    <div className="bg-gradient-to-b from-blue-100 to-blue-50 min-h-96 flex flex-col items-center justify-center px-4">
      {/* Title */}
      <HeadingComponent headingLabel={"Easily manage all kinds of events"} />

      {/* Card Container */}
      <div className="flex justify-center flex-wrap gap-12">
        {sections.map((section, index) => (
          <div
            key={index}
            className="flex flex-col bg-white rounded-lg shadow-lg p-6 w-[300px] h-[200px] max-w-sm border border-gray-200"
          >
            {/* Card Title */}
            <h2 className="text-lg font-semibold text-bluetext mb-4">
              {section.title}
            </h2>
            {/* Card Items */}
            <ul className="flex flex-col gap-2">
              {section.items.map((item, idx) => (
                <li key={idx} className="flex items-center text-gray-700">
                  <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventManagement;
