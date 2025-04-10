import HeadingComponent from "@/app/components/common/HeadingComponent";
import HeadingDescriptionComponent from "@/app/components/common/HeadingDescriptionComponent";
import ImageComponent from "@/app/components/common/ImageComponent";
import LinkComponent from "@/app/components/common/LinkComponent";
import React from "react";

const BusinessInsights = () => {
  return (
    <div className="bg-white py-12 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between">
        {/* Left Side: Content */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <p className="text-purple-500 font-bold text-lg">Business Insights</p>
          <HeadingComponent headingLabel="Turn daily numbers into actions." />
          <HeadingDescriptionComponent
            headingDescriptionLabel="  Transform daily sales figures, production totals, and supply
            fluctuations into charts and graphs easily. Make informed decisions
            with confidence."
          />
          <LinkComponent hrefText="/contactsales" linkLabel="Free demo" />
        </div>

        {/* Right Side: Video */}
        <div className="mt-8 lg:mt-0 lg:w-1/2">
          <ImageComponent
            src="https://i.ibb.co.com/TYRBxQj/base3.jpg"
            alt=""
            className="rounded-xl"
            width={500}
            height={400}
          />
        </div>
      </div>
    </div>
  );
};

export default BusinessInsights;
