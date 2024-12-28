"use client";
import React, { useRef, useState } from "react";
// import ProjectTag from "../ui/ProjectTag";
import { projectsData } from "@/constants/projects";
// import { AnimatedTestimonials } from "../ui/animated-testimonials";
import { motion, useInView } from "framer-motion";
import ProjectCard from "../ui/ProjectCard";

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  // const handleTagChange = (newTag:string) => {
  //   setTag(newTag);
  // };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };


  return (
    <section id="projects" className="md:px-16 px-4 md:pb-16 pb-8">
      <h2 className="text-center text-4xl font-bold text-secondary mt-4 mb-8 md:mb-12 ">
        My Projects
      </h2>
      <h2 className="text-base text-text_color text-center my-2">
        Explore some of the design and development projects I’ve worked on,
        showcasing my ability to create engaging and intuitive user experiences
        tailored to meet specific goals.
      </h2>
      {/* <div className="text-white md:flex grid grid-cols-3 flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="UI/UX"
          isSelected={tag === "UI/UX"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web Design"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="App Design"
          isSelected={tag === "Mobile"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Motion Design"
          isSelected={tag === "Mobile"}
        />
      </div> */}
        {/* <AnimatedTestimonials testimonials={filteredProjects}/> */}
        <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
