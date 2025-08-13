import React from "react";
import { motion } from "motion/react";
import Team1 from "../assets/team/team-1.jpg";
import Team2 from "../assets/team/team-2.jpg";

const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-screen my-7 rounded-lg px-4 sm:px-6 lg:px-12">
      <div className="hero-content flex flex-col-reverse lg:flex-row-reverse gap-10 lg:gap-20">
        {/* Images */}
        <div className="flex-1 flex flex-col sm:flex-row lg:flex-col items-center gap-6">
          {/* প্রথম ইমেজ - ধীরে ধীরে উপরে নিচে যাবে */}
          <motion.img
            animate={{ y: [0, -25, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            src={Team1}
            className="w-64 sm:w-72 lg:w-80 border-s-8 border-b-8 border-blue-600 rounded-t-[35px] rounded-br-[35px] shadow-2xl object-cover"
          />
          {/* দ্বিতীয় ইমেজ - প্রথমটার বিপরীতে মুভ করবে */}
          <motion.img
            animate={{ y: [-25, 0, -25] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            src={Team2}
            className="w-64 sm:w-72 lg:w-80 border-s-8 border-b-8 border-blue-600 rounded-t-[35px] rounded-br-[35px] shadow-2xl object-cover"
          />
        </div>

        {/* Text Content */}
        <div className="flex-1 text-center lg:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight"
          >
            The Easiest{" "}
            <motion.span
              animate={{
                color: ["#ff5733", "#33ff33", "#8a33ff"],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              Way to Get
            </motion.span>{" "}
            Your New Job
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 2, ease: "easeOut" }}
            className="py-6 text-gray-600 text-base sm:text-lg max-w-lg mx-auto lg:mx-0"
          >
            Each month, more than 3 million job seekers turn to our website in
            their search for work, making over 140,000 applications every single
            day.
          </motion.p>

          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn btn-primary px-6 text-lg"
          >
            Get Started
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
