"use client";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import Link from "next/link";
import { Button } from "./ui/moving-border";

export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Checkout",
    },
    {
      text: "my",
    },
    {
      text: "paper",
    },
    {
      text: "at",
    },
    {
      text: "IEEE Conference",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center px-4 py-6 sm:px-6 sm:py-8 md:px-8 md:py-12">
      <p className="text-neutral-600 dark:text-neutral-200 text-sm sm:text-base md:text-lg text-center mb-4">
        Mapify: Map your day to day activities.
      </p>
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 space-x-0 md:space-x-4 mt-4">
        <Button
          borderRadius="3rem"
          className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800  px-4 text-sm md:text-base"
        >
          <Link href="https://www.researchgate.net/publication/381203772_MAPIFY_Map_Your_Day-to-Day_Activities_using_Web_Application">
            Checkout
          </Link>
        </Button>
      </div>
    </div>
  );
}
