"use client";

import { motion, useInView, useScroll } from "framer-motion";
import Image from "next/image";
import { useRef, RefObject } from "react";
import SkillsWrapper from "../ui/about/skills";
import Brain from "../ui/about/brain";

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const skillRef: RefObject<HTMLDivElement> = useRef(null);
  const experienceRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({ container: containerRef });
  const isSkillRefInView = useInView(skillRef, { margin: "-100px" });
  const isExperienceRefInView = useInView(experienceRef, { margin: "-100px" });

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full overflow-scroll lg:flex" ref={containerRef}>
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:w-1/2">
          <div className="flex flex-col gap-12 justify-center">
            <Image
              src="/profile2.jpg"
              alt=""
              width={112}
              height={112}
              className="w-28 h-28 rounded-full object-cover"
            />
            <h1 className="font-bold text-2xl">BIOGRAPHY</h1>
            <p className="text-lg ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              ex nam vel quod soluta rem consequuntur deserunt alias, aliquam
              repellendus, voluptatibus odit eveniet accusamus qui reprehenderit
              quia autem voluptas voluptates.
            </p>
            <span className="italic">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </span>
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              SKILLS
            </motion.h1>
            <motion.div
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              className="flex gap-4 flex-wrap"
            >
              <SkillsWrapper />
            </motion.div>
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          <div
            className="flex flex-col justify-center pb-48"
            ref={experienceRef}
          >
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl mb-12"
            >
              EXPERIENCE & STUDIES
            </motion.h1>
            <motion.div
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              className=""
            >
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3">
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Title of my job or study
                  </div>
                  <div className="p-3 text-sm italic">
                    Description of my job
                  </div>
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    Date of my job
                  </div>
                  <div className="bg-white p-1 rounded text-sm font-semibold w-fit">
                    Company of my job
                  </div>
                </div>
                {/* CENTER */}
                <div className="w-1/6">
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3"></div>
              </div>
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3"></div>
                {/* CENTER */}
                <div className="w-1/6">
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3">
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Title of my job or study
                  </div>
                  <div className="p-3 text-sm italic">
                    Description of my job
                  </div>
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    Date of my job
                  </div>
                  <div className="bg-white p-1 rounded text-sm font-semibold w-fit">
                    Company of my job
                  </div>
                </div>
              </div>
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3">
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Title of my job or study
                  </div>
                  <div className="p-3 text-sm italic">
                    Description of my job
                  </div>
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    Date of my job
                  </div>
                  <div className="bg-white p-1 rounded text-sm font-semibold w-fit">
                    Company of my job
                  </div>
                </div>
                {/* CENTER */}
                <div className="w-1/6">
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3"></div>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="hidden lg:block w-1/3 sticky top-0 z-30 xl:w-1/2">
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div>
  );
}
