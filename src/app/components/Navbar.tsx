"use client";

import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);

  const handleMouseEnter = (section: string) => {
    setHoveredSection(section);
  };

  const handleMouseLeave = () => {
    setHoveredSection(null);
  };
  console.log(hoveredSection);
  return (
    <>
      <nav className="navbar container-width navbar-desktop relative flex flex-col">
        <div className=" w-full flex flex-row justify-between">
          <Link href="/">
            <img src={"/assets/Logo.svg"} alt="zkemail-logo" />
          </Link>
          <div style={{ display: "flex", gap: 24 }}>
            <div
              onMouseEnter={() => handleMouseEnter("blog")}
              onMouseLeave={handleMouseLeave}
            >
              <p className="body1" style={{ color: "#F5F3EF" }}>
                Blog
              </p>
            </div>

            <div
              onMouseEnter={() => handleMouseEnter("documentation")}
              onMouseLeave={handleMouseLeave}
            >
              <p className="body1" style={{ color: "#F5F3EF" }}>
                Documentation
              </p>
            </div>
          </div>
        </div>
        {hoveredSection && (
          <div
            className="w-full"
            onMouseEnter={() => handleMouseEnter("expandedSection")}
            onMouseLeave={handleMouseLeave}
          >
            tete
          </div>
        )}
      </nav>

      <nav className="navbar container-width navbar-mobile">
        <Link href="/">
          <img src={"/assets/Logo.svg"} alt="zkemail-logo" />
        </Link>
        <img src={"/assets/Breadcrumb.svg"} alt="BreadCrumb" />
      </nav>
    </>
  );
};

export default Navbar;
