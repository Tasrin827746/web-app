import React from "react";
interface HeadingDescriptionComponentProps {
  headingDescriptionLabel: string;
}

const HeadingDescriptionComponent: React.FC<HeadingDescriptionComponentProps> = ({
  headingDescriptionLabel
}) => {
  return <p className="text-gray-600 font-semibold">{headingDescriptionLabel}</p>;
};

export default HeadingDescriptionComponent;
