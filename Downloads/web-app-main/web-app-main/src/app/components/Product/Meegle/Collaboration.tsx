import Image from "next/image";
import React from "react";

const Collaboration = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      {/* Heading Section */}
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Redefine Work Collaboration. <br /> Experience a New Level of
          Productivity.
        </h2>
      </div>

      {/* Image Section */}
      <div className="relative w-full max-w-4xl group  bg-white shadow-lg rounded-lg overflow-hidden mt-6">
        <Image
          width={600}
          height={500}
          src="https://i.ibb.co/3dw3R7g/collaborationmeegle.webp"
          alt="Collaboration Preview"
          className="w-full transition-transform duration-300 group-hover:scale-105"
        />

        {/* Button in Middle of Image */}
        <button className="absolute inset-0 m-auto w-44 h-14 text-xl text-white bg-black rounded-full transition-all duration-300 group-hover:bg-purple-600">
          Try it Live
        </button>
      </div>
    </div>
  );
};

export default Collaboration;
