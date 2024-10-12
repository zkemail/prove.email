import "./App.css";
import Hero from "./sections/Hero";
import PartnersAndProjects from "./sections/PartnersAndProjects";

function App() {
  return (
    <div className="grid-container">
      <div
        className="noise-container"
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Hero />
        {/* <PartnersAndProjects /> */}
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
