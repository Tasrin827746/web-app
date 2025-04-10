import Link from "next/link";
import React from "react";

interface LinkComponentProps {
  hrefText: string;
  linkLabel: string;
}

const LinkComponent: React.FC<LinkComponentProps> = ({hrefText, linkLabel}) => {
  return (
    <div className="mt-6">
      <Link
        href={hrefText}
        className="mt-6 text-sm whitespace-nowrap  font-semibold text-center rounded-full bg-gradientLinear hover:hover-bg-gradientLinear px-4 py-2 text-white"
      >
        {linkLabel}
      </Link>
    </div>
  );
};

export default LinkComponent;
