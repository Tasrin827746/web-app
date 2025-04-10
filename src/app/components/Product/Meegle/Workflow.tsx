import React from "react";
import HeadingComponent from "../../common/HeadingComponent";
import HeadingDescriptionComponent from "../../common/HeadingDescriptionComponent";
import Image from "next/image";

const Workflow = () => {
  const cards = [
    {
      title: "Linked. Every Step.",
      description:
        "Tired of constant back-and-forth? Let the workflow smoothly with continuous dependencies in one seamless workflow.",
      bgColor: "bg-pink-50",
      image: "https://i.ibb.co/VqvPPNg/6j2-PEhd-GJ4-Hbr-Dx-Zb-R2kyj-S940.webp",
    },
    {
      title: "Connected. Every Team.",
      description:
        "Losing transparency of who's doing what? Meegle unites cross-functional teams with clear roles and responsibilities.",
      bgColor: "bg-blue-50",
      image: "https://i.ibb.co/VqvPPNg/6j2-PEhd-GJ4-Hbr-Dx-Zb-R2kyj-S940.webp",
    },
    {
      title: "Launched. Every Dream.",
      description:
        "Bring your ideas to life with structured workflows and actionable tasks.",
      bgColor: "bg-green-50",
      image: "https://i.ibb.co/VqvPPNg/6j2-PEhd-GJ4-Hbr-Dx-Zb-R2kyj-S940.webp",
    },
  ];

  return (
    <section >
      <div className="text-center mb-15">
      <HeadingComponent headingLabel="Experience Workflows Like Never Before" />
      </div>

      <div className="flex flex-col gap-8">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`flex items-center justify-between p-6 rounded-lg shadow-lg ${card?.bgColor} relative`}
          >
            {/* Text Content */}
            <div
              className={`flex-1 ${index % 2 === 0 ? "order-1" : "order-2"}`}
            >
              <HeadingComponent headingLabel={card?.title} />
              <HeadingDescriptionComponent
                headingDescriptionLabel={card?.description}
              />
            </div>

            {/* Image */}
            <div
              className={`flex-shrink-0 ${
                index % 2 === 0 ? "order-2" : "order-1"
              }`}
            >
              <Image
                width={256}
                height={256}
                src={card.image}
                alt=""
                className="w-64 h-64 object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Workflow;
