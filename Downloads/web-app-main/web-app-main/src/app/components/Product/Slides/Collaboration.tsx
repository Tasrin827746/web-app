import Link from "next/link";


const Collaboration = () => {
  return (
    <div className="flex flex-col items-center p-6">
      {/* Header */}
      <h1 className="text-4xl font-semibold text-gray-800 mb-6">
        Edit interactive presentations with collaborators
      </h1>
      <p className="text-lg text-gray-600 text-center max-w-2xl mb-12">
        You can enjoy real-time editing with your collaborators in Slides, and
        comment anywhere to speed up your workflow.
      </p>

      {/* Image Section */}
      <div className="relative max-w-4xl rounded-2xl overflow-hidden">
        <img
          src="https://i.ibb.co.com/SBjFRGh/slides1.jpg"
          alt="Interactive presentations"
          className="w-full rounded-2xl"
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

export default Collaboration;
