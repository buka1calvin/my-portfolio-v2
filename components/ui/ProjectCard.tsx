import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import Link from "next/link";
interface ProjectCardProps {
    imgUrl: string;
    title: string;
    description: string;
    gitUrl: string;
    previewUrl: string;
}
const ProjectCard = ({ imgUrl, title, description, previewUrl }:ProjectCardProps) => {
  return (
    <div>
      <div
        className="h-52 md:h-52 relative group"
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
      >
        <Link href={previewUrl} className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 ">
        <p className="text-text_color/60">{description}</p>
        </Link>
      </div>
      <div className="text-white rounded-b-xl mt-3 bg-[#181818]py-6 px-4">
        <div className="flex items-center justify-between w-full">
        <h5 className="text-xl font-semibold mb-2 text-tertiary">{title}</h5>
        <Link href={previewUrl}>
        <FaExternalLinkAlt className="text-stone-500"/>
        </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
