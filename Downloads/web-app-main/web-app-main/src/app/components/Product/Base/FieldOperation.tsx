import HeadingComponent from "@/app/components/common/HeadingComponent";
import HeadingDescriptionComponent from "@/app/components/common/HeadingDescriptionComponent";
import ImageComponent from "@/app/components/common/ImageComponent";
import LinkComponent from "@/app/components/common/LinkComponent";
import React from "react";

const FieldOperation = () => {
  return (
    <div className="bg-white py-12 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-x-8">
        {/* Left Side: Image */}
        <div className="lg:w-1/2">
          <ImageComponent
            width={500}
            height={500}
            src="https://i.ibb.co.com/X2JXm48/base2.jpg"
            alt="AI Configuration"
          />
        </div>

        {/* Right Side: Content */}
        <div className="lg:w-1/2 text-center ml-6 lg:text-left mt-8 lg:mt-0">
          <p className="text-purple-600 font-bold text-lg">Field operations</p>
          <HeadingComponent headingLabel="Leave no defects behind." />
          <HeadingDescriptionComponent
            headingDescriptionLabel="Inventory tracking, repair request, site selection, you name it.
            Report and resolve frontline needs in a few taps on a form."
          />
          <LinkComponent hrefText="/contactsales" linkLabel="Free demo" />
        </div>
      </div>
    </div>
  );
};

export default FieldOperation;
