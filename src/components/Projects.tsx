"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";

export default function Projects({ project }) {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem]  rounded-xl p-6 border h-[32rem]">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          {project.heading}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          {project.desc}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={project.img}
            height="100"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            as={Link}
            href={project.site}
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            Try now →
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
