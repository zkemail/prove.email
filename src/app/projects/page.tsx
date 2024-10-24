"use client";

const EthereumFoundationLogo = "/assets/EthereumFoundationLogo.svg";
const GitcoinPassportLogo = "/assets/GitcoinPassportLogo.svg";
const ClaveLogo = "/assets/ClaveLogo.svg";
const IYKLogo = "/assets/IYKLogo.svg";
const ZKP2PLogo = "/assets/ZKP2PLogo.svg";
const ZKP2PProjectLogo = "/assets/zkp2p.webp";
const OpenPassportLogo = "/assets/OpenPassportLogo.svg";
const ProofOfTwitterLogo = "/assets/proofOfTwitter.png";
const AccountRecoveryLogo = "/assets/accountRecovery.png";
import { Dispatch, SetStateAction, useRef, useState } from "react";
import ProjectCard from "../components/ProjectCard";

export const PROJECTS = [
  {
    title: "ZKP2P",
    description:
      "Peer to peer marketplace for decentralized onramp/offramp to Ethereum via Venmo, UPI, Garanti, and more.",
    imgSrc: ZKP2PProjectLogo,
  },
  {
    title: "Account Recovery",
    description:
      "Email a relayer in order to transfer money or transact on Ethereum, anonymously.",
    imgSrc: AccountRecoveryLogo,
  },
  {
    title: "Proof of Twitter",
    description:
      "Prove you own a Twitter username on-chain, via any email from Twitter.",
    imgSrc: ProofOfTwitterLogo,
  },
  {
    title: "Blueprint Registry",
    description:
      "List of community submitted ZK Email blueprints that can be dropped into your project.",
    imgSrc: ProofOfTwitterLogo,
  },
  {
    title: "Email Wallet",
    description: "Send or receive assets just through your emails.",
    imgSrc: ProofOfTwitterLogo,
  },
  {
    title: "ZK Whistleblow",
    description:
      "Let the world know about any information received on your email without reveling your identity.",
    imgSrc: ProofOfTwitterLogo,
  },
];

const Projects = () => {
  const [hoveredCardIdx, setHoveredCardIdx] = useState<number | null>(null);

  return (
    <section>
      <div
        className="container-width container-padding"
        style={{ textAlign: "center", paddingTop: "10rem", paddingBottom: "5rem" }}
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
