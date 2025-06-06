"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const AccordionCard = () => {
  const router = useRouter();
  const [openSection, setOpenSection] = useState<null | number>(null);

  const toggleSection = (index: number) => {
    setOpenSection(openSection === index ? null : index);
  };

  const sections = [
    {
      title: "What is Lark?",
      content:
        "Lark is a comprehensive productivity superapp designed to streamline collaboration. It combines chat, meetings, document editing, project management, and automation tools in one intuitive platform, simplifying your workflow and enhancing team communication. As a single solution for various needs, Lark ensures you spend less time switching between apps and more time focusing on what truly matters.",
    },
    {
      title: "What is Lark used for?",
      content:
        "Lark is mainly used for work communication across teams using chat, video conferencing, documents, and a wide variety of tools. Lark is an ideal solution for frontline industries or global teams communicating cross-border. It suits teams of all sizes, from small groups to large multinational companies. Additionally, Lark is well-equipped to serve as a project management tool, providing project managers with robust features for planning, tracking, and executing projects effectively.",
    },
    {
      title: "Who owns Lark?",
      content:
        "Lark Technologies Pte. Ltd. provides the new generation of corporate office services: Lark Suite, which is characterized by 'mobile friendliness, real-time collaboration, and uniform access,' helping businesses improve work efficiency, reduce production and management costs, and embrace the transition to more efficient, collaborative, and secure intelligent businesses.",
    },
    {
      title: "What are Lark's safety and security practices?",
      content:
        "As a SaaS service provider, Lark has always taken the security of users’ business and data as its top priority. With complete infrastructure security and business and data security protection system for users, Lark can provide users with all-dimensional protection from the physical to the application and data. For more details, please refer to our security center.",
    },
    {
      title: "Is Lark free?",
      content:
        "Lark offers a completely free Starter Plan suitable for teams of up to 50 users. For larger teams or advanced needs, Lark's Pro Plan, at $12 per user per month. The Enterprise Plan provides tailored options for larger scale operations. Details and specific offerings of each plan can be found on our pricing page.",
    },
  ];

  return (
    <motion.div
      className="container mx-auto"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="p-4 md:p-8 flex flex-col md:flex-row gap-6">
        {/* Left Section: Accordion */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-[32px] font-semibold mb-4">
            Find the answers that you need
          </h2>
          <div className="space-y-4">
            {sections.map((section, index) => (
              <div key={index} className="border-b pb-2">
                <button
                  onClick={() => toggleSection(index)}
                  className="w-full text-left flex gap-4 items-center text-lg font-medium py-2 focus:outline-none"
                >
                  <span className="text-xl opacity-40">
                    {openSection === index ? "x" : "+"}
                  </span>
                  <span className="text-[18px] font-semibold">
                    {section.title}
                  </span>
                </button>
                {openSection === index && (
                  <motion.p
                    className="mt-2 text-[#646a73]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4 }}
                  >
                    {section.content}
                  </motion.p>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Section */}
        <motion.div
          className="flex-1 md:max-w-sm"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="bg-[#f6f6fb] p-4 rounded-lg mb-4 shadow-sm">
            <h3 className="text-[24px] font-semibold mb-2">
              Book a consultation
            </h3>
            <p className="text-[#646a73] text-[18px] mb-4">
              Get dedicated support to make Lark work for you.
            </p>
            <button
              onClick={() => router.push("/components/contact")}
              className="px-4 py-2 border-2 rounded-3xl border-black border-opacity-25 font-medium"
            >
              Book a demo &rarr;
            </button>
          </div>
          <div className="bg-[#f6f6fb] p-4 rounded-lg mb-4 shadow-sm">
            <h3 className="text-[24px] font-semibold mb-2">
              Discover insights
            </h3>
            <p className="text-[#646a73] text-[18px] mb-4">
              Uncover the advantages of Lark for top businesses, gain
              productivity insights, and compare software.
            </p>
            <button className="px-4 py-2 border-2 rounded-3xl border-black border-opacity-25 font-medium">
              Explore Lark Blogs &rarr;
            </button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AccordionCard;
