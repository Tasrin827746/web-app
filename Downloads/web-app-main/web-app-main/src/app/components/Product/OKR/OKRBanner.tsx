import React from 'react'
import ImageComponent from '../../common/ImageComponent'
import HeadingComponent from '../../common/HeadingComponent'
import HeadingDescriptionComponent from '../../common/HeadingDescriptionComponent'
import LinkComponent from '../../common/LinkComponent'

const OKRBanner = () => {
    return(
        <div className="bg-gradient-to-b px-10 lg:px-0 from-blue-100 to-blue-50 min-h-96 py-20 w-full flex items-center justify-center ">
        {/* Header Section */}
        <div className="max-w-7xl mx-auto ">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
            <div className="">
    
              <header className="mb-12">
                <HeadingComponent headingLabel={"Lark Webinar Reach and engage your audiences at scale"} />
                <HeadingDescriptionComponent headingDescriptionLabel={"From remote training to company wide meetings, Lark Webinar supports up to 10,000 people when hosting engaging and high-quality online events."} />
              </header>
              {/* Buttons */}
              <div className="flex gap-4 mb-12">
                <LinkComponent
                  hrefText="/contactsales"
                  linkLabel="Contact us"
                />
              </div>
              <p className="text-gray-600 text-xs ml-4">
                Free forever. No credit card required.
              </p>
            </div>
    
            {/* Cards Section */}
            <div className="">
              <ImageComponent
                src="https://i.ibb.co.com/zQNwdSG/okrbanner.webp"
                alt="banner image"
                className="rounded-xl"
                width={600}
                height={500}
              />
            </div>
          </div>
        </div>
      </div>
       )
}

export default OKRBanner