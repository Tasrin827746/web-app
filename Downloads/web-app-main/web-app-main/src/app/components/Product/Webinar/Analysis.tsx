'use client';
import Image from "next/image";
import React, { useState } from "react";
import HeadingComponent from "../../common/HeadingComponent";
interface Option {
    title: string;
    description: string;
    image: string;
  }

  const options:Option[] = [
    {
      title: "Permission Management",
      description:
        "Manage permissions for panelists or attendees with ease for a more organized event.",
      image: "https://i.ibb.co.com/dt09Z42/webinar1.webp",
    },
    {
      title: "Rehearsal Mode",
      description:
        "Encourage panelists to review the agenda, test their equipment, and prepare in advance for a successful webinar. ",
      image: "https://i.ibb.co.com/2tH5Zt0/webinar2.webp",
    },
    {
      title: "Webinar Analysis",
      description:
        "Automatically generate analytics dashboards, to efficiently review attendee reporting and measure event success.",
        image: "https://i.ibb.co.com/JHZnrSv/webinar3.webp",
    },
  ];
  

const Analysis = () => {
  const [activeOption, setActiveOption] = useState("Permission Management");


  return (
    <div className="flex flex-col lg:flex-row items-center gap-10 lg:items-start justify-between container mx-auto px-6 py-12">
      {/* Left Section */}
      <div className="lg:w-1/2">
      <div className="bg-blue-100 text-blue-600 font-semibold px-3 py-1 rounded-md w-max">
            Webinar preparation and analysis
          </div>
          <HeadingComponent headingLabel={"Create, prepare and analyze webinars efficiently"} />
        <div className="">
          {options?.map((option) => (
            <div
              key={option?.title}
              className={`p-4 cursor-pointer transition-all duration-300 ${
                activeOption === option?.title ? "bg-white shadow-lg rounded-2xl border" : ""
              }`}
              onClick={() => setActiveOption(option?.title)}
            >
              <h2 className = {`text-xl font-semibold hover:text-blue-600 ${
                activeOption === option?.title ? "text-blue-600" : ""
              }`}>{option?.title}</h2>
              {activeOption === option?.title && (
                <p className="mt-2 text-gray-light">{option?.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Right Section */}
      <div className="lg:w-1/2 lg:mt-0 flex justify-center">
        <Image
          src={options?.find((option) => option?.title === activeOption)?.image || ""}
          alt={activeOption}
          className="w-full h-auto max-w-xl rounded-lg shadow-lg mt-20"
          width={500}
            height={500}
        />
      </div>
    </div>
  );
};

export default Analysis;
