'use client';   
import Image from "next/image";
import React, { useState } from "react";
import HeadingComponent from "../../common/HeadingComponent";

const Engagement = () => {
  const [activeOption, setActiveOption] = useState("Rich Interaction");

  const options = [
    {
      title: "Rich Interaction",
      description:
        "Keep your webinar engaging by allowing audiences to send messages, emojis, and polls throughout the event.",
      image: "https://i.ibb.co.com/bvQYJzZ/richwebinar.jpg",
    },
    {
      title: "Branding",
      description:
        "Customize your webinar layout and virtual background to highlight your brand.",
      image: "https://i.ibb.co.com/hWt6gCM/branding.jpg",
    },
  ];

  return (
    <div className="bg-[#F7F9FE]">
           <div className="flex flex-col bg-[#F7F9FE] w-full lg:flex-row items-center lg:items-start gap-10 justify-between container mx-auto px-6 py-12">
      {/* Left Section (Image) */}
      <div className="lg:w-1/2 flex justify-center">
        <Image
          src={
            options?.find((option) => option?.title === activeOption)?.image ||
            ""
          }
          alt={activeOption}
          className="w-full h-auto max-w-xl rounded-lg shadow-lg mt-20"
          width={500}
          height={500}
        />
      </div>

      {/* Right Section (Content Options) */}
      <div className="lg:w-1/2 mt-8 lg:mt-0">
        <div className="bg-blue-100 text-blue-600 font-semibold px-3 py-1 rounded-md w-max">
          Webinar engagement
        </div>
        <HeadingComponent headingLabel={" Connect with all participants creatively"} />
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
    </div>

    </div>
 
  );
};

export default Engagement;
