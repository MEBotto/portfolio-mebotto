"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="">
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24">
          <div className="">BIOGRAPHY</div>
          <div className="">SKILLS</div>
          <div className="">EXPERIENCE</div>
        </div>
        <div className="hidden"></div>
      </div>
    </motion.div>
  );
}
