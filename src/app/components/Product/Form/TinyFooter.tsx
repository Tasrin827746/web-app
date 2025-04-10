import React from "react";
import LinkComponent from "../../common/LinkComponent";

const TinyFooter = () => {
  return (
    <div className="bg-gradient-to-t from-white to-amber-100 flex flex-col items-center justify-center text-center py-16 px-4">
      <h2 className="text-4xl font-bold text-gray-dark mb-4">
        Start collecting today.
      </h2>
      <p className="text-lg text-gray-light mb-6">
        No more redundant tools. Save time and costs.
      </p>
      <LinkComponent hrefText="#" linkLabel="Create form →" />
    </div>
  );
};

export default TinyFooter;
