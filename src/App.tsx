import "./App.css";
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
      </div>
    </div>
  );
}

export default App;
