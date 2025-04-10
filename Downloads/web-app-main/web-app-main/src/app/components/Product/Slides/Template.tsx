import Link from "next/link";


const Template = () => {


  return (
    <div  className=" flex flex-col items-center p-6 cursor-pointer">
      {/* Header */}
      <h1 className="text-4xl font-semibold text-gray-800 mb-6 text-center">
        Select the perfect template <br /> and jumpstart your project today
      </h1>
      <Link
        href="/contactsales"
        className="mt-6 text-sm  text-center   px-4 py-2    text-blue-600 border flex whitespace-nowrap items-center border-blue-600 font-semibold  rounded-full shadow hover:bg-blue-50"
      >
        Get a free demo
      </Link>

      {/* Image Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full sm:w-[90%] lg:w-[95%] mx-auto mt-12">
        {/* First Image */}
        <div className="rounded-lg overflow-hidden shadow-lg bg-blue-100 p-8 w-full">
          <div className="font-semibold">
            <h1 className="text-xl mb-4">Product analysis report</h1>
            <small className="bg-blue-400 text-white p-2 rounded-full">Template</small>
          </div>
          <img
            src="https://i.ibb.co/xGFHTLn/template1.jpg"
            alt="First Template"
            className="w-full h-[550px] object-cover rounded-lg mt-6"
          />
        </div>

        {/* Second Image */}
        <div className="rounded-lg overflow-hidden shadow-lg bg-green-100 p-8 w-full">
          <div className="font-semibold">
            <h1 className="text-xl mb-4">Enterprise business plan</h1>
            <small className="bg-green-400 text-white p-2 rounded-full">Template</small>
          </div>
          <img
            src="https://i.ibb.co/YjsDYT0/template2.jpg"
            alt="Second Template"
            className="w-full h-[550px] object-cover rounded-lg mt-6"
          />
        </div>

        {/* Third Image */}
        <div className="rounded-lg overflow-hidden shadow-lg bg-purple-100 p-8 w-full">
          <div className="font-semibold">
            <h1 className="text-xl mb-4">Enterprise business plan</h1>
            <small className="bg-purple-400 text-white p-2 rounded-full">Template</small>
          </div>
          <img
            src="https://i.ibb.co/whHsX1w/template3.jpg"
            alt="Third Template"
            className="w-full h-[550px] object-cover rounded-lg mt-6"
          />
        </div>
      </div>
    </div>
  );
};

export default Template;
