"use client";

import { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import { PROJECTS } from "../contants";
import { useAnimateIn } from "../hooks/useAnimateIn";

const Projects = () => {
  const [hoveredCardIdx, setHoveredCardIdx] = useState<number | null>(null);
  const [sectionStyles, sectionRef] = useAnimateIn(undefined, { delay: 0 });

  const cardAnimations = PROJECTS.map((_, index) =>
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useAnimateIn(undefined, { delay: 100 + index * 100 })
  );

  return (
    <section ref={sectionRef} style={sectionStyles}>
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
              style={cardAnimations[index][0]}
              ref={cardAnimations[index][1]}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
