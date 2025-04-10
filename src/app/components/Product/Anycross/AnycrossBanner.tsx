import React from "react";
import ImageComponent from "../../common/ImageComponent";
import HeadingComponent from "../../common/HeadingComponent";
import HeadingDescriptionComponent from "../../common/HeadingDescriptionComponent";
import LinkComponent from "../../common/LinkComponent";
import Link from "next/link";

const AnycrossBanner = () => {
  return (
    <div className="bg-gradient-to-b px-10 lg:px-0 from-indigo-100 to-blue-50 min-h-96 py-20 w-full flex items-center justify-center ">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
          <div className="">
            <div className="flex gap-2 mb-4">
              <ImageComponent
                src="https://i.ibb.co.com/VVRqK5g/anycoss.jpg"
                width={32}
                height={32}
                alt="slides"
                className="h-8 w-8 rounded-md"
              />
              <p className="font-semibold">AnyCross</p>
            </div>

            <header className="mb-12">
              <HeadingComponent
                headingLabel={
                  "Lark Webinar Reach and engage your audiences at scale"
                }
              />
              <HeadingDescriptionComponent
                headingDescriptionLabel={
                  "From remote training to company wide meetings, Lark Webinar supports up to 10,000 people when hosting engaging and high-quality online events."
                }
              />
            </header>
            {/* Buttons */}
            <div className="flex gap-4 mb-12">
              <LinkComponent hrefText="/contactsales" linkLabel="Contact us" />
              <Link
                href="/contactsales"
                className="mt-6 text-sm  text-center   px-4 py-2    text-blue-600 border flex whitespace-nowrap items-center border-blue-600 font-semibold  rounded-full shadow hover:bg-blue-50"
              >
                Contact us
              </Link>
            </div>
            <p className="text-gray-600 text-xs ml-4">
              Free forever. No credit card required.
            </p>
          </div>

          {/* Cards Section */}
          <div className="">
            <ImageComponent
              src="https://i.ibb.co.com/tLr5SLG/anycrossbanner.jpg"
              alt="banner image"
              className="rounded-xl"
              width={600}
              height={500}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnycrossBanner;
