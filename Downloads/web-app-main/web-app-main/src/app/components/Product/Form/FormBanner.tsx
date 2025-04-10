import React from 'react'
import HeadingComponent from '../../common/HeadingComponent'
import HeadingDescriptionComponent from '../../common/HeadingDescriptionComponent'
import LinkComponent from '../../common/LinkComponent'

const FormBanner = () => {
  return (
    <div className="bg-gradient-to-b px-10 lg:px-0 from-amber-100 to-blue-50 min-h-96 py-20 w-full flex items-center justify-center ">
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
        <div
        style={{
          position: 'relative',
          width: '100%',
          height: '0',
          paddingBottom: '109.04%',
        }}
      >
        <iframe
          allow="fullscreen; autoplay"
          allowFullScreen
          height="100%"
          src="https://streamable.com/e/byt3s5?autoplay=1"
          width="100%"
          style={{
            border: 'none',
            width: '100%',
            height: '100%',
            position: 'absolute',
            backgroundColor: 'transparent',
            left: '0',
            top: '0',
            overflow: 'hidden',
          }}
          className='rounded-3xl'
        ></iframe>
      </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default FormBanner