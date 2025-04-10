import HeadingComponent from "@/app/components/common/HeadingComponent";
import LinkComponent from "@/app/components/common/LinkComponent";
import React from "react";

const Import = () => {
  return (
    <div className="bg-white py-12 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between">
        {/* Left Side: Content */}
        <div className="lg:w-1/2 text-center lg:text-left">
        <HeadingComponent headingLabel="Import from Excel with one click" /> 
          <p className="text-gray-600 mt-4 font-medium">
            From Excel to Base, transform complex data into actionable
            insights simply with one click.
          </p>
          <LinkComponent hrefText="/contactsales" linkLabel="Import now" />
        </div>

        {/* Right Side: Video */}
        <div className="mt-8 lg:mt-0 lg:w-1/2">
          <div
            style={{
              position: "relative",
              width: "100%",
              height: "0px",
              paddingBottom: "63.717%",
            }}
          >
            <iframe
              allow="fullscreen; autoplay"
              allowFullScreen
              height="100%"
              src="https://streamable.com/e/425auf?autoplay=1"
              width="100%"
              style={{
                border: "none",
                width: "100%",
                height: "100%",
                position: "absolute",
                left: "0px",
                top: "0px",
                overflow: "hidden",
              }}
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Import;
