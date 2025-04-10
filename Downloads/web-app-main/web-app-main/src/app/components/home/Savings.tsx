import DemoButton from "./InteractiveComponents/DemoButton";

const Savings = () => {
  return (
    <section className="bg-white py-8 px-4 md:px-16 lg:px-24">
      <div className="max-w-6xl flex flex-col lg:flex-row justify-center lg:gap-8 mx-auto items-center text-center lg:text-left">
        {/* Header Section */}
        <div className="max-w-lg">
          <h2 className="text-2xl md:text-3xl lg:text-[32px] font-semibold text-[#1F2329]">
            No more redundant tools <br />
            Save up to 70% of your costs
          </h2>
          {/* CTA Button */}
          <div className="mt-6 md:mt-8">
            <DemoButton />
          </div>
        </div>

        {/* Statistics Section */}
        <div className="flex flex-col md:flex-row items-center justify-center mt-8 gap-6 md:gap-8 w-full">
          <div className="flex flex-col items-center">
            <p className="text-[30px] md:text-5xl font-semibold text-blue-600">70%</p>
            <p className="text-[#646A73] mt-2">cost saved</p>
          </div>
          <div className="hidden md:block border-l border-gray-300 h-12"></div>

          <div className="flex flex-col items-center">
            <p className="text-[30px] md:text-5xl font-semibold text-blue-600">39%</p>
            <p className="text-[#646A73] mt-2">meeting time saved</p>
          </div>
          <div className="hidden md:block border-l border-gray-300 h-12"></div>

          <div className="flex flex-col items-center">
            <p className="text-[30px] md:text-5xl font-semibold text-blue-600">10x</p>
            <p className="text-[#646A73] mt-2">operational efficiency</p>
          </div>
        </div>
      </div>

      {/* Responsive Image */}
      <img src="https://i.ibb.co.com/0cPSDMV/Savings.jpg" alt="Tools" className="w-full mt-8" />
    </section>
  );
};

export default Savings;
