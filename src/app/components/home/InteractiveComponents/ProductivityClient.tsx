"use client";

import { MdInsights } from "react-icons/md";
import { TbFocus2 } from "react-icons/tb";
import { RiTodoLine } from "react-icons/ri";
import { SiAwssecretsmanager } from "react-icons/si";
import { motion } from "framer-motion";
import DemoButton from "./DemoButton";

const ProductivityClient = () => {
  const fadeInVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* Left Options */}
      <motion.div
        className="space-y-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ staggerChildren: 0.2 }}
      >
        {[
          {
            title: "Designed for businesses of any scale",
            subtitle: "Manage 1, 100 or 1000 outlets with 1 digital hub",
            icon: <SiAwssecretsmanager className="text-2xl" />,
          },
          {
            title: "Run a global workforce from 1 platform",
            subtitle: "Transform cross-border collaboration with Lark's intuitive translation feature",
            icon: <TbFocus2 className="text-2xl" />,
          },
          {
            title: "Get insights from frontline to boardroom",
            subtitle: "Centralise all your business data in one place and mine insights",
            icon: <MdInsights className="text-2xl" />,
          },
          {
            title: "Get things done in minutes, not days",
            subtitle: "Digitalise your workflows like approvals, daily checklist submissions, and reporting",
            icon: <RiTodoLine className="text-2xl" />,
          },
        ].map((item, idx) => (
          <motion.div
            key={idx}
            className="group relative ml-16 px-2 py-2 md:px-4 md:py-4 rounded-lg hover:bg-white hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out box-border"
            variants={fadeInVariant}
          >
            <div className="flex items-center">
              <div className="mr-3 group-hover:text-blue-600">{item.icon}</div>
              <h3 className="font-semibold group-hover:text-blue-600">{item.title}</h3>
            </div>
            <p className="text-gray-500 mt-2 hidden group-hover:block">{item.subtitle}</p>
          </motion.div>
        ))}

        {/* "Book a Demo" Button */}
        <motion.div
          className="mt-8 flex justify-start ml-14"
          variants={fadeInVariant}
        >
         <DemoButton />
        </motion.div>
      </motion.div>

      {/* Right Video */}
      <motion.div
        className="flex items-center justify-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        variants={fadeInVariant}
      >
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "0px",
            paddingBottom: "63.717%",
          }}
        >
          <iframe
            allow="fullscreen; autoplay"
            allowFullScreen
            height="100%"
            src="https://streamable.com/e/zw8d33?autoplay=1"
            width="100%"
            style={{
              border: "none",
              width: "100%",
              height: "100%",
              position: "absolute",
              left: "0px",
              top: "0px",
              overflow: "hidden",
            }}
          ></iframe>
        </div>
      </motion.div>
    </div>
  );
};

export default ProductivityClient;
