import React, { useState } from "react";
import { projects } from "../data/constants";
import ProjectCard from "./ProjectCard";
const Projects = ({ openModal, setOpenModal }) => {
  const [toggle, setToggle] = useState("all");
  return (
    <div
      id="projects"
      className="relative z-1 bg-gradient-to-b from-opacity-0 via-opacity-6 to-opacity-0 p-2 flex flex-col justify-center items-center"
    >
      {/* wrapper */}
      <div className="relative flex justify-between items-center flex-col w-full max-w-[1350px] p-[10px] pb-[100px] gap-3 ">
        {/* title */}
        <h2 className="md:text-[42px] text-center font-semibold  text-darkTheme-text_primary md:mt-5 mt-3 text-[32px]">
          Projects
        </h2>
        {/* descp */}
        <p className="md:text-[18px] text-center max-w-[600px] text-darkTheme-text_secondary mt-3 text-[16px] md:mt-0">
          {" "}
          I have worked on a wide range of projects. From web apps to android
          apps. Here are some of my projects.
        </p>
        <div className="flex justify-center items-center gap-7 flex-wrap ">
          {projects.map((project, index) => (
            <ProjectCard
              project={project}
              openModal={openModal}
              setOpenModal={setOpenModal}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
