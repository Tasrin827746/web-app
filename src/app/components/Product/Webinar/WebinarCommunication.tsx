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
        title: "Simultaneous Interpretation",
        description:
          "Remove language barriers with simultaneous interpretation for seamless cross-language communication.",
        image: "https://i.ibb.co.com/TgB8jh5/webinar4.jpg",
      },
      {
        title: "Auto-translated Subtitles",
        description:
          "Supports multi-lingual subtitles that can be translated in real-time. ",
        image: "https://i.ibb.co.com/VNxzVKw/webinar5.jpg",
      }
  ];
  

const WebinarCommunication = () => {
    const [activeOption, setActiveOption] = useState<string>(options[0].title);

    const activeOptionData = options.find((option) => option.title === activeOption);


    return (
      <div className="flex flex-col lg:flex-row items-center gap-10 lg:items-start justify-between container mx-auto px-6 py-12">
        {/* Left Section */}
        <div className="lg:w-1/2">
        <div className="bg-blue-100 text-blue-600 font-semibold px-3 py-1 rounded-md w-max">
        Seamless communication
            </div>
            <HeadingComponent headingLabel={"With Lark Webinar, every voice can be heard"} />
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
        {activeOptionData?.image && (
          <Image
            src={activeOptionData.image}
            alt={activeOption}
            className="w-full h-auto max-w-xl rounded-lg shadow-lg mt-20"
            width={500}
            height={500}
          />
        )}
        </div>
      </div>
    );
}

export default WebinarCommunication