import React from "react";
import LinkComponent from "../../common/LinkComponent";
import Link from "next/link";

const TinyFooter = () => {
  return (
    <div className="relative bg-purple-50 flex flex-col items-center text-center py-24 px-6">
      <h2 className="text-3xl font-semibold text-gray-900 mb-6">
        Discover a new way to collaborate
      </h2>
      <div className="flex space-x-4">
        <LinkComponent
          hrefText="#"
          linkLabel="Try for free"
        />
        <Link
          href="#"
          className="mt-6 text-sm  text-center   px-4 py-2    text-blue-600 border flex whitespace-nowrap items-center border-blue-600 font-semibold  rounded-full shadow hover:bg-blue-50"
        >
          Contact us
        </Link>
      </div>
      {/* Add decorative images */}
      <div className="absolute left-10 bottom-10">
        <img
          src="https://i.ibb.co.com/fQ4nWqm/footer2.webp"
          alt="Left Illustration"
        />
      </div>
      <div className="absolute right-10 bottom-10">
        <img
          src="https://i.ibb.co.com/v452832/okrfooter.webp"
          alt="Right Illustration"
        />
      </div>
    </div>
  );
};

export default TinyFooter;
