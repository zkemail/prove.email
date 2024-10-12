import React from "react";
import HeroImg from "../assets/HeroImg.png";

const Hero = () => {
  const items = [
    "Restore your wallet",
    "Prove your identity",
    "Whistleblowing",
    "Prove your organization",
    "Send or receive assets",
  ];

  return (
    <section>
      <div style={{ width: "70vw", textAlign: "center", paddingTop: "8rem" }}>
        <p
          className="h1"
          style={{
            lineHeight: "4.5rem",
            letterSpacing: "-0.6px",
            fontStyle: "normal",
            alignSelf: "stretch",
          }}
        >
          Bringing on-chain trust to the masses through intuitive email
          integrations
        </p>
        <p className="subtitle1" style={{ marginTop: "1rem" }}>
          Extensive set of open source SDKs, libraries, and
          <br /> protocols that enables email-based identity
        </p>
      </div>

      <div
        style={{
          position: "absolute",
          width: "100vw",
          bottom: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img
          src={HeroImg}
          style={{
            width: "70vw",
          }}
        />
        <div className="marquee">
          <div className="marquee-inner">
            {[...items, ...items].map((item, index) => (
              <React.Fragment key={index}>
                <span className="marquee-item">{item}</span>
                <span className="separator">◆</span>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
