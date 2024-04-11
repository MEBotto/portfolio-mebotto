"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import NavLink from "./navlink";
import { motion } from "framer-motion";

const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/portfolio", title: "Portfolio" },
  { url: "/contact", title: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const topVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
      backgroundColor: "rgb(255,255,255)",
    },
  };

  const centerVariants = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };

  const bottomVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
      backgroundColor: "rgb(255,255,255)",
    },
  };

  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-lg">
      <div className="hidden md:flex gap-4 w-1/3">
        {links.map((link) => (
          <NavLink key={link.title} link={link} />
        ))}
      </div>
      <div className="md:hidden lg:flex xl:w-1/3 xl:justify-center">
        <Link
          href={"/"}
          className="text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center"
        >
          <span className="text-white mr-1">MEBotto</span>
          <span className="w-12 h-8 rounded bg-white text-black flex items-center justify-center">
            .dev
          </span>
        </Link>
      </div>
      <div className="hidden md:flex gap-4 w-1/3 justify-end">
        <Link href={"https://github.com/MEBotto"}>
          <Image src={"/github.png"} alt="Github Logo" width={24} height={24} />
        </Link>
        <Link href={"https://instagram.com/mariano_botto03/"}>
          <Image
            src={"/instagram.png"}
            alt="Instagram Logo"
            width={24}
            height={24}
          />
        </Link>
        <Link href={"https://linkedin.com/in/marianobotto/"}>
          <Image
            src={"/linkedin.png"}
            alt="Linkedin Logo"
            width={24}
            height={24}
          />
        </Link>
      </div>
      <div className="md:hidden">
        <button
          className="w-10 h-8 flex flex-col justify-between z-50 relative"
          onClick={() => setOpen(!open)}
        >
          <motion.div
            variants={topVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
          <motion.div
            variants={centerVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded"
          ></motion.div>
          <motion.div
            variants={bottomVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
        </button>
        {open && (
          <div className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl">
            {links.map((link) => (
              <Link href={link.url} key={link.title}>
                {link.title}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
