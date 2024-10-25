"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const SubItem = ({
  icon,
  title,
  description,
  href,
  onClick,
}: {
  icon: string;
  title: string;
  description: string;
  href: string;
  onClick: () => void;
}) => (
  <Link
    href={href}
    className="nav-sub-items max-w-full w-full flex-col justify-center flex-grow flex items-center rounded-lg pb-4"
    onClick={onClick}
  >
    <Image src={icon} alt={title} width={171} height={136} />
    <p className="font-semibold body1">{title}</p>
    <p className="subtitle2" style={{ color: "#A8A8A8" }}>
      {description}
    </p>
  </Link>
);

type SubItemData = {
  icon: string;
  title: string;
  description: string;
  href: string;
};

const NAV_ITEMS_DATA: {
  developers: SubItemData[];
  community: SubItemData[];
} = {
  developers: [
    {
      icon: "/assets/NavDocumentation.png",
      title: "Documentation",
      description: "Get started with our tech",
      href: "/docs",
    },
    {
      icon: "/assets/NavProjects.png",
      title: "Projects",
      description: "Ideas built on our stack",
      href: "/projects",
    },
    {
      icon: "/assets/NavChangelogs.png",
      title: "Changelogs",
      description: "We ship things quite fast",
      href: "/changelogs",
    },
  ],
  community: [
    {
      icon: "/assets/NavBlogs.png",
      title: "Blogs",
      description: "Our team battlefield notes",
      href: "/blogs",
    },
    {
      icon: "/assets/NavPartners.png",
      title: "Partner",
      description: "Let's build the future",
      href: "/partners",
    },
    {
      icon: "/assets/NavLearnMore.png",
      title: "Learn More",
      description: "About our underlying tech",
      href: "/learn-more",
    },
  ],
};

const Navbar = () => {
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);
  const [contentHeight, setContentHeight] = useState<number>(0);
  const [visibleItems, setVisibleItems] = useState<number>(0);
  const contentRef = useRef<HTMLDivElement>(null);

  console.log(contentHeight);

  useEffect(() => {
    if (hoveredSection) {
      if (contentRef.current) {
        setContentHeight(contentRef.current.scrollHeight - 20);
      }
      const itemCount =
        NAV_ITEMS_DATA[hoveredSection as keyof typeof NAV_ITEMS_DATA].length;
      const interval = setInterval(() => {
        setVisibleItems((prev) => {
          if (prev < itemCount) return prev + 1;
          clearInterval(interval);
          return prev;
        });
      }, 100);
      return () => clearInterval(interval);
    } else {
      setContentHeight(0);
      setVisibleItems(0);
    }
  }, [hoveredSection]);

  const handleMouseEnter = (section: string) => {
    setHoveredSection(section);
  };

  const handleMouseLeave = () => {
    setHoveredSection(null);
  };

  return (
    <>
      <nav
        className="navbar container-width navbar-desktop relative flex flex-col gap-0"
        style={{
          height: `${contentHeight + 60}px`,
          transition: "height 0.3s ease-in-out",
        }}
      >
        <div className="w-full flex flex-row justify-between">
          <Link href="/">
            <Image
              layout="responsive"
              src={"/assets/Logo.svg"}
              alt="zkemail-logo"
              height={20}
              width={94}
            />
          </Link>
          <div style={{ display: "flex", gap: 24 }}>
            <div
              onMouseEnter={() => handleMouseEnter("developers")}
              onMouseLeave={handleMouseLeave}
            >
              <p className="body1" style={{ color: "#F5F3EF" }}>
                Developers
              </p>
            </div>

            <div
              onMouseEnter={() => handleMouseEnter("community")}
              onMouseLeave={handleMouseLeave}
            >
              <p className="body1" style={{ color: "#F5F3EF" }}>
                Community
              </p>
            </div>
          </div>
        </div>
        <div
          ref={contentRef}
          className="w-full flex flex-row justify-between gap-3 overflow-hidden pt-4"
          onMouseEnter={() =>
            hoveredSection && handleMouseEnter(hoveredSection)
          }
          onMouseLeave={handleMouseLeave}
        >
          {hoveredSection &&
            NAV_ITEMS_DATA[hoveredSection as keyof typeof NAV_ITEMS_DATA].map(
              (item, index) => (
                <div
                  key={index}
                  className="w-full max-w-full"
                  style={{
                    opacity: index < visibleItems ? 1 : 0,
                    transform: `translateY(${index < visibleItems ? 0 : 20}px)`,
                    transition:
                      "opacity 0.3s ease-in-out, transform 0.3s ease-in-out",
                  }}
                >
                  <SubItem onClick={() => handleMouseLeave()} {...item} />
                </div>
              )
            )}
        </div>
      </nav>

      <nav className="navbar container-width navbar-mobile">
        <Link href="/">
          <Image
            height={20}
            width={94}
            src={"/assets/Logo.svg"}
            alt="zkemail-logo"
          />
        </Link>
        <Image
          src={"/assets/Breadcrumb.svg"}
          alt="BreadCrumb"
          height={24}
          width={24}
        />
      </nav>
    </>
  );
};

export default Navbar;
