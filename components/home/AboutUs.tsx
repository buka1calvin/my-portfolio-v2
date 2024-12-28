import { techStack } from "@/constants/stacks";
import Image from "next/image";
import React from "react";


const AboutUs = () => {
  return (
    <section id="about-me" className="max-w-screen min-h-screen w-full h-full relative flex items-center justify-center overflow-hidden md:px-20 px-4">
      <div className="max-w-6xl md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16">
        <Image
          src="/images/about-me.webp"
          width={500}
          height={500}
          alt="About Us"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold mb-4 text-secondary">About Me</h2>
          <p className="text-base text-text_color mb-4">
            Hi! I’m Calvin Bukarani, a passionate Web and Mobile App Developer
            who loves creating seamless digital experiences. With a knack for
            blending functionality and design, I build applications that solve
            real-world problems and delight users.
          </p>
          <h3 className="text-secondary font semibold text-xl mb-4">
            My Technologies
          </h3>
          <div className="grid md:grid-cols-5 grid-cols-3 gap-4">
            {techStack.map((tech, index) => (
                <img
                key={index}
                  src={tech.icon}
                  alt={tech.title}
                  className="w-24 h-fit object-contain bg-slate-300"
                />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
