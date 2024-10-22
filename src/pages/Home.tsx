import "../App.css";
import FAQs from "../sections/FAQs";
import Hero from "../sections/Hero";
import HowZKEmailWorks from "../sections/HowZKEmailWorks";
import PartnersAndProjects from "../sections/PartnersAndProjects";
import Resources from "../sections/Resources";

const Home = () => {
  return (
    <div className="grid-container">
      <div className="noise-layer" />
      <div
        className="noise-container"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "8.25rem",
          overflow: "scroll",
        }}
      >
        <Hero />
        <PartnersAndProjects />
        <HowZKEmailWorks />
        <Resources />
        <FAQs />
      </div>
    </div>
  );
};

export default Home;
