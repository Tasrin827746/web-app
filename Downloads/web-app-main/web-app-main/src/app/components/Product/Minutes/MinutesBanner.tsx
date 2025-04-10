
import HeadingComponent from "@/app/components/common/HeadingComponent";
import HeadingDescriptionComponent from "@/app/components/common/HeadingDescriptionComponent";
import ImageComponent from "@/app/components/common/ImageComponent";
import LinkComponent from "@/app/components/common/LinkComponent";
import Link from "next/link";
import React from "react";

const MinutesBanner = () => {
  return (
    <div className="bg-purple-100 min-h-screen  px-6 py-10  mt-16">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto ">
       <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
       <div className="">
          <div className="flex gap-2 mb-4">
            <ImageComponent
              src="https://i.ibb.co.com/hZQS2ZH/minutes.jpg"
              width={32}
              height={32}
              alt="email Logo"
              className="h-8 w-8 rounded-md"
            />
            <p className="font-semibold">Minutes</p>
          </div>
          <header className="mb-12">
            <HeadingComponent headingLabel="Focus on engaging, not note-taking" />
            <HeadingDescriptionComponent
              headingDescriptionLabel=" Lark Minutes automatically transcribes video meetings into transcripts that you can view, search, and collaborate on. Catch up async with a breeze, even when you can't make a meeting."
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
          src="https://i.ibb.co.com/89c4H92/minutebanner.jpg"
          alt="Minutes Banner"
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

export default MinutesBanner;