"use client";

import { FaPeopleGroup } from "react-icons/fa6";
import { IoHome } from "react-icons/io5";
import { FaBuilding } from "react-icons/fa";
import { useRouter } from "next/navigation";

const Pricing = () => {
  const router = useRouter();

  return (
    <section className="py-12 px-4 md:px-8 lg:px-12 bg-gray-50">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-4xl font-semibold text-gray-800">
          Tailored services for your business
        </h2>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {[
          {
            title: "Starter",
            description: "The essentials to get your team up and running",
            price: "Free for everyone",
            users: "Up to 50 users",
            icon: <FaPeopleGroup className="mx-auto w-16 h-16 text-blue-600" />,
            features: [
              "Unlimited chats & full context of message history",
              "Unlimited AI translation in chats, docs, etc.",
              "Enterprise search across all messages, files, emails, and more",
              "Custom business email",
              "5000 automated workflow executions/month",
              "100GB cloud storage + 200GB email storage",
              "100GB meeting recording and AI meeting minutes",
              "Up to 60 minutes meeting duration",
            ],
            buttonText: "Try for free →",
            buttonAction: () => router.push("/auth/sign-up"),
            bgHover: "hover:bg-blue-50",
          },
          {
            title: "Pro",
            description: "Advanced tools to take your growing team to the next level",
            price: "$12 per user/month",
            users: "Up to 500 users",
            icon: <IoHome className="mx-auto w-16 h-16 text-pink-600" />,
            features: [
              "Everything in Starter, plus:",
              "Basic AI fields and templates",
              "50,000 automated workflow executions/month",
              "1TB cloud storage + 5TB email storage",
              "5TB meeting recordings + AI meeting minutes",
              "Unlimited Wiki knowledge base",
              "24 hours meeting duration and 500 meeting participants",
              "More security and permission controls",
            ],
            buttonText: "Buy Now",
            buttonAction: () => router.push("/components/contact"),
            bgHover: "hover:bg-pink-50",
          },
          {
            title: "Enterprise",
            description: "Unlock advanced security, enhanced features, and seamless collaboration for enterprises",
            price: "Let’s talk!",
            users: "Unlimited users",
            icon: <FaBuilding className="mx-auto w-16 h-16 text-teal-600" />,
            features: [
              "Everything in Pro, plus:",
              "500,000 automated workflow executions/month",
              "10TB cloud storage + unlimited email storage",
              "50TB meeting recordings + AI meeting minutes",
              "Large group collaboration (up to 50,000 users)",
              "Single Sign-On (SSO)",
              "Restricted Mode Group Chat",
              "Advanced security, management, and compliance controls",
            ],
            buttonText: "Contact sales →",
            buttonAction: () => router.push("/components/contact"),
            bgHover: "hover:bg-teal-50",
          },
        ].map((plan, index) => (
          <div
            key={index}
            className={`bg-white rounded-lg shadow-md p-6 cursor-pointer transition flex flex-col h-full ${plan.bgHover}`}
          >
            <div className="text-center -mt-6">{plan.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800 text-center mt-3">{plan.title}</h3>
            <p className="text-gray-600 text-center mt-2">{plan.description}</p>
            <hr className="my-4 border-gray-300" />
            <h4 className="text-2xl font-semibold text-gray-800 text-center">{plan.price}</h4>
            <p className="text-gray-500 text-center mb-4">{plan.users}</p>
            <ul className="space-y-3 flex-grow">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="text-gray-600 flex items-start">
                  <span className="text-blue-600 mr-2">✓</span> {feature}
                </li>
              ))}
            </ul>
            <div className="mt-auto">
              <button
                onClick={plan.buttonAction}
                className="w-full py-3 border-2 rounded-full text-blue-600 border-blue-600 hover:bg-gray-100 transition"
              >
                {plan.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Compare Plans Button */}
      <div className="flex justify-center mt-12">
        <button className="px-6 py-3 border rounded-full text-blue-600 border-blue-600 hover:bg-blue-50">
          Compare different plans
        </button>
      </div>
    </section>
  );
};

export default Pricing;
