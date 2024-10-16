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
  imgSrc: string;
}) => {
  return (
    <div
      style={{
        width: "100%",
        border: "1px solid #272727",
        display: "flex",
        maxHeight: "11rem",
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
          width: "calc(100% + 9rem)",
          textAlign: "left",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <p className="h5" style={{ fontWeight: 700 }}>
            {title}
          </p>
          <p className="subtitle1">{description}</p>
        </div>
        <a
          href={link}
          className="subtitle1"
          style={{ textDecoration: "none", marginTop: 16 }}
        >
          Learn More →
        </a>
      </div>
      <div>
        <img src={imgSrc} style={{ height: "100%" }} />
      </div>
    </div>
  );
};

const HowZKEmailWorks = () => {
  return (
    <section>
      <div className="container-width" style={{ textAlign: "center" }}>
        <p className="h3">How ZK Email works?</p>
        <div
          style={{
            display: "flex",
            marginTop: "2.25rem",
            height: "fit-content",
            gap: 24,
          }}
        >
          <div style={{}}>
            <img
              style={{
                height: "100%",
                maxHeight: "calc(33rem + 48px)",
                objectFit: "cover",
              }}
              src={ZKEmailWorkingFlow}
              alt="ZKEmailWorkingFlow"
            />
          </div>
          <div
            style={{
              flexGrow: 6,
              display: "flex",
              flexDirection: "column",
              gap: 24,
              height: "100%",
              justifyContent: "space-between",
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
