import React from "react";
import HeadingComponent from "@/app/components/common/HeadingComponent";
import HeadingDescriptionComponent from "@/app/components/common/HeadingDescriptionComponent";
import ImageComponent from "@/app/components/common/ImageComponent";
import LinkComponent from "@/app/components/common/LinkComponent";

const NewRealise = () => {
  return (
    <div className="bg-white py-12 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-x-8">
        {/* Left Side: Image */}
        <div className="lg:w-1/2">
          <ImageComponent
            width={500}
            height={500}
            src="https://i.ibb.co/VqvPPNg/6j2-PEhd-GJ4-Hbr-Dx-Zb-R2kyj-S940.webp"
            alt="AI Configuration"
            className="rounded-xl shadow-lg"
          />
        </div>

        {/* Right Side: Content */}
        <div className="lg:w-1/2 text-center ml-6 lg:text-left mt-8 lg:mt-0">
          <p className="text-purple-600 font-bold text-lg">New release</p>
          <HeadingComponent headingLabel="Base x OpenAI: Make work a breeze" />
          <HeadingDescriptionComponent
            headingDescriptionLabel=" Generate content at scale with a single AI prompt. Update content
            effortlessly with automation."
          />
          <LinkComponent hrefText="/contactsales" linkLabel="Get early access" />
        </div>
      </div>
    </div>
  );
};

export default NewRealise;
