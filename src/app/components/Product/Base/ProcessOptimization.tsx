import React from "react";
import HeadingComponent from "@/app/components/common/HeadingComponent";
import HeadingDescriptionComponent from "@/app/components/common/HeadingDescriptionComponent";
import ImageComponent from "@/app/components/common/ImageComponent";
import LinkComponent from "@/app/components/common/LinkComponent";

const ProcessOptimization = () => {
  return (
    <div className="bg-white py-12 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-x-8">
        {/* Left Side: Image */}
        <div className="lg:w-1/2">
          <ImageComponent
            width={500}
            height={500}
            src="https://i.ibb.co.com/C83gg05/base4.jpg"
            alt="AI Configuration"
            className="rounded-xl shadow-lg"
          />
        </div>

        {/* Right Side: Content */}
        <div className="lg:w-1/2 text-center ml-6 lg:text-left mt-8 lg:mt-0">
          <p className="text-purple-600 font-bold text-lg">
            Process optimization
          </p>
          <HeadingComponent headingLabel="Make flawless execution possible" />
          <HeadingDescriptionComponent
            headingDescriptionLabel="  Keep your teams, tasks, and timelines on track, stress-free. Let
            automation do grunt work and help check off tasks day in and day
            out."
          />
          <LinkComponent hrefText="/contactsales" linkLabel="Free demo" />
        </div>
      </div>
    </div>
  );
};

export default ProcessOptimization;
