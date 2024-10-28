"use client";

const EthereumFoundationLogo = "/assets/EthereumFoundationLogo.svg";
const GitcoinPassportLogo = "/assets/GitcoinPassportLogo.svg";
const ClaveLogo = "/assets/ClaveLogo.svg";
const IYKLogo = "/assets/IYKLogo.svg";
const ZKP2PLogo = "/assets/ZKP2PLogo.svg";
const OpenPassportLogo = "/assets/OpenPassportLogo.svg";
import { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import Link from "next/link";
import Image from "next/image";
import { PROJECTS } from "../contants";

const PartnersAndProjects = () => {
  const [hoveredCardIdx, setHoveredCardIdx] = useState<number | null>(null);

  return (
    <section>
      <div
        className="container-width container-padding"
        style={{ textAlign: "center" }}
      >
        <p className="h3">Trusted by the best</p>
        <p className="subtitle1">
          From next-gen enterprises to established organizations
        </p>
        <div className="partner-logos">
          <Image
            height={36}
            width={150}
            src={EthereumFoundationLogo}
            alt="EthereumFoundationLogo"
          />
          <Image
            height={36}
            width={150}
            src={IYKLogo}
            alt="IYKLogo"
          />
          <Image
            height={36}
            width={150}
            src={GitcoinPassportLogo}
            alt="GitcoinPassportLogo"
          />
          <Image
            height={36}
            width={150}
            src={ZKP2PLogo}
            alt="ZKP2PLogo"
          />
          <Image
            height={36}
            width={150}
            src={ClaveLogo}
            alt="ClaveLogo"
          />
          <Image
            height={36}
            width={150}
            src={OpenPassportLogo}
            alt="OpenPassportLogo"
          />
        </div>
      </div>
      <div
        className="container-width container-padding"
        style={{ textAlign: "center", paddingTop: "6rem" }}
      >
        <p className="h3">ZK Email in Action</p>
        <div className="project-cards-container">
          {PROJECTS.slice(0, 3).map((project, index) => (
            <ProjectCard
              {...project}
              key={project.title}
              index={index}
              hoveredCardIdx={hoveredCardIdx}
              setHoveredCardIdx={setHoveredCardIdx}
            />
          ))}
        </div>

        <Link href={"/projects"}>
          <p
            className="subtitle1 lg:text-right text-center"
            style={{
              color: "var(--Grey-600, #A8A8A8)",
              marginTop: 24,
            }}
          >
            Explore all projects
            <span style={{ marginLeft: 8 }}>→</span>
          </p>
        </Link>
      </div>
    </section>
  );
};

export default PartnersAndProjects;
