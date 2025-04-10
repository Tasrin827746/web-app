import HeadingComponent from "@/app/components/common/HeadingComponent";
import HeadingDescriptionComponent from "@/app/components/common/HeadingDescriptionComponent";
import ImageComponent from "@/app/components/common/ImageComponent";
import LinkComponent from "@/app/components/common/LinkComponent";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Banner = () => {
  return (
    <div className="bg-purple-100 min-h-screen flex flex-col items-center px-6 py-10  mt-16">
      {/* Header Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto ">
        <div className="col-span-1">
          <div className="flex gap-2 mb-4">
            <ImageComponent
              src="https://i.ibb.co.com/Xb8ZRzr/basee.jpg"
              width={32}
              height={32}
              alt="basee"
              className="h-8 w-8 rounded-md"
            />
            <p className="font-semibold">Base</p>
          </div>
          <header className="mb-12">
            <HeadingComponent headingLabel=" Plan, execute, track, and  deliver. From frontline operations to boardroom projects." />
            <HeadingDescriptionComponent
              headingDescriptionLabel="Streamline operational routines, keep track of task 
              completion, and gain actionable insights instantly to keep 
              every part of your business in check."
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
          <div className="grid grid-cols-4 grid-rows-2 gap-4 w-full px-4">
            <div className="row-span-2 col-span-1 flex justify-center items-center">
              <Image
                width={200}
                height={100}
                src="https://i.ibb.co/23NP5W7/basebanner1.png"
                alt="Kanban View"
                className="rounded-md object-cover"
              />
            </div>
            <div className="row-span-1 col-span-1 flex justify-center items-center">
              <Image
                width={200}
                height={100}
                src="https://i.ibb.co/NYWSgjf/basebanner2.png"
                alt="Grid View"
                className="rounded-md object-cover"
              />
            </div>
            <div className="row-span-1 col-span-1 flex justify-center items-center">
              <Image
                width={200}
                height={100}
                src="https://i.ibb.co/5krKWc1/basebanner3.png"
                alt="Gantt View"
                className="rounded-md object-cover"
              />
            </div>
            <div className="row-span-1 col-span-1 flex justify-center items-center">
              <Image
                width={200}
                height={100}
                src="https://i.ibb.co/Mk6HCFd/basebanner4.png"
                alt="Form View"
                className="rounded-md object-cover"
              />
            </div>
            <div className="row-span-1 col-span-1 flex justify-center items-center">
              <Image
                width={200}
                height={100}
                src="https://i.ibb.co/FXPFJhR/basebanner5.png"
                alt="Automated Workflow"
                className="rounded-md object-cover"
              />
            </div>
            <div className="row-span-2 col-span-1 flex justify-center items-center">
              <Image
                width={200}
                height={100}
                src="https://i.ibb.co/m9q5T8K/basebanner6.png"
                alt="Dashboard"
                className="rounded-md object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
