"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-lg">
        <div className="h-1/2 lg:h-full lg:w-1/2 relative">
          <Image
            src={"/profile.png"}
            alt="Profile image"
            fill
            className="object-contain"
          />
        </div>
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center lg:items-start">
          <h1 className="text-4xl md:text-6xl font-bold">
            Hello! I&apos;m Mariano Eloy Botto
          </h1>
          <p className="md:text-xl">
            I&apos;m a frontend developer based in Buenos Aires, Argentina, who
            is currently learning backend. I&apos;m passionate about new
            technologies, I thrive on learning, gaining new skills, and
            overcoming challenges in frontend development.
          </p>
          <div className="flex gap-4">
            <Link
              href={"/portfolio"}
              className="p-4 rounded-lg ring-1 ring-black bg-black text-white"
            >
              View My Work
            </Link>
            <Link
              href={"/contact"}
              className="p-4 rounded-lg ring-1 ring-black"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
