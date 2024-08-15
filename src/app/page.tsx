import HeroSection from "@/components/HeroSection";
import Projects from "@/components/Projects";
import { LampDemo } from "@/components/Skills";
import { TypewriterEffectSmoothDemo } from "@/components/Paper";
import { WavyBackground } from "@/components/ui/wavy-background";
import { Button } from "@/components/ui/moving-border";
import { data } from "@/data/project-data.js";
import { LinkedIn, GitHub } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <main className="flex-1">
        <HeroSection />
        <div className="mt-24 px-4 sm:px-6 lg:px-8">
          <div className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 text-center">
            My Projects
          </div>
          <div className="mt-8 flex flex-col gap-6 md:flex-row  justify-center">
            <Projects project={data.project1} />
            <Projects project={data.project2} />
          </div>
        </div>
        <LampDemo />
        <TypewriterEffectSmoothDemo />
      </main>
      <div className="relative">
        <WavyBackground className="max-w-4xl mx-auto pb-40 mt-12 px-4 sm:px-6 lg:px-8">
          <p className="text-3xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
            Get in touch with me
          </p>
          <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
            Im open to job opportunities that align with my skills
          </p>
          <div className="text-center mt-8">
            <Link href="mailto:abhisingh.april@gmail.com">
              <Button className="bg-black">Contact Me</Button>
            </Link>
          </div>
        </WavyBackground>
        <footer className="border-t-2 p-4 border-gray-700 h-44 bg-black text-white">
          <div className="container mx-auto px-4">
            <div className="flex justify-center space-x-6 mb-4">
              <IconButton
                href="https://www.linkedin.com/in/abhiapril/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                <LinkedIn className="text-3xl" />
              </IconButton>
              <IconButton
                href="https://github.com/Abhiarcane"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                <GitHub className="text-3xl" />
              </IconButton>
            </div>
            <div className="text-center">
              <p className="text-gray-400 text-sm">
                &copy; 2024 Your Company. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
