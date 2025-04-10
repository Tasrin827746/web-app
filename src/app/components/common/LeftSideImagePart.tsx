import React from "react";
import HeadingComponent from "./HeadingComponent";
import HeadingDescriptionComponent from "./HeadingDescriptionComponent";
import LinkComponent from "./LinkComponent";
import ImageComponent from "./ImageComponent";

interface LeftSideImagePartProps {
  headingLabel: string;
  headingDescriptionLabel: string;
  src: string;
  hrefText: string;
  linkLabel: string;
  subHeading: string;
  altText: string;
}

const LeftSideImagePart: React.FC<LeftSideImagePartProps>  = ({
  headingLabel,
  headingDescriptionLabel,
  src,
  hrefText,
  linkLabel,
  subHeading,
  altText,
}) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-center w-full">
      {/* Left Side: Content */}
      <div className="">
        <ImageComponent
          src={src}
          alt={altText}
          className="rounded-xl"
          width={600}
          height={500}
        />
      </div>

      {/* Right Side */}
      

      <div className="">
        <p className="text-purple-500 font-bold text-lg">{subHeading}</p>
        <HeadingComponent headingLabel={headingLabel} />
        <HeadingDescriptionComponent
          headingDescriptionLabel={headingDescriptionLabel}
        />
        <LinkComponent hrefText={hrefText} linkLabel={linkLabel} />
      </div>
    
    </div>
  );
};

export default LeftSideImagePart;
