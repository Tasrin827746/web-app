import React from 'react';
import LeftSideImagePart from "@/app/components/common/LeftSideImagePart";
import RightSideImagePart from "@/app/components/common/RightSideImagePart";
import FAQComponent from "@/app/components/common/FAQComponent";
import messengerFAQ from "../../../../../public/data/messengerFAQ.json";
import ProductivityHub from '@/app/components/Product/Messenger/ProductivityHub';
import BannerComponent from '@/app/components/common/BannerComponent';

interface FAQItem {
  icon: string;
  title: string;
  description: string;
}

const Page: React.FC = () => {
  const items: FAQItem[] = messengerFAQ.items;

  const componentsData = [
    {
      type: 'left',
      headingLabel: 'Collaborate with focus',
      headingDescriptionLabel: 'Instantly get must-know context when entering a group. Create threads for focused discussion without flooding the group feed.',
      src: 'https://i.ibb.co.com/bNcn7Zr/messenger1.jpg',
      hrefText: '/contactsales',
      linkLabel: 'Get early access',
      subHeading: 'New release',
      altText: 'AI Configuration',
    },
    {
      type: 'right',
      subHeading: 'Real-time Auto Translation',
      headingLabel: 'Express yourself natively',
      headingDescriptionLabel: ' Auto-translate all the messages to your own language.Understand the conversation with ease regardless of where you come from.',
      src: 'https://i.ibb.co.com/Tc4XSX0/messenger2.jpg',
      hrefText: '/contactsales',
      linkLabel: 'Get early access',
      altText: 'AI Configuration',
    },
    {
      type: 'left',
      subHeading: 'Rich Formatting',
      headingLabel: 'Show, and tell',
      headingDescriptionLabel: 'Make your point with rich text and annotated screen captures, and applaud with emojis.',
      src: 'https://i.ibb.co.com/DtzSZVL/messenger3.jpg',
      hrefText: '/contactsales',
      linkLabel: 'Free demo',
      altText: 'AI Configuration',
    }
  ];

  return (
    <div className="space-y-28">
      <BannerComponent 
         logoSRC="https://i.ibb.co.com/BKKF71w/messenger.jpg"
        logoLabel="Messenger"
        headingLabel="Get more done in chats"
        headingDescriptionLabel="Connect with teams and take action instantly. Teams, tools, and context are all in one chat feed."
        hrefText="/signup"
        linkLabel="Get unified chat today"
       bannerImageSRC="https://i.ibb.co.com/2t6tfrQ/messengerbanner.png"
  />
      <div className="space-y-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ProductivityHub />
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
        <FAQComponent items={items} />
      </div>
    </div>
  );
};

export default Page;
