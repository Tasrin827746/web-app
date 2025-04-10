import Image from "next/image";
import InteractiveButtons from "./InteractiveComponents/InteractiveButtons";
// import { Button } from "@/components/ui/button";

const Banner = () => {
  return (
    <section className="bg-gradient-to-t from-blue-200 to-cyan-50 py-16 relative">
      <div className="container mx-auto px-6 lg:px-16 text-center">
        {/* Headline */}
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
          Your <span className="c">Digital Hub</span> to
          <br />
          simplify business operations
        </h1>
        <p className="mt-4 lg:text-lg text-textGray">
          Turn boardroom vision into operational excellence with tools for
          centralized <br /> communication, project management, digital workflows,
          analytics, and more.
        </p>
        {/* <div className="flex items-center justify-center space-x-4 mt-8">
        <Button variant="primaryButton">primaryButton</Button>
        <Button variant="secondaryButton">secondaryButton</Button>
        </div> */}

        {/* Review Section */}
        <div className="mt-6 flex justify-center items-center space-x-3">
          {/* Star Icons */}
          <div className="flex items-center">
            {Array(5)
              .fill(0)
              .map((_, index) => (
                <svg
                  key={index}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="w-5 h-5 text-yellow-400"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.6l3.09 6.26L22 10.27l-5 4.87L18.18 22 12 18.77 5.82 22 7 15.14 2 10.27l6.91-1.41L12 2.6z" />
                </svg>
              ))}
          </div>
          <p className="text-gray-700 text-base lg:text-sm">
            <span className="font-semibold">4.9</span> Based on 2,300+ reviews
            on <span className="font-bold">App Store</span>
          </p>
        </div>

        {/* Call-to-Action Buttons (Interactive Component) */}
        <InteractiveButtons />

        {/* Mockup Images */}
        <div className="mt-12 relative grid lg:grid-cols-3 gap-8 items-center">
          {/* Image 1 */}
          <div className="flex justify-center">
            <Image
              src="https://i.postimg.cc/hvSpSj66/banner.avif"
              alt="Dashboard preview"
              width={500}
              height={350}
              className="rounded-lg shadow-lg bg-lime-100"
            />
          </div>

          {/* Image 2 */}
          <div className="flex justify-center">
            <Image
              src="https://i.postimg.cc/hvSpSj66/banner.avif"
              alt="Mobile preview"
              width={300}
              height={500}
              className="rounded-lg shadow-lg bg-slate-200"
            />
          </div>

          {/* Image 3 */}
          <div className="flex justify-center">
            <Image
              src="https://i.postimg.cc/hvSpSj66/banner.avif"
              alt="Dashboard preview"
              width={500}
              height={350}
              className="rounded-lg shadow-lg bg-purple-100"
            />
          </div>
        </div>

        {/* Trusted Logos */}
        <div className="text-center my-10 px-4 relative">
          <h3 className="text-defaultText mb-8 uppercase">
            Trusted by fast-growing companies from 125+ countries
          </h3>
          <div className="flex flex-wrap justify-center gap-4 relative" style={{ top: '-14px' }}>
            <div className="bg-white rounded-md flex items-center justify-center" style={{ width: 96, height: 56 }}>
              <Image
                src="https://i.ibb.co/tbQgGbg/nio.png"
                alt="Brand 1"
                width={60}
                height={24}
                className="object-contain"
                priority
              />
            </div>
            <div className="bg-white rounded-md flex items-center justify-center" style={{ width: 96, height: 56 }}>
              <Image
                src="https://i.ibb.co/tbQgGbg/nio.png"
                alt="Brand 2"
                width={60}
                height={24}
                className="object-contain"
                priority
              />
            </div>
            <div className="bg-white rounded-md flex items-center justify-center" style={{ width: 96, height: 56 }}>
              <Image
                src="https://i.ibb.co/XL0D7Cp/anker-vector-logo.png"
                alt="Brand 3"
                width={60}
                height={24}
                className="object-contain"
                priority
              />
            </div>
            <div className="bg-white rounded-md flex items-center justify-center" style={{ width: 96, height: 56 }}>
              <Image
                src="https://i.ibb.co/tbQgGbg/nio.png"
                alt="Brand 2"
                width={60}
                height={24}
                className="object-contain"
                priority
              />
            </div>
            <div className="bg-white rounded-md flex items-center justify-center" style={{ width: 96, height: 56 }}>
              <Image
                src="https://i.ibb.co/XL0D7Cp/anker-vector-logo.png"
                alt="Brand 3"
                width={60}
                height={24}
                className="object-contain"
                priority
              />
            </div>
            <div className="bg-white rounded-md flex items-center justify-center" style={{ width: 96, height: 56 }}>
              <Image
                src="https://i.ibb.co/mJ6zxDT/Carro-Logo-1.png"
                alt="Brand 4"
                width={60}
                height={24}
                className="object-contain"
                priority
              />
            </div>
            <div className="bg-white rounded-md flex items-center justify-center" style={{ width: 96, height: 56 }}>
              <Image
                src="https://i.ibb.co/L8cbbVm/advance.png"
                alt="Brand 5"
                width={60}
                height={24}
                className="object-contain"
                priority
              />
            </div>
            <div className="bg-white rounded-md flex items-center justify-center" style={{ width: 96, height: 56 }}>
              <Image
                src="https://i.ibb.co/L8cbbVm/advance.png"
                alt="Brand 6"
                width={60}
                height={24}
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
