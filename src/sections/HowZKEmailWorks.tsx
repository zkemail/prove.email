import ZKEmailWorkingFlow from "../assets/ZKEmailWorkingFlow.png";
import ZKCircuitsIcon from "../assets/ZKCircuitsIcon.png";
import RegexIcon from "../assets/RegexIcon.png";
import DKIMIcon from "../assets/DKIMIcon.png";

const FLOW_DETAILS = [
  {
    title: "DKIM Scheme Status Quo",
    description:
      "Email a relayer in order to transfer money or transact on Ethereum, anonymously.",
    link: "",
    imgSrc: DKIMIcon,
  },
  {
    title: "Regex (Hashing & Regex)",
    description:
      "Email a relayer in order to transfer money or transact on Ethereum, anonymously.",
    link: "",
    imgSrc: RegexIcon,
  },
  {
    title: "Zero Knowledge Circuits",
    description:
      "Email a relayer in order to transfer money or transact on Ethereum, anonymously.",
    link: "",
    imgSrc: ZKCircuitsIcon,
  },
];

const FlowDetailsCard = ({
  title,
  description,
  link,
  imgSrc,
}: {
  title: string;
  description: string;
  link?: string;
  imgSrc: any;
}) => {
  return (
    <div
      style={{
        width: "100%",
        border: "1px solid #272727",
        display: "flex",
        flexDirection: "row",
      }}
    >
      <div
        style={{
          padding: 16,
          display: "flex",
          alignItems: "flex-start",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "var(--Grey-900, #161819)",
          gap: 8,
        }}
      >
        <p className="h5" style={{ fontWeight: 700 }}>
          {title}
        </p>
        <p className="subtitle2">{description}</p>
        <a
          href={link}
          className="subtitle1"
          style={{ textDecoration: "none", marginTop: 16 }}
        >
          Learn More →
        </a>
      </div>
      <div>
        <img src={imgSrc} style={{ height: "7rem" }} />
      </div>
    </div>
  );
};

const HowZKEmailWorks = () => {
  return (
    <section>
      <div style={{ width: "70vw", textAlign: "center", paddingTop: "10rem" }}>
        <p className="h3">How ZK Email works?</p>
        <div style={{ display: "flex", marginTop: "2.25rem" }}>
          <div style={{ flexGrow: 4 }}>
            <img
              src={ZKEmailWorkingFlow}
              alt="ZKEmailWorkingFlow"
              style={{ width: "25rem" }}
            />
          </div>
          <div
            style={{
              flexGrow: 6,
              display: "flex",
              flexDirection: "column",
              gap: 24,
            }}
          >
            {FLOW_DETAILS.map((flowStep) => (
              <FlowDetailsCard {...flowStep} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowZKEmailWorks;
