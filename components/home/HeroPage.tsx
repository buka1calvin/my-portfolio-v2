"use client";
import React from "react";
import { BackgroundBeamsWithCollision } from "../ui/background-beams-with-collision";
import Image from "next/image";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import ButtonMore from "../ui/ButtonMore";
import ButtonDownload from "../ui/ButtonDownload";

const HeroPage = () => {
  return (
    <BackgroundBeamsWithCollision>
      <section className="max-w-screen w-full mt-16 h-full relative flex items-center justify-center overflow-hidden md:px-20 px-4">
        <div className=" flex items-center max-w-6xl w-full h-full">
          <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-r from-primary to-primary rounded-full blur-3xl opacity-70"></div>
          <div className="absolute bottom-0 right-0 w-60 h-60 bg-gradient-to-r from-primary to-primary rounded-full blur-3xl opacity-70"></div>
          <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-r from-primary to-primary rounded-full blur-3xl opacity-70"></div>
          <div className="absolute bottom-0 right-0 w-60 h-60 bg-gradient-to-r from-primary to-primary rounded-full blur-3xl opacity-70"></div>
          <div className="absolute left-0 h-full pointer-events-none opacity-20 flex flex-col space-y-10">
            <svg
              className="w-32 h-32 mt-10"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 2L2 7l10 5 10-5-10-5zm0 7l10 5-10 5-10-5 10-5zm10 5v6M2 14v6"
              />
            </svg>

            <svg
              className="w-40 h-40 ml-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 11H5M12 6l-7 7 7 7"
              />
            </svg>

            <svg
              className="w-28 h-28 ml-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 20h5v-2a8 8 0 00-8-8H5v2h9a6 6 0 016 6z"
              />
            </svg>
          </div>

          <div className="absolute right-0 h-full pointer-events-none opacity-20 flex flex-col space-y-10">
            <svg
              className="w-36 h-36 mb-10"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 10h18M3 14h18"
              />
            </svg>

            <svg
              className="w-48 h-48 mr-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 16V6a1 1 0 011-1h3m-1 10H6a2 2 0 00-2 2v3h8v-3a2 2 0 00-2-2z"
              />
            </svg>

            <svg
              className="w-32 h-32 mr-8"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 2l-5 9h10l-5-9zm0 3.3a1.7 1.7 0 11-1.7 1.7 1.7 1.7 0 011.7-1.7zm7 11.7v1a2 2 0 01-2 2h-4a2 2 0 01-2-2v-1h8z"
              />
            </svg>
          </div>

          <div className="flex md:flex-row flex-col-reverse gap-8 z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="col-span-8 place-self-center md:mt-0 mt-10 text-center sm:text-left justify-self-start"
            >
              <h1 className="text-white font-semibold text-lg bg-secondary/15 w-fit px-2">
                👋 Hello I'm
              </h1>
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="col-span-4 md:hidden block place-self-center mt-4 lg:mt-0"
              >
                <div className="rounded-full bg-neutral-800 shadow-inner shadow-purple-400/40 border border-neutral-900 w-[150px] h-[150px] relative flex justify-center items-center overflow-hidden">
                  <Image
                    src="/images/profile.png"
                    alt="hero image"
                    className="w-[100px] h-[100px]  rounded-b-[50px] md:w-[250px] md:h-[300px]"
                    width={250}
                    height={300}
                    loading="lazy"
                  />
                </div>
              </motion.div>
              <h1 className="text-white mb-3 text-4xl font-extrabold">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-tertiary">
                  Calvin Bukarani
                </span>
              </h1>
              <TypeAnimation
                sequence={[
                  "Crafting Intuitive Interfaces",
                  1000,
                  "Designing Engaging User Experiences",
                  1000,
                  "Transforming Ideas into Reality",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-orange-200 text-2xl sm:text-3xl lg:text-4xl mb-6 font-semibold"
              />
              <p className="mb-4 mt-3 text-sm lg:leading-normal text-text_color">
                I'm a passionate UI/UX Designer dedicated to creating seamless
                and visually stunning digital experiences. With a keen eye for
                detail and a user-centered approach, I transform complex ideas
                into intuitive designs that leave a lasting impact.
              </p>

              <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-400 to-tertiary mb-4 text-lg sm:text-xl md:text-2xl font-bold">
                Let's Build Something Amazing Together!
              </h2>
              <div className="socials flex flex-row gap-2">
                <Link href="https://github.com/yourusername" passHref>
                  <FaGithub className="w-6 h-6 text-tertiary" />
                </Link>
                <Link href="https://www.linkedin.com/in/yourusername" passHref>
                  <FaLinkedin className="w-6 h-6 text-tertiary" />
                </Link>
                <Link href="https://www.instagram.com/yourusername" passHref>
                  <FaInstagram className="w-6 h-6 text-tertiary" />
                </Link>
              </div>
              <br />
              <br />
              <br />
              <div className="flex md:gap-4">
              <ButtonDownload title="Download CV"/>
              <ButtonMore button="Learn More"/>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="col-span-4 md:block hidden place-self-center mt-4 lg:mt-0"
            >
              <div className="rounded-full bg-background shadow-inner shadow-neutral-400/40 border border-background w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative flex justify-center items-center overflow-hidden">
                <Image
                  src="/images/profile.png"
                  alt="hero image"
                  className="w-full h-full rounde lg:w-[320px] lg:h-[400px]"
                  width={250}
                  height={300}
                  loading="lazy"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </BackgroundBeamsWithCollision>
  );
};

export default HeroPage;
