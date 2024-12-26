"use client";
import React from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/moving-border";
import { usePathname } from "next/navigation";
import { FaFilePen } from "react-icons/fa6";

const navLinks = [
  {
    icon: FaFilePen,
    title: "About Me",
    path: "#about-Me",
  },
  {
    icon: "",
    title: "Testimonials",
    path: "#testimonials",
  },
  {
    icon: FaFilePen,
    title: "Blogs",
    path: "/blogs",
  },
  {
    icon: "",
    title: "Projects",
    path: "projects",
  },
  {
    icon: "",
    title: "Services",
    path: "/services",
  },
];
const Navbar = ({ className }: { className?: string }) => {
  const pathname = usePathname();
  return (
    <nav
      className={cn("fixed top-2 inset-x-0 max-w-6xl mx-auto z-50 ", className)}
    >
      <div className="flex py-3 max-w-6xl mx-auto justify-between items-center bg-stone-700 rounded-full px-2">
        <Link href="/">
          <Image src="/icons/logo.svg" alt="" width={200} height={350} />
        </Link>
        <div className="text-text_color font-light md:flex space-x-4">
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
        <Button borderRadius="1.75rem" className="">
          Contact Me
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
