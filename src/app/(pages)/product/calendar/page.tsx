import React from 'react';
import LeftSideImagePart from "@/app/components/common/LeftSideImagePart";
import RightSideImagePart from "@/app/components/common/RightSideImagePart";
import AllApps from '@/app/components/Product/Email/AllApps';
import BannerComponent from '@/app/components/common/BannerComponent';


const Page: React.FC = () => {


  const componentsData = [
    {
      type: 'left',
      subHeading: 'Recordings',
      headingLabel: 'Digest a 30-minute meeting in 10 minutes ',
      headingDescriptionLabel: 'Play meeting recordings at custom speed, fast forward or rewind to content of interest, and skip silent parts.',
      src: 'https://i.ibb.co.com/566BRBZ/minutes1.jpg',
      hrefText: '/contactsales',
      linkLabel: 'Get early access',
      altText: 'AI Configuration',
    },
    {
      type: 'right',
      subHeading: 'Interactive Transcripts',
      headingLabel: 'Experience interactive meeting minutes',
      headingDescriptionLabel: "Make your voices heard, even when you can't attend meetings: post comments on specific parts, or react with emojis.",
      src: 'https://i.ibb.co.com/3p2jJmD/minutes2.jpg',
      hrefText: '/contactsales',
      linkLabel: 'Get early access',
      altText: 'AI Configuration',
    },
    {
      type: 'left',
      subHeading: 'Multilingual Collaboration',
      headingLabel: 'View meetings in your own language',
      headingDescriptionLabel: ' Share emails to chat to allow multi-channel collaboration across internal and external communications.',
      src: 'https://i.ibb.co.com/9TZkT9N/minute3.jpg',
      hrefText: '/contactsales',
      linkLabel: 'Free demo',
      altText: 'AI Configuration',
    }
  ];

  return (
    <div className="space-y-28">
        <BannerComponent  
         logoSRC="https://i.ibb.co.com/NmPfYqv/calender.jpg"
        logoLabel="Calendar"
        headingLabel="Stay on schedule"
        headingDescriptionLabel=" Manage your own calendars in one place and stay in the know of your team's availability from the same screen. Extend the conversation beyond just the calendar hold."
        hrefText="/signup"
        linkLabel="Try for free"
       bannerImageSRC="https://i.ibb.co.com/9s5rfMJ/calendarbanner.jpg"
  />
      <div className="space-y-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {componentsData.map((component, index) => {
          if (component.type === 'left') {
            return (
              <LeftSideImagePart
                key={index}
                headingLabel={component.headingLabel}
                headingDescriptionLabel={component.headingDescriptionLabel}
                src={component.src}
                hrefText={component.hrefText}
                linkLabel={component.linkLabel}
                subHeading={component.subHeading}
                altText={component.altText}
              />
            );
          } else if (component.type === 'right') {
            return (
              <RightSideImagePart
                key={index}
                headingLabel={component.headingLabel}
                headingDescriptionLabel={component.headingDescriptionLabel}
                src={component.src}
                hrefText={component.hrefText}
                linkLabel={component.linkLabel}
                subHeading={component.subHeading}
                altText={component.altText}
              />
            );
          }
          return null;
        })}
        <AllApps />
      </div>
    </div>
  );
};

export default Page;