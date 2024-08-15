"use client";

import Image from "next/image";
import React, { useState } from "react";
import {
  motion,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";

type TooltipItem = {
  id: number;
  name: string;
  image: string;
};

interface AnimatedTooltipProps {
  items: TooltipItem[];
}

export const AnimatedTooltip: React.FC<AnimatedTooltipProps> = ({ items }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const springConfig = { stiffness: 100, damping: 5 };
  const x = useMotionValue(0);

  // rotate the tooltip
  const rotate = useSpring(
    useTransform(x, [-100, 100], [-45, 45]),
    springConfig
  );

  // translate the tooltip
  const translateX = useSpring(
    useTransform(x, [-100, 100], [-50, 50]),
    springConfig
  );

  const handleMouseMove = (event: React.MouseEvent<HTMLImageElement>) => {
    const halfWidth = event.currentTarget.offsetWidth / 2;
    x.set(event.nativeEvent.offsetX - halfWidth);
  };

  return (
    <>
      {items.map((item) => (
        <div
          className="relative group p-2 md:p-4"
          key={item.id} // Changed to item.id for uniqueness
          onMouseEnter={() => setHoveredIndex(item.id)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence mode="popLayout">
            {hoveredIndex === item.id && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.6 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 260,
                    damping: 10,
                  },
                }}
                exit={{ opacity: 0, y: 20, scale: 0.6 }}
                style={{
                  translateX: translateX,
                  rotate: rotate,
                  whiteSpace: "nowrap",
                }}
                className="absolute -top-16 md:-top-20 -left-1/2 md:left-1/2 translate-x-1/2 flex text-xs md:text-sm flex-col items-center justify-center rounded-sm md:rounded-md bg-black z-50 shadow-xl px-2 md:px-3 py-1 md:py-2"
              >
                <div className="absolute inset-x-4 md:inset-x-6 z-30 w-[10%] md:w-[15%] -bottom-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent h-px" />
                <div className="absolute left-4 md:left-6 w-[20%] md:w-[30%] z-30 -bottom-px bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px" />
                <div className="font-bold text-white relative z-30 text-xs md:text-sm">
                  {item.name}
                </div>
                <div className="text-white text-xs md:text-sm">
                  {item.image}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          <Image
            onMouseMove={handleMouseMove}
            height={120}
            width={120}
            src={item.image}
            alt={item.name}
            className="object-contain !m-0 !p-0 rounded-sm md:rounded-md h-24 w-24 md:h-32 md:w-32 group-hover:scale-105 group-hover:z-30 relative transition duration-500"
          />
        </div>
      ))}
    </>
  );
};
