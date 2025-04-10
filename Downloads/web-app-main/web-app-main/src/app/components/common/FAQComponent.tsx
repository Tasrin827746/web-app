import Image from "next/image";
import React from "react";
import HeadingComponent from "./HeadingComponent";

interface FAQItem {
  icon: string;
  title: string;
  description: string;
}

interface FAQComponentProps {
  items: FAQItem[];
}

const FAQComponent: React.FC<FAQComponentProps> = ({ items }) => {
  return (
      <div>
        <div className="text-center">
        <HeadingComponent headingLabel="Help Center - FAQ" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {items.map((item, index) => (
            <div key={index} className="flex items-start p-4 ">
              <div className="mr-4">
                <Image width={28} height={28} src={item.icon} alt="" className="w-7 h-7" />
              </div>
              <div>
                <h3 className="underline text-lg font-semibold text-blue-600 cursor-pointer">
                  {item.title}
                </h3>
                <p className="text-gray-700 mt-2">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

  );
};

export default FAQComponent;
