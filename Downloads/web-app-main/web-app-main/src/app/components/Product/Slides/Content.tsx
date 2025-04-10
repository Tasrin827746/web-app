import Link from "next/link";


const Content = () => {



  return (
    <div className="flex flex-col items-center p-6">
      {/* Header */}
      <h1 className="text-4xl font-semibold text-gray-800 mb-6">
      Keep your content safe with Slides
      </h1>
      <p className="text-lg text-gray-600 text-center max-w-2xl mb-12">
      Manage the reach of your content through permission settings.
      Additionally, with a live link, present anywhere on any device.
      </p>
      {/* Image Section */}
      <div className="relative max-w-4xl rounded-xl overflow-hidden">
        <img
          src="https://i.ibb.co.com/tKqhv1d/hh.jpg"
          alt="Interactive presentations"
          className="w-full"
        />
      </div>
      <Link
        href="/contactsales"
        className="mt-6 text-sm  text-center   px-4 py-2    text-blue-600 border flex whitespace-nowrap items-center border-blue-600 font-semibold  rounded-full shadow hover:bg-blue-50"
      >
        Get a free demo
      </Link>
     
    </div>
  );
};

export default Content;
