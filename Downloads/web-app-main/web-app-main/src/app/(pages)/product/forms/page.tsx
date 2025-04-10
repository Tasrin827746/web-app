import FormBanner from '@/app/components/Product/Form/FormBanner'
import React from 'react'
import LeftSideImagePart from "@/app/components/common/LeftSideImagePart";
import RightSideImagePart from "@/app/components/common/RightSideImagePart";
import TinyFooter from '@/app/components/Product/Form/TinyFooter';
import Templates from '@/app/components/Product/Form/Templates';
import ComapniesSection from '@/app/components/Product/Form/ComapniesSection';

const page = () => {
  const componentsData = [
    {
      type: 'left',
      headingLabel: 'Base x OpenAI: Make work a breeze',
      headingDescriptionLabel: 'Generate content at scale with a single AI prompt. Update content effortlessly with automation.',
      src: 'https://i.ibb.co/VqvPPNg/6j2-PEhd-GJ4-Hbr-Dx-Zb-R2kyj-S940.webp',
      hrefText: '/contactsales',
      linkLabel: 'Get early access',
      subHeading: 'New release',
      altText: 'AI Configuration',
    },
    {
      type: 'right',
      headingLabel: 'Import from Excel with one click',
      headingDescriptionLabel: 'From Excel to Base, transform complex data into actionable insights simply with one click.',
      src: 'https://i.ibb.co/VqvPPNg/6j2-PEhd-GJ4-Hbr-Dx-Zb-R2kyj-S940.webp',
      hrefText: '/contactsales',
      linkLabel: 'Get early access',
      subHeading: 'New release',
      altText: 'AI Configuration',
    }
  ];
  return (
    <div className='space-y-28'>
        <FormBanner />
        <ComapniesSection/>
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
      </div>
      <Templates/>
      <TinyFooter />
    </div>
  )
}

export default page