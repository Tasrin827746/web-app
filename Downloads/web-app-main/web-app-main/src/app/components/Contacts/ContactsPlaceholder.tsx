import React from "react";

interface ContactsPlaceholderProps {
  description: string;
  imageSrc: string;
}

const ContactsPlaceholder: React.FC<ContactsPlaceholderProps> = ({
  description,
  imageSrc,
}) => {
  return (
    <div className="relative flex flex-col items-center justify-center h-full text-gray-600">

      {/* Placeholder content */}
      <div className="flex flex-col items-center justify-center flex-grow mt-12">
        <img src={imageSrc} alt="Placeholder" className="w-40 h-40 mb-4" />
        <p className="text-center max-w-md text-gray-500 text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ContactsPlaceholder;
