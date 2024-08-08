"use client";

import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

export default function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <Link href={"/"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Home"
          ></MenuItem>
        </Link>
        <MenuItem setActive={setActive} active={active} item="Projects">
          <div className="flex flex-col space-y-4">
            <HoveredLink href="https://bettercoin.netlify.app/">
              Better Coin
            </HoveredLink>
            <HoveredLink href="https://react-weatherly-app.netlify.app/">
              Weather App
            </HoveredLink>
          </div>
        </MenuItem>
        <Link href={"mailto:abhisingh.april@gmail.com"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Contact Us"
          ></MenuItem>
        </Link>
      </Menu>
    </div>
  );
}
