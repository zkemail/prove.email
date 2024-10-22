import { useState } from "react";
import Chip from "../components/Chip";

const Changelogs = () => {
  const [selectedChip, setSelectedChip] = useState("ALL");

  return (
    <section style={{ height: "100vh" }}>
      <div
        className="w-full lg:w-[70vw] pt-40 lg:pt-32"
        style={{
          textAlign: "center",
        }}
      >
        <p className="h3">Changelogs</p>
        <p className="sutitle1">Latest updates from team ZK Email</p>
      </div>
      <div>
        {}
        <Chip
          variant={selectedChip == "ALL" ? "filled" : "outlined"}
          label="All"
        />
      </div>
      <div className="posts-container">
        <div className="post"></div>
      </div>
    </section>
  );
};

export default Changelogs;
