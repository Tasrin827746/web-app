import HeadingComponent from "@/app/components/common/HeadingComponent";
import HeadingDescriptionComponent from "@/app/components/common/HeadingDescriptionComponent";
import ImageComponent from "@/app/components/common/ImageComponent";
import LinkComponent from "@/app/components/common/LinkComponent";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const DocsBanner = () => {
  return (
    <div className="bg-purple-100 min-h-screen flex flex-col items-center px-6 py-10  mt-16">
      {/* Header Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto ">
        <div className="col-span-1">
          <div className="flex gap-2 mb-4">
            <ImageComponent
              src="https://i.ibb.co.com/R3vBNLS/docs.png"
              width={32}
              height={32}
              alt="basee"
              className="h-8 w-8 rounded-md"
            />
            <p className="font-semibold">Docs</p>
          </div>
          <header className="mb-12">
            <HeadingComponent headingLabel="Unleash Creative Collaboration with Docs" />
            <HeadingDescriptionComponent
              headingDescriptionLabel="From Docs to Sheets to Mindnotes, every idea is synced in real-time, with rich media and secure permission control.Take your content collaboration to the next level."
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
        <div className="lg:col-span-2 col-span-1">
          <div className="grid grid-cols-3 grid-rows-2 gap-4 w-full px-4">
            <div className="row-span-2 col-span-1 flex items-center">
              <Image
                width={300}
                height={600}
                src="https://i.ibb.co.com/yhdzdyg/banner1.png"
                alt="Kanban View"
                className="rounded-md "
              />
            </div>
            <div className="row-span-1 col-span-2 flex  items-center">
              <Image
                width={400}
                height={100}
                src="https://i.ibb.co.com/vsxh7JG/banner2.png"
                alt="Grid View"
                className="rounded-md "
              />
            </div>
            <div className="row-span-1 col-span-2 flex  items-center">
              <Image
                width={400}
                height={100}
                src="https://i.ibb.co.com/LPj74mX/banner3.png"
                alt="Gantt View"
                className="rounded-md "
              />
            </div>
        
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocsBanner;
