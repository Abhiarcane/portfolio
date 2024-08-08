import Link from "next/link";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";

export default function HeroSection() {
  return (
    <div className="relative h-auto md:h-[40rem] w-full rounded-md flex flex-col md:flex-row items-center justify-center overflow-hidden mx-auto py-10 md:py-0 mb-4 pt-36">
      <Spotlight
        className="absolute -top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="flex flex-col items-center justify-center w-full text-center px-4 md:px-0 mt-8 md:mt-0 relative z-10">
        <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          Hey! I'm Abhishek Singh
        </h1>
        <p className="mt-4 text-base md:text-lg lg:text-xl text-neutral-300 max-w-lg mx-auto">
          I'm a FrontEnd Web Developer based in Agra. I create interactive
          websites using HTML, CSS, JavaScript, and React.js.
        </p>
        <div className="mt-6">
          <Link
            href={
              "https://drive.google.com/file/d/1CwrZsr_H9JAbrNiqq15xLGbp-EueQtnD/view?usp=sharing"
            }
          >
            <Button
              borderRadius="3rem"
              className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
            >
              My Resume
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
