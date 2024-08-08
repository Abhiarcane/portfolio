"use client";
import React from "react";
import { WavyBackground } from "@/components/ui/wavy-background";
import { Button } from "./ui/moving-border";
import Link from "next/link";

export function WavyBackgroundDemo() {
  return (
    <WavyBackground className="max-w-4xl mx-auto pb-40">
      <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
        Reach out to me
      </p>
      <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
        Email me if you have any job role that align with my skills
      </p>
    </WavyBackground>
  );
}
