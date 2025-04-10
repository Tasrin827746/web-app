import Image from "next/image";
import testimonialsData from "./Data/platform.json";
import LinkComponent from "@/app/components/common/LinkComponent";
import HeadingComponent from "@/app/components/common/HeadingComponent";

const NeccessaryApp = () => {
  const testimonials = testimonialsData.testimonials;

  return (
    <div className="">
      {/* Header Section */}
      <header className="text-center py-4">
        <HeadingComponent headingLabel="Lark Base templates for your industries" />
      </header>

      {/* Main Section with Two Blocks */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Card 1 */}
        <div className="bg-blue-50 p-6 rounded-lg shadow-lg grid grid-cols-2 items-center">
          <div className="">
            <h2 className="text-xl font-semibold mt-4 md:mt-0">
              Base for retail
            </h2>
            <p className="text-gray-700 mt-2">
              Use Lark Base for store inspection, inventory management, order
              and inventory tracking, and more.
            </p>
            <button className="mt-4 px-6 py-2 bg-white text-blue-600 font-semibold shadow-md rounded-md self-center md:self-start">
              Get it now
            </button>
          </div>

          <Image
            width={300}
            height={200}
            src="https://i.ibb.co.com/mc8W2Mc/base6.jpg"
            alt="Base for retail"
            className="w-40 h-40 md:w-64 md:h-48 object-cover md:order-last md:ml-16"
          />
        </div>

        {/* Card 2 */}
        <div className="bg-purple-100 p-6 rounded-lg shadow-lg grid grid-cols-2 items-center">
          <div className="">
            <h2 className="text-xl font-semibold mt-4 md:mt-0">
              Base for retail
            </h2>
            <p className="text-gray-700 mt-2">
              Use Lark Base for store inspection, inventory management, order
              and inventory tracking, and more.
            </p>
            <button className="mt-4 px-6 py-2 bg-white text-blue-600 font-semibold shadow-md rounded-md self-center md:self-start">
              Get it now
            </button>
          </div>

          <Image
            width={300}
            height={200}
            src="https://i.ibb.co.com/jgLBW81/base7.jpg"
            alt="Base for retail"
            className="w-40 h-40 md:w-64 md:h-48 object-cover md:order-last md:ml-16"
          />
        </div>
      </section>

      <div className="flex justify-center items-center mb-16">
        <LinkComponent
          hrefText="/contactsales"
          linkLabel="Get Lark Base templates for your use cases"
        />
      </div>

      {/* Footer Section */}
      <footer className="text-center mt-12">
        <p className="text-4xl font-semibold text-gray-800">
          All the apps you need. In one Lark.
        </p>
        <section className="px-6 py-12">
          <div className="flex flex-wrap justify-center gap-12">
            {testimonials.map((item) => (
              <div
                key={item.label}
                className="text-center transform transition-all duration-300 hover:scale-110"
              >
                <div className="w-16 h-16 rounded-xl bg-blue-100 flex items-center justify-center mx-auto cursor-pointer">
                  <Image
                    width={500}
                    height={500}
                    src={item.icon}
                    alt={item.label}
                    className="w-10 h-10 object-contain"
                  />
                </div>
                <p className="mt-2 text-gray-700">{item.label}</p>
              </div>
            ))}
          </div>
        </section>
      </footer>
    </div>
  );
};

export default NeccessaryApp;
