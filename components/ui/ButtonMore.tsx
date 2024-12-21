import Link from "next/link";
import React from "react";

const ButtonMore = ({ button }: { button: string }) => {
  return (
<Link href="#_" className="w-40 border border-secondary relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-semibold text-white rounded-md shadow-2xl group">
    <span className="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-gradient-to-br from-secondary via-transparent to-tertiary group-hover:opacity-100"></span>
    <span className="absolute top-0 left-0 w-full bg-gradient-to-b from-tertiary to-transparent opacity-5 h-1/3"></span>
    <span className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-tertiary to-transparent opacity-5"></span>
    <span className="absolute bottom-0 left-0 w-4 h-full bg-gradient-to-r from-tertiary to-transparent opacity-5"></span>
    <span className="absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-tertiary to-transparent opacity-5"></span>
    <span className="absolute inset-0 w-full h-full border border-tertiary rounded-md opacity-10"></span>
    <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-tertiary rounded-full group-hover:text-primary group-hover:w-56 group-hover:h-56 opacity-5"></span>
    <span className="relative text-tertiary">{button}</span>
</Link>
  );
};

export default ButtonMore;
