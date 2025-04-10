
import HeadingComponent from "@/app/components/common/HeadingComponent";
import HeadingDescriptionComponent from "@/app/components/common/HeadingDescriptionComponent";
import ImageComponent from "@/app/components/common/ImageComponent";
import LinkComponent from "@/app/components/common/LinkComponent";
import Link from "next/link";
import React from "react";

const MessengerBanner = () => {
  return (
    <div className="bg-purple-100 min-h-screen  px-6 py-10  mt-16">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto ">
       <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
       <div className="">
          <div className="flex gap-2 mb-4">
            <ImageComponent
              src="https://i.ibb.co.com/BKKF71w/messenger.jpg"
              width={32}
              height={32}
              alt="basee"
              className="h-8 w-8 rounded-md"
            />
            <p className="font-semibold">Messenger</p>
          </div>
          <header className="mb-12">
            <HeadingComponent headingLabel="Get more done in chats" />
            <HeadingDescriptionComponent
              headingDescriptionLabel="  Connect with teams and take action instantly. Teams, tools, an context are all in one chat feed."
            />
          </header>
          {/* Buttons */}
          <div className="flex gap-4 mb-12">
            <LinkComponent
              hrefText="/signup"
              linkLabel="Create Base for unified workflows"
            />
            <Link
              href="/contactsales"
              className="mt-6 text-sm  text-center   px-4 py-2    text-blue-600 border flex whitespace-nowrap items-center border-blue-600 font-semibold  rounded-full shadow hover:bg-blue-50"
            >
              Schedule demo
            </Link>
          </div>
          <p className="text-gray-600 text-xs ml-4">
            Free forever. No credit card required.
          </p>
        </div>

        {/* Cards Section */}
        <div className="">
        <ImageComponent
          src="https://i.ibb.co.com/2t6tfrQ/messengerbanner.png"
          alt="Messenger Banner"
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

export default MessengerBanner;