// import HeadingComponent from "@/app/components/common/HeadingComponent";
// import HeadingDescriptionComponent from "@/app/components/common/HeadingDescriptionComponent";
// import ImageComponent from "@/app/components/common/ImageComponent";
// import LinkComponent from "@/app/components/common/LinkComponent";
import Link from "next/link";
import React from "react";
import ImageComponent from "./ImageComponent";
import HeadingComponent from "./HeadingComponent";
import HeadingDescriptionComponent from "./HeadingDescriptionComponent";
import LinkComponent from "./LinkComponent";

interface BannerComponentProps {
    logoSRC: string;
    logoLabel: string;
    headingLabel: string;
    headingDescriptionLabel: string;
    hrefText: string;
    linkLabel: string;
    bannerImageSRC: string;
  }



const BannerComponent: React.FC<BannerComponentProps> = ({
  logoSRC,
  logoLabel,
  headingLabel,
  headingDescriptionLabel,
  hrefText,
  linkLabel,
  bannerImageSRC,
}) => {
  return (
    <div className="bg-purple-100 min-h-screen w-full flex items-center justify-center ">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
          <div className="">
            <div className="flex gap-2 mb-4">
              <ImageComponent
                src={logoSRC}
                width={32}
                height={32}
                alt="banner logo"
                className="h-8 w-8 rounded-md"
              />
              <p className="font-semibold">{logoLabel}</p>
            </div>
            <header className="mb-12">
              <HeadingComponent headingLabel={headingLabel} />
              <HeadingDescriptionComponent headingDescriptionLabel={headingDescriptionLabel} />
            </header>
            {/* Buttons */}
            <div className="flex gap-4 mb-12">
              <LinkComponent
                hrefText={hrefText}
                linkLabel={linkLabel}
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
              src={bannerImageSRC}
              alt="banner image"
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

export default BannerComponent;
