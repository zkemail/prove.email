import EthereumFoundationLogo from "../assets/EthereumFoundationLogo.svg";
import GitcoinPassportLogo from "../assets/GitcoinPassportLogo.svg";
import ClaveLogo from "../assets/ClaveLogo.svg";
import IYKLogo from "../assets/IYKLogo.svg";
import ZKP2PLogo from "../assets/ZKP2PLogo.svg";
import ZKP2PProjectLogo from "../assets/zkp2p.png";
import OpenPassportLogo from "../assets/OpenPassportLogo.svg";
import NoiseTexture from "../assets/NoiseTexture.png";
import ProofOfTwitterLogo from "../assets/proofOfTwitter.png";
import AccountRecoveryLogo from "../assets/accountRecovery.png";

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
}: {
  title: string;
  description: string;
  imgSrc: any;
}) => {
  return (
    <div
      style={{
        width: "17.5rem",
        position: "relative",
        border: "1px solid #272727",
      }}
    >
      <div
        className="projectPins"
        style={{
          position: "absolute",
          left: "0",
          top: "0",
          translate: "-50% -50%",
        }}
      />
      <div
        className="projectPins"
        style={{
          position: "absolute",
          right: "0",
          top: "0",
          translate: "50% -50%",
        }}
      />
      <div
        className="projectPins"
        style={{
          position: "absolute",
          right: "0",
          bottom: "0",
          translate: "50% 50%",
        }}
      />
      <div
        className="projectPins"
        style={{
          position: "absolute",
          left: "0",
          bottom: "0",
          translate: "-50% 50%",
        }}
      />
      <div
        style={{
          height: "13.8rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img src={imgSrc} />
      </div>
      <div
        style={{
          height: "8.5rem",
          borderTop: "2px solid",
          borderImage: "linear-gradient(to right, #161819, #3B3B3B, #161819) 1",
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
  );
};

const PartnersAndProjects = () => {
  return (
    <section>
      <div style={{ width: "70vw", textAlign: "center", paddingTop: "10rem" }}>
        <p className="h3">Trusted by the best</p>
        <p className="subtitle1">
          From next-gen enterprises to established organizations
        </p>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            margin: "2.25rem",
          }}
        >
          <img src={EthereumFoundationLogo} alt="EthereumFoundationLogo" />
          <img src={IYKLogo} alt="IYKLogo" />
          <img src={GitcoinPassportLogo} alt="GitcoinPassportLogo" />
          <img src={ZKP2PLogo} alt="ZKP2PLogo" />
          <img src={ClaveLogo} alt="ClaveLogo" />
          <img src={OpenPassportLogo} alt="OpenPassportLogo" />
        </div>
      </div>
      <div style={{ width: "70vw", textAlign: "center", paddingTop: "6rem" }}>
        <p className="h3">Projects Using ZK Email</p>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: "2.25rem",
          }}
        >
          {PROJECTS.map((project) => (
            <ProjectCard {...project} />
          ))}
        </div>
        <p
          className="subtitle1"
          style={{
            color: "var(--Grey-600, #A8A8A8)",
            textAlign: "right",
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
