"use client";
import { useState, useRef, useEffect } from "react";
import { useWindowWidth } from "../utils";
import BlueDiamond from "../assets/BlueDiamond.svg";
import RedDiamond from "../assets/RedDiamond.svg";
import GreenDiamond from "../assets/GreenDiamond.svg";

const RESOURCE_CONFIG = {
  Talk: {
    color: "#0C3D7766",
    colorLight: "#CCE0EA",
    img: BlueDiamond,
  },
  Documentation: {
    color: "#C72C2266",
    colorLight: "#FDC8C5",
    img: RedDiamond,
  },
  Blog: {
    color: "#27826640",
    colorLight: "#95CEBC",
    img: GreenDiamond,
  },
};

const resources = [
  {
    title: "Account Recovery Docs",
    where: "ZK Email Gitbook",
    url: "https://www.youtube.com/embed/rZTNzvLXB14?si=2NOAwXQYalqGYTGE",
    date: "2024/04/19",
    thumbnail: "https://img.youtube.com/vi/rZTNzvLXB14/0.jpg",
    contentType: "Documentation",
  },
  {
    title: "ZK Email Account Recovery: Setup and Recovery Guide",
    where: "15 min read",
    url: "https://www.youtube.com/embed/rZTNzvLXB14?si=2NOAwXQYalqGYTGE",
    date: "2024/04/19",
    thumbnail: "https://img.youtube.com/vi/rZTNzvLXB14/0.jpg",
    contentType: "Blog",
  },
  {
    title: "ZK Email: Novel ZK Applications Unlocked by Portable Provenance",
    where: "ZK Summit 11",
    url: "https://www.youtube.com/embed/rZTNzvLXB14?si=2NOAwXQYalqGYTGE",
    date: "2024/04/19",
    thumbnail: "https://img.youtube.com/vi/rZTNzvLXB14/0.jpg",
    contentType: "Talk",
  },
  {
    title: "Another Resource Title",
    where: "Event Name",
    url: "https://example.com",
    date: "2024/05/20",
    thumbnail: "https://example.com/image.jpg",
    contentType: "Talk",
  },
  {
    title: "ZK Email: Novel ZK Applications Unlocked by Portable Provenance",
    where: "ZK Summit 11",
    url: "https://www.youtube.com/embed/rZTNzvLXB14?si=2NOAwXQYalqGYTGE",
    date: "2024/04/19",
    thumbnail: "https://img.youtube.com/vi/rZTNzvLXB14/0.jpg",
    contentType: "Talk",
  },
  {
    title: "ZK Email: Email Wallet and Identity Attestations",
    where: "Proof Singularity Denver",
    url: "https://www.youtube.com/embed/GEWuGtsjATw?si=ApokIEW2h8KYYAYO",
    date: "2024/03/15",
    thumbnail: "https://img.youtube.com/vi/GEWuGtsjATw/0.jpg",
    contentType: "Talk",
  },
  {
    title: "ZK Email: Email Wallets and Provenant Identity",
    where: "PROGCRYPTO",
    url: "https://www.youtube.com/embed/qUYBja0glio?si=MuVP2sgVo9y7egLd",
    date: "2024/01/26",
    thumbnail: "https://img.youtube.com/vi/qUYBja0glio/0.jpg",
    contentType: "Talk",
  },
  {
    title: "Ethcon Korea ZK Email Mention",
    where: "Ethcon Korea",
    url: "https://www.youtube.com/embed/gsrtxq0xYxs?si=twKpt5bfFzmZVi21&amp;start=939",
    date: "2023/11/15",
    thumbnail: "https://img.youtube.com/vi/gsrtxq0xYxs/0.jpg",
    contentType: "Talk",
  },
  {
    title: "Universal Recovery: A Social Recovery Solution Utilizes ZK Email",
    where: "Clave",
    url: "https://www.youtube.com/embed/iMAaHEYyuxA?si=aUdeSJ60Dv57TjQI",
    date: "2023/01/26",
    thumbnail: "https://img.youtube.com/vi/iMAaHEYyuxA/0.jpg",
    contentType: "Talk",
  },
  {
    title: "ZK for web2 interop with zkLogin & ZK Email",
    where: "ZK Podcast",
    url: "https://www.youtube.com/embed/vFYUWRks7Kg?si=CDU7Ks4Bq5WgngAN",
    date: "2023/12/06",
    thumbnail: "https://img.youtube.com/vi/vFYUWRks7Kg/0.jpg",
    contentType: "Talk",
  },
  {
    title: "Zuconnect 2023 ZK Day: ZK Email",
    where: "Zuconnect",
    url: "https://www.youtube.com/embed/3jCKdxQ9Pfw?si=Q4jVStBCmntXnOfO",
    date: "2023/12/03",
    thumbnail: "https://img.youtube.com/vi/3jCKdxQ9Pfw/0.jpg",
    contentType: "Talk",
  },
  {
    title: "ZK Email: Decentralized ID Verification on Chain Without Servers",
    where: "Devcon",
    url: "https://www.youtube.com/embed/sPCHiUT3TmA?si=TiNLxkoj9n-0NbDl",
    date: "2022/11/16",
    thumbnail: "https://img.youtube.com/vi/sPCHiUT3TmA/0.jpg",
    contentType: "Talk",
  },
];

const Resources = () => {
  const windowWidth = useWindowWidth();

  const isLargeScreen = windowWidth >= 1280;
  const isMediumScreen = windowWidth >= 1024 && windowWidth < 1280;
  const isSmallScreen = windowWidth < 640;

  const carouselRef = useRef(null);

  const getVisibleCards = () => {
    if (isLargeScreen) return 4;
    if (isMediumScreen) return 3;
    if (isSmallScreen) return 1.25;
    return 2.25;
  };

  const visibleCards = getVisibleCards();
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    console.log("handle Next");
    if (currentIndex < resources.length - visibleCards) {
      setCurrentIndex(Math.floor(currentIndex + visibleCards));
    }
  };

  const handlePrevious = () => {
    console.log("handle prev");
    if (currentIndex > 0) {
      setCurrentIndex(Math.ceil(currentIndex - visibleCards));
    }
  };

  const handleScroll = (event: {
    currentTarget: { scrollLeft: any; clientWidth: number };
  }) => {
    if (isSmallScreen) {
      const scrollLeft = event.currentTarget.scrollLeft;
      const cardWidth = event.currentTarget.clientWidth / visibleCards;
      const newIndex = Math.round(scrollLeft / cardWidth);
      setCurrentIndex(newIndex);
    }
  };

  console.log(
    currentIndex >= resources.length - visibleCards,
    currentIndex === 0,
    currentIndex,
    resources,
    visibleCards
  );

  return (
    <div>
      <h1 className="h3">Resources</h1>
      <p className="subtitle1 text-center mb-[50px] px-5">
        Know about us from our recent blogs, talks and documentations
      </p>

      <div
        className={`relative w-full ${"h-full"} px-2 md:px-8`}
        style={{ overflow: "hidden" }}
      >
        <div
          ref={carouselRef}
          className={`flex ${
            !isSmallScreen
              ? "transition-transform duration-500 ease-in-out"
              : ""
          }`}
          style={{
            transform: !isSmallScreen
              ? `translateX(-${currentIndex * (100 / visibleCards)}%)`
              : "none",
            overflowX: isSmallScreen ? "scroll" : "visible",
            scrollSnapType: isSmallScreen ? "x mandatory" : "none",
            WebkitOverflowScrolling: "touch",
          }}
          onScroll={handleScroll}
        >
          {resources.map((resource, _idx) => (
            <div
              key={resource.url}
              className="carousel-item"
              style={{
                zIndex: 10000,
                flex: `0 0 ${100 / visibleCards}%`,
                padding: "8px",
                boxSizing: "border-box",
                scrollSnapAlign: isSmallScreen ? "start" : "none",
              }}
            >
              <div
                className="shadow-md overflow-hidden cursor-pointer relative h-72 transform transition-transform duration-300 ease-in-out"
                onClick={() => window.open(resource.url, "_blank")}
              >
                <div
                  className="p-4 grid grid-cols-2 bg-black relative border-solid border-[1px] border-[#272727]"
                  style={{
                    position: "absolute",
                    bottom: 0,
                    width: "100%",
                    height: "100%",
                    zIndex: 2,
                    background: `linear-gradient(to bottom right, #141515 30%, ${
                      RESOURCE_CONFIG[resource.contentType].color
                    })`,
                    transform: "translateY(0)",
                    transition:
                      "transform 0.3s ease-in-out, padding 0.3s ease-in-out",
                  }}
                >
                  <div className="col-span-2">
                    <div className="flex items-center pt-4 py-3">
                      <img
                        src={RESOURCE_CONFIG[resource.contentType].img}
                        alt=""
                      />
                      <p
                        className="pl-1 sm:pl-3 text-xs"
                        style={{
                          color:
                            RESOURCE_CONFIG[resource.contentType].colorLight,
                        }}
                      >
                        {resource.contentType}
                      </p>
                    </div>
                    <h3 className="text-white col-span-2 text-xl">
                      {resource.title}
                    </h3>
                  </div>
                  <div className="col-span-2 flex items-end">
                    <div className="flex justify-between items-center w-full">
                      <div className="w-2/3">
                        <p className="text-[#F5F3EF] text-xs">
                          {resource.where}
                        </p>
                      </div>
                      <div className="w-1/3">
                        <p
                          className="text-right text-xs"
                          style={{
                            color:
                              RESOURCE_CONFIG[resource.contentType].colorLight,
                          }}
                        >
                          {resource.date}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {!isSmallScreen && (
        <div className="flex justify-center space-x-4 mt-12">
          <button
            onClick={handlePrevious}
            disabled={currentIndex === 0}
            className="flex flex-row justify-between items-center gap-1 border-solid border-[2px] border-[#3B3B3B] rounded-[12px] px-[16px] py-[5px] bg-[#1C1C1C] font-semibold"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
            >
              <path
                d="M4.06614 6.69064L8.44114 2.31564C8.48179 2.27499 8.53005 2.24275 8.58316 2.22075C8.63626 2.19875 8.69319 2.18742 8.75067 2.18742C8.80816 2.18742 8.86508 2.19875 8.91819 2.22075C8.9713 2.24275 9.01956 2.27499 9.0602 2.31564C9.10085 2.35629 9.1331 2.40454 9.15509 2.45765C9.17709 2.51076 9.18842 2.56768 9.18842 2.62517C9.18842 2.68265 9.17709 2.73958 9.15509 2.79269C9.1331 2.84579 9.10085 2.89405 9.0602 2.9347L4.99419 7.00017L9.0602 11.0656C9.1423 11.1477 9.18842 11.2591 9.18842 11.3752C9.18842 11.4913 9.1423 11.6026 9.0602 11.6847C8.97811 11.7668 8.86677 11.8129 8.75067 11.8129C8.63458 11.8129 8.52323 11.7668 8.44114 11.6847L4.06614 7.3097C4.02546 7.26907 3.99319 7.22082 3.97118 7.16771C3.94916 7.11459 3.93783 7.05766 3.93783 7.00017C3.93783 6.94267 3.94916 6.88574 3.97118 6.83263C3.99319 6.77952 4.02546 6.73127 4.06614 6.69064Z"
                fill="#3B3B3B"
              />
            </svg>
            Previous
          </button>
          <button
            onClick={handleNext}
            // disabled={currentIndex >= resources.length - visibleCards}
            disabled={false}
            className="flex flex-row justify-between items-center gap-1 border-solid border-[2px] border-[#3B3B3B] rounded-[12px] px-[16px] py-[5px] bg-[#1C1C1C] font-semibold"
          >
            Next
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
            >
              <path
                d="M9.93389 7.30936L5.55889 11.6844C5.51824 11.725 5.46998 11.7573 5.41688 11.7793C5.36377 11.8013 5.30684 11.8126 5.24936 11.8126C5.19187 11.8126 5.13495 11.8013 5.08184 11.7793C5.02873 11.7573 4.98048 11.725 4.93983 11.6844C4.89918 11.6437 4.86693 11.5955 4.84494 11.5423C4.82294 11.4892 4.81161 11.4323 4.81161 11.3748C4.81161 11.3173 4.82294 11.2604 4.84494 11.2073C4.86693 11.1542 4.89918 11.1059 4.93983 11.0653L9.00584 6.99983L4.93983 2.93436C4.85773 2.85227 4.81161 2.74093 4.81161 2.62483C4.81161 2.50873 4.85773 2.39739 4.93983 2.3153C5.02192 2.23321 5.13326 2.18709 5.24936 2.18709C5.36545 2.18709 5.4768 2.23321 5.55889 2.3153L9.93389 6.6903C9.97457 6.73093 10.0068 6.77918 10.0289 6.83229C10.0509 6.88541 10.0622 6.94234 10.0622 6.99983C10.0622 7.05733 10.0509 7.11426 10.0289 7.16737C10.0068 7.22048 9.97457 7.26873 9.93389 7.30936Z"
                fill="#F5F3EF"
              />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};

export default Resources;
