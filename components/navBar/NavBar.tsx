"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/moving-border";
import { usePathname } from "next/navigation";
import { TiThMenuOutline } from "react-icons/ti";
import { navLinks } from "@/constants/navLinks";
import OverlayModel from "../ui/OverlayModel";
import XsNavbar from "./XsNavbar";

const Navbar = ({ className }: { className?: string }) => {
  const pathname = usePathname();
  const [isModelOpen,setIsModelOpen]=useState(false)
  return (
<nav
  className={cn(
    "max-h-20 fixed top-2 inset-x-0 max-w-6xl mx-auto z-[1000]",
    className
  )}
>
  <div className="flex py-3 max-w-6xl mx-auto md:px-6 px-5 justify-between items-center bg-stone-700 rounded-full">
    <Link href="/">
      <Image src="/icons/logo.svg" alt="" width={200} height={350} />
    </Link>
    <div className="text-text_color font-light md:flex space-x-4 hidden">
      {navLinks.map((item, i) => {
        const isActive = pathname === item.path;
        return (
          <Link
            key={i}
            href={item.path}
            className={cn(
              "text-sm",
              isActive
                ? "bg-neutral-600/20 shadow-inner shadow-secondary"
                : ""
            )}
          >
            {item.title}
          </Link>
        );
      })}
    </div>
    <div className="w-fit md:block hidden flex-shrink-0">
      <Button borderRadius="1.75rem">Contact Me</Button>
    </div>
    <button
      onClick={() => setIsModelOpen(true)}
      className="md:hidden flex justify-center items-center p-1 rounded border border-tertiary text-tertiary"
    >
      <TiThMenuOutline className="h-9 w-9" />
    </button>
  </div>
  <OverlayModel isOpen={isModelOpen} onClose={() => setIsModelOpen(false)}>
    <XsNavbar />
  </OverlayModel>
</nav>

  );
};

export default Navbar;
