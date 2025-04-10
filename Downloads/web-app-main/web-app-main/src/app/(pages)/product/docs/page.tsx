import React from 'react';
import LeftSideImagePart from "@/app/components/common/LeftSideImagePart";
import RightSideImagePart from "@/app/components/common/RightSideImagePart";
import FAQComponent from "@/app/components/common/FAQComponent";
import docsFAQ from "../../../../../public/data/docsFAQ.json";
import AllApps from '@/app/components/Product/Email/AllApps';
import DocsBanner from '@/app/components/Product/Docs/DocsBanner';

interface FAQItem {
  icon: string;
  title: string;
  description: string;
}

const Page: React.FC = () => {
  const items: FAQItem[] = docsFAQ.items;

  const componentsData = [
    {
      type: 'left',
      subHeading: 'Email Client',
      headingLabel: 'Migrate and sync from Gmail to Lark Mail',
      headingDescriptionLabel: 'Link your Gmail account to Lark to enjoy the seamless integration between email, messenger, and drive — delivered by Lark Mail.',
      src: 'https://i.ibb.co.com/7RtghN9/email1.jpg',
      hrefText: '/contactsales',
      linkLabel: 'Get early access',
      altText: 'AI Configuration',
    },
    {
      type: 'right',
      subHeading: 'Seamless Collaboration',
      headingLabel: 'Integrating Email with Chat',
      headingDescriptionLabel: 'Send announcements to entire chat groups, departments or teams in a breeze.',
      src: 'https://i.ibb.co.com/QDxtpXL/email2.jpg',
      hrefText: '/contactsales',
      linkLabel: 'Get early access',
      altText: 'AI Configuration',
    },
    {
      type: 'left',
      subHeading: 'Integrated with Chat',
      headingLabel: 'Share email to chat',
      headingDescriptionLabel: ' Share emails to chat to allow multi-channel collaboration across internal and external communications.',
      src: 'https://i.ibb.co.com/W2TGqrK/email3.jpg',
      hrefText: '/contactsales',
      linkLabel: 'Free demo',
      altText: 'AI Configuration',
    }
  ];

  return (
    <div className="space-y-28">
      
    <DocsBanner />
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
        <FAQComponent items={items} />
      </div>
    </div>
  );
};

export default Page;