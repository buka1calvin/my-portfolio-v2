import Link from "next/link";
import React from "react";

const ButtonDownload = ({title}:{title:string}) => {
  return (
    <Link
      href="#_"
      className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-secondary rounded group"
    >
      <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-primary rounded group-hover:-mr-4 group-hover:-mt-4">
        <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
      </span>
      <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-primary/45 rounded group-hover:mb-12 group-hover:translate-x-0"></span>
      <span className="relative w-full text-left text-primary transition-colors duration-200 ease-in-out group-hover:text-text_color">
        {title}
      </span>
    </Link>
  );
};

export default ButtonDownload;
