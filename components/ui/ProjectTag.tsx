import React from "react";
interface ProjectTagProps {
    name: string;
    onClick: (name: string) => void;
    isSelected: boolean;
}
const ProjectTag = ({ name, onClick, isSelected }:ProjectTagProps) => {
  const buttonStyles = isSelected
    ? "text-secondary bg-neutral-700 border-2 border-dashed border-white/10 border-purple-500"
    : "text-text_color border-slate-600 hover:border-white";
  return (
    <button
      className={`${buttonStyles} bg-neutral-50/10  px-6 py-1 text-base cursor-pointer`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default ProjectTag;
