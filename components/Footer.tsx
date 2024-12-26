import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-stone-500 border-l-transparent border-r-transparent text-white">
      <div className="container md:text-start text-center md:px-12 py-12 flex md:flex-row flex-col md:items-center justify-between px-4 md:gap-0 gap-2">
        <Link
          href={"/"}
          className="text-2xl md:text-5xl  text-white font-semibold"
        >
          <Image src="/icons/logo.svg" alt="" width={200} height={350} />
        </Link>
        <p className="text-tertiary">© 2024 Bukarani Calvin. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
