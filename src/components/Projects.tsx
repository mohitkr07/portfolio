"use client";
import React, { useEffect, useRef, useState } from "react";
import cityMarketImg from "@/assets/citymarket.png";
import { TfiAngleLeft } from "react-icons/tfi";
import { TfiAngleRight } from "react-icons/tfi";
import { LuGithub } from "react-icons/lu";
import { GoLinkExternal } from "react-icons/go";
import { VscGithubAlt } from "react-icons/vsc";
import { FiExternalLink } from "react-icons/fi";


const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Project 1",
      description:
        "A modern web application built with React and Tailwind CSS. A modern web application built with React and Tailwind CSS. A modern web application built with React and Tailwind CSS. A modern web application built with React and Tailwind CSS.",
      image: "https://via.placeholder.com/800x600",
    },
    {
      id: 2,
      title: "Project 2",
      description: "An e-commerce platform with a focus on user experience.",
      image: "https://via.placeholder.com/800x600",
    },
    {
      id: 3,
      title: "Project 3",
      description: "A mobile-responsive portfolio website showcasing my work.",
      image: "https://via.placeholder.com/800x600",
    },
    {
      id: 4,
      title: "Project 4",
      description:
        "A modern web application built with React and Tailwind CSS.",
      image: "https://via.placeholder.com/800x600",
    },
    {
      id: 5,
      title: "Project 5",
      description: "An e-commerce platform with a focus on user experience.",
      image: "https://via.placeholder.com/800x600",
    },
  ];
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false); // Track hover state
  const slideRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
      let interval: NodeJS.Timeout;

      // Only set the interval if not hovered
      if (!isHovered) {
          interval = setInterval(() => {
              handleSlide('right');
          }, 8000);
      }

      // Clear the interval on cleanup or when hovered
      return () => clearInterval(interval);
  }, [current, isHovered]); // Re-run effect when `current` or `isHovered` changes

  const handleSlide = (direction: string) => {
    if (slideRef.current) {
      const slideWidth = slideRef.current.clientWidth;
      let newCurrent;

      if (direction === "left") {
        newCurrent = (current - 1 + projects.length) % projects.length;
      } else if (direction === "right") {
        newCurrent = (current + 1) % projects.length;
      } else {
        return;
      }

      setCurrent(newCurrent);

      slideRef.current.scrollTo({
        left: newCurrent * slideWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <div
      style={{ minHeight: "calc(100vh - 4rem)" }}
      className="flex gap-4 flex-col items-center justify-center w-full bg-gradient-to-r from-purple-100 to-indigo-50"
    >
      <section
        className="flex flex-col justify-between h-[70vh] text-gray-600 body-font w-[95%] lg:w-[80%] snap-x curr-slide"
        onMouseEnter={() => setIsHovered(true)} // Set hover state to true
        onMouseLeave={() => setIsHovered(false)} // Set hover state to false
      >
        <div
          ref={slideRef}
          className="flex grow w-full overflow-hidden no-scrollbar snap-mandatory"
        >
          {projects.map((project, ind) => (
            <div
              key={project.id}
              className="min-w-full container mx-auto flex px-5 md:flex-row flex-col items-center snap-start"
            >
              <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                <img
                  className="object-cover object-center rounded"
                  alt="hero"
                  src={cityMarketImg.src}
                />
              </div>
              <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                <div className="flex w-full justify-between">
                  <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                    {project.title}
                  </h1>

                  <div className="flex gap-1">
                    <a href="#" className="text-2xl h-fit p-1 hover:text-black" target="_blank">
                      <LuGithub />
                    </a>
                    <a href="#" className="text-2xl h-fit p-1 hover:text-black" target="_blank">
                      <FiExternalLink />
                    </a>
                  </div>
                </div>
                <p className="mb-8 leading-relaxed">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-4 control-section z-10">
          <div className="flex gap-[6px]">
            {projects.map((project, ind) => (
              <div
                key={project.id}
                className={`min-w-5 h-[10px] rounded-md bg-gray-300 ${
                  current === ind ? "w-14" : ""
                }`}
              >
                <div
                  className={`h-full rounded-md ${
                    current === ind ? "slide-loader" : ""
                  }`}
                />
              </div>
            ))}
          </div>
          <button
            onClick={() => handleSlide("left")}
            className="text-black text-3xl border-0 py-2 px-2 focus:outline-none"
          >
            <TfiAngleLeft />
          </button>
          <button
            onClick={() => handleSlide("right")}
            className="text-black text-3xl border-0 py-2 px-2 focus:outline-none"
          >
            <TfiAngleRight />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Projects;
