import OKRBanner from '@/app/components/Product/OKR/OKRBanner'
import React from 'react'
import LeftSideImagePart from "@/app/components/common/LeftSideImagePart";
import RightSideImagePart from "@/app/components/common/RightSideImagePart";
import TinyFooter from '@/app/components/Product/OKR/TinyFooter';

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
        },
        {
          type: 'left',
          subHeading: 'Field operations',
          headingLabel: 'Leave no defects behind.',
          headingDescriptionLabel: 'Inventory tracking, repair request, site selection, you name it. Report and resolve frontline needs in a few taps on a form.',
          src: 'https://i.ibb.co.com/X2JXm48/base2.jpg',
          hrefText: '/contactsales',
          linkLabel: 'Free demo',
          altText: 'AI Configuration',
        },
        {
          type: 'right',
          headingLabel: 'Turn daily numbers into actions.',
          headingDescriptionLabel: 'Transform daily sales figures, production totals, and supply fluctuations into charts and graphs easily. Make informed decisions with confidence.',
          src: 'https://i.ibb.co.com/TYRBxQj/base3.jpg',
          hrefText: '/contactsales',
          linkLabel: 'Free demo',
          subHeading: 'Business Insights',
          altText: 'base3',
        },
        {
          type: 'left',
          subHeading: 'Process optimization',
          headingLabel: 'Make flawless execution possible',
          headingDescriptionLabel: 'Keep your teams, tasks, and timelines on track, stress-free. Let automation do grunt work and help check off tasks day in and day out.',
          src: 'https://i.ibb.co.com/X2JXm48/base2.jpg',
          hrefText: '/contactsales',
          linkLabel: 'Free demo',
          altText: 'AI Configuration',
        },
      ];
  return (
    <div className="space-y-28">
        <OKRBanner />
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
      <p className='text-[15px] text-gray-500 ml-10'>*Lark's use and transfer to any other app of information received from Google APIs will adhere to <span className='text-blue-600 '>Google API Services User Data Policy</span>, including the Limited Use requirements.</p>
      <TinyFooter />
    </div>
  )
}

export default page