"use client";

import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";

// Define the type for each person in the array
type Person = {
  id: number;
  name: string;
  image: string;
};

// Define the array of people with the specified type
const people: Person[] = [
  {
    id: 1,
    name: "HTML",
    image: "/html.png",
  },
  {
    id: 2,
    name: "CSS",
    image: "/css.png",
  },
  {
    id: 3,
    name: "JAVASCRIPT",
    image: "/js.png",
  },
  {
    id: 4,
    name: "REACT.JS",
    image: "/react.png",
  },
  {
    id: 5,
    name: "TAILWIND",
    image: "/tailwind.png",
  },
  {
    id: 6,
    name: "MONGODB",
    image: "/mongo.png",
  },
  {
    id: 7,
    name: "EXPRESS",
    image: "/express.png",
  },
  {
    id: 8,
    name: "NODE.JS",
    image: "/nodejs.png",
  },
];

export function LampDemo() {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        <div className="text-3xl font-bold mb-4">My Skills</div>
        <div className="flex flex-row items-center justify-center w-full">
          <AnimatedTooltip items={people} />
        </div>
      </motion.h1>
    </LampContainer>
  );
}
