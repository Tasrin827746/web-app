import AnycrossBanner from "@/app/components/Product/Anycross/AnycrossBanner";
import Automation from "@/app/components/Product/Anycross/Automation";
import React from "react";
import Empowered from "../../../components/Product/Anycross/Empowered";
import LeftSideImagePart from "@/app/components/common/LeftSideImagePart";
import RightSideImagePart from "@/app/components/common/RightSideImagePart";
import AllApps from "@/app/components/Product/Email/AllApps";
import Footer from "@/app/components/Product/Slides/Footer";

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
        }
      ];
  return (
    <div className="space-y-28">
      <AnycrossBanner />
      <Automation/>
      <Empowered/>
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
       <AllApps />
       <Footer/>
    </div>
  );
};

export default page;
