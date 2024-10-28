"use client";

const ZKEmailWorkingFlow = "/assets/ZKEmailWorkingFlow.webp";
const ZKCircuitsIcon = "/assets/ZKCircuitsIcon.webp";
const RegexIcon = "/assets/RegexIcon.png";
const DKIMIcon = "/assets/DKIMIcon.png";
import { useRef, useState } from "react";
import { useAnimateIn } from "../hooks/useAnimateIn";

const FLOW_DETAILS = [
  {
    title: "DKIM Scheme Status Quo",
    description:
      "Email a relayer in order to transfer money or transact on Ethereum, anonymously.",
    link: "",
    imgSrc: DKIMIcon,
  },
  {
    title: "Regex and Hashing",
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
  const divRef = useRef<HTMLDivElement | null>(null);

  const [opacity, setOpacity] = useState(0);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current || isFocused) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(1);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="card-spotlight-effect lg:max-h-44"
      style={{
        width: "100%",
        border: "1px solid #272727",
        display: "flex",
        flexDirection: "row",
      }}
    >
      <div
        className="spotlight"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,255,255,.06), transparent 40%)`,
        }}
      />
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
          <p className="subtitle1 hidden lg:block">{description}</p>
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
        <img
          src={imgSrc}
          style={{
            height: "100%",
            width: "100%",
            objectFit: "cover",
            objectPosition: "center",
          }}
          alt={`${title}-image`}
        />
      </div>
    </div>
  );
};

const HowZKEmailWorks = () => {
  const [styles, ref] = useAnimateIn();

  return (
    <section ref={ref} style={styles}>
      <div
        className="container-width container-padding"
        style={{ textAlign: "center" }}
      >
        <p className="h3">How ZK Email works</p>
        <div
          className="flex lg:flex-nowrap flex-wrap"
          style={{
            display: "flex",
            marginTop: "2.25rem",
            height: "fit-content",
            gap: 24,
            justifyContent: "center",
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
              <FlowDetailsCard {...flowStep} key={flowStep.title} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowZKEmailWorks;
