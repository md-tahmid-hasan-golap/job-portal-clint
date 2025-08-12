import React from "react";
import { motion } from "motion/react";

import Team1 from "../assets/team/team-1.jpg";
import Team2 from "../assets/team/team-2.jpg";
const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-screen my-7 rounded-lg">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="flex-1">
          {" "}
          <motion.img
            animate={{ y: [100, 150, 100] }}
            transition={{ duration: 10, delay: 5, repeat: Infinity }}
            src={Team1}
            className="max-w-sm border-s-8 border-b-8 border-blue-600 rounded-t-[35px] rounded-br-[35px] shadow-2xl"
          />
          <motion.img
            animate={{ x: [100, 150, 100] }}
            transition={{ duration: 5, repeat: Infinity }}
            src={Team2}
            className="max-w-sm border-s-8 border-b-8 border-blue-600 rounded-t-[35px] rounded-br-[35px] shadow-2xl"
          />
        </div>
        <div className="flex-1">
          {/* <motion.h1
            animate={{ rotate: 180, transition: { duration: 4 } }}
            className="text-5xl font-bold"
          >
            The Easiest Way to Get Your New Job
          </motion.h1> */}
          <motion.h1
            initial={{ scale: 0 }}
            animate={{ scale: 1, transition: { duration: 4 } }}
            className="text-5xl font-bold"
          >
            The Easiest{" "}
            <motion.span
              animate={{
                color: ["#ff5733", "#33ff33", "#8a33ff"],
                transition: { duration: 2, repeat: Infinity },
              }}
            >
              Way to Get{" "}
            </motion.span>
            Your New Job
          </motion.h1>
          <p className="py-6">
            Each month, more than 3 million job seekers turn to website in their
            search for work, making over 140,000 applications every single day
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
