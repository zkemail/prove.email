import React from "react";

const Marquee = () => {
  const items = [
    "Restore your wallet",
    "Prove your identity",
    "Whistleblowing",
    "Prove your organization",
    "Send or receive assets",
  ];

  return (
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
  );
};

export default Marquee;
