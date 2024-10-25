"use client";

import { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import { PROJECTS } from "../contants";

const Projects = () => {
  const [hoveredCardIdx, setHoveredCardIdx] = useState<number | null>(null);

  return (
    <section>
      <div
        className="container-width container-padding"
        style={{
          textAlign: "center",
          paddingTop: "10rem",
          paddingBottom: "5rem",
        }}
      >
        <p className="h3">Projects using our tech</p>
        <p className="subtitle1">
          From sending assets P2P to recovering your lost account
        </p>
        <div className="project-cards-container">
          {PROJECTS.map((project, index) => (
            <ProjectCard
              {...project}
              key={project.title}
              index={index}
              hoveredCardIdx={hoveredCardIdx}
              setHoveredCardIdx={setHoveredCardIdx}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
