import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowCircleRight } from "react-icons/fa";

const SecurityCompliance = () => {
  const certifications = [
    {
      src: "https://i.ibb.co.com/P5DNZth/robust1.png",
      alt: "Certification 1",
    },
    {
      src: "https://i.ibb.co.com/0QfV42H/robust2.png",
      alt: "Certification 2",
    },
    {
      src: "https://i.ibb.co.com/FsDBX99/robust3.png",
      alt: "Certification 3",
    },
    {
      src: "https://i.ibb.co.com/cJJz43r/robst4.png",
      alt: "Certification 4",
    },
    {
      src: "https://i.ibb.co.com/S5tcK8H/middle.png",
      alt: "Certification 5",
    },
    {
      src: "https://i.ibb.co.com/7p7HgmM/robust5.png",
      alt: "Certification 5",
    },
    {
      src: "https://i.ibb.co.com/yPK1khV/robust6.png",
      alt: "Certification 5",
    },
  ];

  return (
    <div className="bg-white w-full px-6">
      {/* Heading Section */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Robust Data Security and Compliance
        </h2>
        <p className="text-gray-600 font-semibold">
          Protecting customer data security is a top priority and the foundation
          of our relationship with our customers.
        </p>
        <Link
          href="/learn-more"
          className="text-blue-500 font-medium mt-4 inline-block"
        >
          Learn More →
        </Link>
      </div>

      {/* Certifications Section */}
      <div className="flex w-full justify-center gap-10 mt-7">
        {certifications.map((cert, index) => (
          <Image
            key={index}
            src={cert?.src}
            alt={cert?.alt}
            className="h-12 object-contain"
            width={60}
            height={60}
          />
        ))}
      </div>

      {/* Map Section */}
      <div className="min-h-96 my-20 flex flex-wrap items-center justify-center">
        <div className="relative">
          <Image
          width={700}
            height={500}
            src="https://i.ibb.co.com/cb7vFp7/robust.webp"
            alt="Security Compliance"
            className="h-96 max-w-6xl w-auto mx-auto object-contain"
          />
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center">
        <h3 className="text-3xl font-bold text-gray-800 mb-6">
          Navigate Project Success with <br /> Meegle, Today
        </h3>
        <p className="text-gray-600 font-semibold">
          Limited time offers are available. Pay less to get more today.
        </p>
        <div className="flex justify-center gap-4 mt-6 mb-8">
          <button className="mt-10 px-6 py-3 bg-gradientLinear hover:hover-bg-gradientLinear whitespace-nowrap  text-white text-[15px] font-semibold rounded-full shadow transition flex items-center">
            Try for Free <FaArrowCircleRight className="ml-2" />
          </button>
          <button className="mt-10 px-6 whitespace-nowrap py-3 bg-white text-blue-600 border border-blue-600 rounded-full hover:bg-gray-100 transition">
            Join Our Community
          </button>
        </div>
      </div>
    </div>
  );
};

export default SecurityCompliance;
