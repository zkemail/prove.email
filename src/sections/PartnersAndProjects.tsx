import EthereumFoundationLogo from "../assets/EthereumFoundationLogo.svg";
import GitcoinPassportLogo from "../assets/GitcoinPassportLogo.svg";
import ClaveLogo from "../assets/ClaveLogo.svg";
import IYKLogo from "../assets/IYKLogo.svg";
import ZKP2PLogo from "../assets/ZKP2PLogo.svg";
import ZKP2PProjectLogo from "../assets/zkp2p.png";
import OpenPassportLogo from "../assets/OpenPassportLogo.svg";
import ProofOfTwitterLogo from "../assets/proofOfTwitter.png";
import AccountRecoveryLogo from "../assets/accountRecovery.png";
import { useRef, useState } from "react";

const PROJECTS = [
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
];

const ProjectCard = ({
  title,
  description,
  imgSrc,
  hoveredCardIdx,
  index,
  setHoveredCardIdx,
}: {
  title: string;
  description: string;
  hoveredCardIdx: number;
  imgSrc: any;
  index: number;
  setHoveredCardIdx: (index?: number | null) => void;
}) => {
  const divRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);
  const [scale, setScale] = useState(1);

  const handleMouseMove = (e) => {
    if (!divRef.current || isFocused) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(1);
    setScale(1.07);
    setHoveredCardIdx(index);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
    setScale(1);
    setHoveredCardIdx(null);
  };

  const handleMouseEnter = () => {
    setOpacity(1);
    setScale(1.07);
    setHoveredCardIdx(index);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
    setScale(1);
    setHoveredCardIdx(null);
  };

  return (
    <div
      className="transition-all ease-in-out project-card"
      style={{
        transform: `scale(${scale})`,
      }}
    >
      <div
        className="projectPins"
        style={{
          position: "absolute",
          zIndex: 10,
          left: "0",
          top: "0",
          translate: "-50% -50%",
        }}
      />
      <div
        className="projectPins"
        style={{
          position: "absolute",
          zIndex: 10,
          right: "0",
          top: "0",
          translate: "50% -50%",
        }}
      />
      <div
        className="projectPins"
        style={{
          position: "absolute",
          zIndex: 10,
          right: "0",
          bottom: "0",
          translate: "50% 50%",
        }}
      />
      <div
        className="projectPins"
        style={{
          position: "absolute",
          zIndex: 10,
          left: "0",
          bottom: "0",
          translate: "-50% 50%",
        }}
      />
      <div
        ref={divRef}
        onMouseMove={handleMouseMove}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="card-spotlight-effect"
      >
        <div
          className="transition-all ease-in-out"
          style={{
            background: "#161819",
            visibility:
              hoveredCardIdx !== index && hoveredCardIdx !== null
                ? "visible"
                : "hidden",
            height: "100%",
            // transitionDuration: "0.3s",
            width: "100%",
            position: "absolute",
            opacity: 0.5,
          }}
        />
        <div
          className="spotlight"
          style={{
            opacity,
            background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,255,255,.06), transparent 40%)`,
          }}
        />
        <div
          style={{
            height: "13.8rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden",
          }}
        >
          <img src={imgSrc} />
        </div>
        <div
          className=" lg:h-40 h-max"
          style={{
            borderTop: "2px solid",
            borderImage:
              "linear-gradient(to right, #161819, #3B3B3B, #161819) 1",
            background: "var(--Grey-900, #161819)",
            display: "flex",
            padding: "16px",
            flexDirection: "column",
            textAlign: "left",
            gap: "8px",
          }}
        >
          <div className="h5" style={{ fontWeight: 700 }}>
            {title}
          </div>
          <div
            className="subtitle2"
            style={{ color: "var(--Grey-500, #D4D4D4)" }}
          >
            {description}
          </div>
        </div>
      </div>
    </div>
  );
};

const PartnersAndProjects = () => {
  const [hoveredCardIdx, setHoveredCardIdx] = useState<number | null>(null);

  return (
    <section>
      <div className="container-width container-padding" style={{ textAlign: "center" }}>
        <p className="h3">Trusted by the best</p>
        <p className="subtitle1">
          From next-gen enterprises to established organizations
        </p>
        <div className="partner-logos">
          <img src={EthereumFoundationLogo} alt="EthereumFoundationLogo" />
          <img src={IYKLogo} alt="IYKLogo" />
          <img src={GitcoinPassportLogo} alt="GitcoinPassportLogo" />
          <img src={ZKP2PLogo} alt="ZKP2PLogo" />
          <img src={ClaveLogo} alt="ClaveLogo" />
          <img src={OpenPassportLogo} alt="OpenPassportLogo" />
        </div>
      </div>
      <div
        className="container-width container-padding"
        style={{ textAlign: "center", paddingTop: "6rem" }}
      >
        <p className="h3">Projects Using ZK Email</p>
        <div className="project-cards-container">
          {PROJECTS.map((project, index) => (
            <ProjectCard
              {...project}
              index={index}
              hoveredCardIdx={hoveredCardIdx}
              setHoveredCardIdx={setHoveredCardIdx}
              cardOpacity={
                hoveredCardIdx === index || hoveredCardIdx === null ? 1 : 0.5
              }
            />
          ))}
        </div>
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
      </div>
    </section>
  );
};

export default PartnersAndProjects;
