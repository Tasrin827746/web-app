
import HeadingComponent from "@/app/components/common/HeadingComponent";
import HeadingDescriptionComponent from "@/app/components/common/HeadingDescriptionComponent";
import ImageComponent from "@/app/components/common/ImageComponent";
import LinkComponent from "@/app/components/common/LinkComponent";
import Link from "next/link";
import React from "react";

const EmailBanner = () => {
  return (
    <div className="bg-purple-100 min-h-screen  px-6 py-10  mt-16">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto ">
       <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
       <div className="">
          <div className="flex gap-2 mb-4">
            <ImageComponent
              src="https://i.ibb.co.com/CMxL9Vm/maill.jpg"
              width={32}
              height={32}
              alt="email Logo"
              className="h-8 w-8 rounded-md"
            />
            <p className="font-semibold">Email</p>
          </div>
          <header className="mb-12">
            <HeadingComponent headingLabel="Get Lark Mail for free" />
            <HeadingDescriptionComponent
              headingDescriptionLabel="Lark Mail provides comprehensive email capabilities, with no need to change your email habits. It supports mail syncing across multiple devices, offline reading, new email notifications, and other important functions for sending and receiving mail."
            />
          </header>
          {/* Buttons */}
          <div className="flex gap-4 mb-12">
            <LinkComponent
              hrefText="/signup"
              linkLabel="Get free Lark-hosted email service"
            />
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
          src="https://i.ibb.co.com/rpJYV6y/emailbanner.jpg"
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

export default EmailBanner;