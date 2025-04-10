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
         logoSRC="https://i.ibb.co.com/Nn9yPHr/meetings.jpg"
        logoLabel="Meetings"
        headingLabel="Turn meetings into true collaborative experiences"
        headingDescriptionLabel="Powerful in-call doc sharing, smart meeting minutes, and mobile-optimized features allow you to get more done together from anywhere, anytime."
        hrefText="/signup"
        linkLabel="Try for free"
       bannerImageSRC="https://i.ibb.co.com/nL1XbS4/meetingbanner.jpg"
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