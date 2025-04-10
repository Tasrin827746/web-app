import DemoButton from "./InteractiveComponents/DemoButton";
import TryforFreeButton from "./InteractiveComponents/TryforFreeButton";
import { FaCheck } from "react-icons/fa";

const PayLess = () => {
  return (
    <div className="w-full relative rounded-lg shadow-md overflow-hidden">
      {/* Background Image */}
      <img
        src="https://i.ibb.co.com/y4XTjxw/Pay-Less-Bg.jpg"
        className="w-full h-[510px] md:h-96 lg:h-[420px] object-cover"
        alt="Pay less background"
      />

      {/* Content Section */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6">
        <h2 className="text-2xl md:text-[32px] font-bold text-[#1F2329] mb-4">
          Pay less to get more today
        </h2>
        <p className="text-[#646A73] text-[18px] mb-4 max-w-lg">
          Welcome to contact us. Lark performance consultants will provide you
          with full support.
        </p>

        {/* Feature List */}
        <ul className="list-none flex flex-col md:flex-row justify-center items-center gap-4">
          <li className="text-gray-600 flex items-center gap-2">
            <FaCheck className="text-green-500" />
            Share advanced work methods
          </li>
          <li className="text-gray-600 flex items-center gap-2">
            <FaCheck className="text-green-500" />
            Deliver industry best practices
          </li>
          <li className="text-gray-600 flex items-center gap-2">
            <FaCheck className="text-green-500" />
            Assist organizations to improve efficiency
          </li>
        </ul>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row gap-4 mt-6">
          <DemoButton />
          <TryforFreeButton />
        </div>
      </div>
    </div>
  );
};

export default PayLess;
