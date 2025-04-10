import Image from "next/image";
import Link from "next/link";
import React from "react";
import HeadingDescriptionComponent from "../../common/HeadingDescriptionComponent";
import HeadingComponent from "../../common/HeadingComponent";

const CustomerStories = () => {
  const stories = [
    {
      image: "https://i.ibb.co.com/Zxw0fGm/popmart.webp",
      logo: "https://i.ibb.co.com/pQ8W2bv/popmart.png",
      title: "Immerse Yourself in Excitement: POP MART reinvents the POP",
      description:
        "POPMART successfully set up the e-commerce system in just 8 days, supported by Meegle.",
      link: "/popmart",
    },
    {
      image: "https://i.ibb.co.com/RyY108w/nasdallu.webp",
      logo: "https://i.ibb.co.com/Fb2R4v4/nasdally.png",
      title: "Empowering Communities: How Meegle Strengthens Nas Daily's",
      description:
        "Meegle has reshaped Nas Daily’s product team into a more efficient and collaborative force.",
      link: "/nasdaily",
    },
    {
      image: "https://i.ibb.co.com/BytMM0r/mediastorm.webp",
      logo: "https://i.ibb.co.com/yNcN5dQ/mediastorm.png",
      title: "Unlock Creativity: How Meegle Navigates the Central Theme in",
      description:
        "Supported by Meegle, Mediastorm, the premier media start-up, achieved an impressive milestone by creating 130",
      link: "/mediastorm",
    },
  ];

  return (
    <div className="">
        <div className="flex flex-col items-center">
        <HeadingComponent headingLabel={"More Stories From Our Customers"} />
        <HeadingDescriptionComponent
          headingDescriptionLabel={" Check All Stories →"}
        />
        </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        {stories.map((story, index) => (
          <div
            key={index}
            className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow flex flex-col"
          >
            <Image
            width={400}
            height={300}
              src={story?.image}
              alt={story?.logo}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 flex flex-grow flex-col justify-between">
              <div>
                <div className="flex items-center mb-2">
                  <Image width={150} height={150} src={story?.logo} alt="" className="w-28" />
                </div>
                <h3 className="font-semibold text-lg">{story.title}</h3>
                <p className="text-gray-600 text-sm mt-2">
                  {story.description}
                </p>
              </div>

              <Link href={story.link}>
                <button className="mt-6 px-4 py-2 bg-white text-blue-400 font-semibold border border-blue-400 rounded-lg w-40 hover:bg-gray-200 hover:text-blue-600 transition">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerStories;
