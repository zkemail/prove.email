import "./App.css";
import FAQs from "./sections/FAQs";
import Hero from "./sections/Hero";
import HowZKEmailWorks from "./sections/HowZKEmailWorks";
import PartnersAndProjects from "./sections/PartnersAndProjects";

function App() {
  return (
    <div className="grid-container">
      <div className="noise-layer" />
      <div
        className="noise-container"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "6.25rem",
          overflow: "scroll",
        }}
      >
        <Hero />
        <PartnersAndProjects />
        <HowZKEmailWorks />
        {/* <Hero />
        <PartnersAndProjects />
        <HowZKEmailWorks />
        <Resources />
        <FAQs /> */}
        <FAQs />
      </div>
    </div>
  );
}

export default App;
