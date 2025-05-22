"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const Banner = () => {
  const router = useRouter();

  return (
    <section 
      className="bg-gradient-to-r from-lightMaroon to-lightPurple flex justify-center items-center py-20 px-8"
    >
      <div className="max-w-6xl flex flex-col md:flex-row items-center gap-16">
        {/* Left Content */}
        <motion.div 
          className="md:w-1/2 text-left md:pr-10"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h1 className="text-5xl font-bold text-pink-800 leading-tight">
            Design That Speaks <br /> <span className="text-black">Code That Works</span>
          </h1>
          <p className="text-gray-700 mt-4 text-lg">
            We blend creativity with technology to build brands that shine online.
          </p>
          <button onClick={()=> router.push ('/contact')} className="mt-6 bg-gradient-to-l from-purple to-highlight text-[#fef8dd] font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-gradient-to-r hover:from-red-800 hover:to-red-800 transition">
            Let&apos;s Discuss Your Project
          </button>
        </motion.div>

        {/* Right Image */}
        <motion.div 
          className="md:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="relative w-[600px] h-[350px] rounded-lg overflow-hidden">
        <video
  autoPlay
  muted
  loop
  playsInline
  preload="none"
  className="w-full h-full object-cover"
>
  <source src="/Promotion Video.webm" type="video/webm" />
  <source src="/Promotion Video.mp4" type="video/mp4" />
</video>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;
