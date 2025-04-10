import React from 'react'
import ImageComponent from '../../common/ImageComponent'
import HeadingComponent from '../../common/HeadingComponent'
import HeadingDescriptionComponent from '../../common/HeadingDescriptionComponent'
import LinkComponent from '../../common/LinkComponent'
import Link from 'next/link'

const OpenPlatformBanner = () => {
  return (
    <div className="bg-gradient-to-b px-10 lg:px-0 from-blue-100 to-blue-50 min-h-96 py-20 w-full flex items-center justify-center ">
    {/* Header Section */}
    <div className="max-w-7xl mx-auto ">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
        <div className="">

          <header className="mb-12">
            <HeadingComponent headingLabel={"Build your customized Lark"} />
            <HeadingDescriptionComponent headingDescriptionLabel={" An open, swift, and accessible way to reshape workplace experiences"} />
          </header>
          {/* Buttons */}
          <div className="flex gap-4 mb-12">
              <LinkComponent
                hrefText="#"
                linkLabel="CREATE APP"
              />
              <Link
                href="#"
                className="mt-6 text-sm  text-center   px-4 py-2    text-blue-600 border flex whitespace-nowrap items-center border-blue-600 font-semibold  rounded-full shadow hover:bg-blue-50"
              >
                VIEW TUTORIALS
              </Link>
            </div>
          <p className="text-gray-600 text-xs ml-4">
            Free forever. No credit card required.
          </p>
        </div>

        {/* Cards Section */}
        <div className="">
          <ImageComponent
            src="https://i.postimg.cc/CL6CK9X7/openplatform.png"
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

export default OpenPlatformBanner