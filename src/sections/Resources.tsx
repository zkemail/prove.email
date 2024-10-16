"use client";
import { useState, useRef, useEffect } from "react";
import ChevronRight from '../assets/ChevronRight.svg'
import ChevronLeft from '../assets/ChevronLeft.svg'
import CustomButton from "./CustomButton";

const RESOURCE_CONFIG = {
  talk: {
    color: "#0C3D7766",
    colorLight: "#CCE0EA",
  },
  documentation: {
    color: "#C72C2266",
    colorLight: "#FDC8C5",
  },
  blog: {
    color: "#27826640",
    colorLight: "#95CEBC",
  },
};

const BACKGROUND_COLORS = [
  {
    color: "#C72C2266",
    colorLight: "#FDC8C5",
  },
  {
    color: "#0C3D7766",
    colorLight: "#CCE0EA",
  },
  {
    color: "#27826640",
    colorLight: "#95CEBC",
  },
];

const resources = [
  {
    title: "Account Recovery Docs",
    where: "ZK Email Gitbook",
    url: "https://www.youtube.com/embed/rZTNzvLXB14?si=2NOAwXQYalqGYTGE",
    date: "2024/04/19",
    thumbnail: "https://img.youtube.com/vi/rZTNzvLXB14/0.jpg",
    contentType: "documentation",
  },
  {
    title: "ZK Email Account Recovery: Setup and Recovery Guide",
    where: "15 min read",
    url: "https://www.youtube.com/embed/rZTNzvLXB14?si=2NOAwXQYalqGYTGE",
    date: "2024/04/19",
    thumbnail: "https://img.youtube.com/vi/rZTNzvLXB14/0.jpg",
    contentType: "blog",
  },
  {
    title: "ZK Email: Novel ZK Applications Unlocked by Portable Provenance",
    where: "ZK Summit 11",
    url: "https://www.youtube.com/embed/rZTNzvLXB14?si=2NOAwXQYalqGYTGE",
    date: "2024/04/19",
    thumbnail: "https://img.youtube.com/vi/rZTNzvLXB14/0.jpg",
    contentType: "talk",
  },
  {
    title: "Another Resource Title",
    where: "Event Name",
    url: "https://example.com",
    date: "2024/05/20",
    thumbnail: "https://example.com/image.jpg",
    contentType: "talk",
  },
  {
    title: "ZK Email: Novel ZK Applications Unlocked by Portable Provenance",
    where: "ZK Summit 11",
    url: "https://www.youtube.com/embed/rZTNzvLXB14?si=2NOAwXQYalqGYTGE",
    date: "2024/04/19",
    thumbnail: "https://img.youtube.com/vi/rZTNzvLXB14/0.jpg",
    contentType: "talk",
  },
  {
    title: "ZK Email: Email Wallet and Identity Attestations",
    where: "Proof Singularity Denver",
    url: "https://www.youtube.com/embed/GEWuGtsjATw?si=ApokIEW2h8KYYAYO",
    date: "2024/03/15",
    thumbnail: "https://img.youtube.com/vi/GEWuGtsjATw/0.jpg",
    contentType: "talk",
  },
  {
    title: "ZK Email: Email Wallets and Provenant Identity",
    where: "PROGCRYPTO",
    url: "https://www.youtube.com/embed/qUYBja0glio?si=MuVP2sgVo9y7egLd",
    date: "2024/01/26",
    thumbnail: "https://img.youtube.com/vi/qUYBja0glio/0.jpg",
    contentType: "talk",
  },
  {
    title: "Ethcon Korea ZK Email Mention",
    where: "Ethcon Korea",
    url: "https://www.youtube.com/embed/gsrtxq0xYxs?si=twKpt5bfFzmZVi21&amp;start=939",
    date: "2023/11/15",
    thumbnail: "https://img.youtube.com/vi/gsrtxq0xYxs/0.jpg",
    contentType: "talk",
  },
  {
    title: "Universal Recovery: A Social Recovery Solution Utilizes ZK Email",
    where: "Clave",
    url: "https://www.youtube.com/embed/iMAaHEYyuxA?si=aUdeSJ60Dv57TjQI",
    date: "2023/01/26",
    thumbnail: "https://img.youtube.com/vi/iMAaHEYyuxA/0.jpg",
    contentType: "talk",
  },
  {
    title: "ZK for web2 interop with zkLogin & ZK Email",
    where: "ZK Podcast",
    url: "https://www.youtube.com/embed/vFYUWRks7Kg?si=CDU7Ks4Bq5WgngAN",
    date: "2023/12/06",
    thumbnail: "https://img.youtube.com/vi/vFYUWRks7Kg/0.jpg",
    contentType: "talk",
  },
  {
    title: "Zuconnect 2023 ZK Day: ZK Email",
    where: "Zuconnect",
    url: "https://www.youtube.com/embed/3jCKdxQ9Pfw?si=Q4jVStBCmntXnOfO",
    date: "2023/12/03",
    thumbnail: "https://img.youtube.com/vi/3jCKdxQ9Pfw/0.jpg",
    contentType: "talk",
  },
  {
    title: "ZK Email: Decentralized ID Verification on Chain Without Servers",
    where: "Devcon",
    url: "https://www.youtube.com/embed/sPCHiUT3TmA?si=TiNLxkoj9n-0NbDl",
    date: "2022/11/16",
    thumbnail: "https://img.youtube.com/vi/sPCHiUT3TmA/0.jpg",
    contentType: "talk",
  },
];

function useWindowWidth() {
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowWidth;
}

const Resources = () => {
  const windowWidth = useWindowWidth();

  const isLargeScreen = windowWidth >= 1200;
  const isMediumScreen = windowWidth >= 960 && windowWidth < 1200;
  const isSmallScreen = windowWidth < 600;

  const carouselRef = useRef(null);

  const getVisibleCards = () => {
    if (isLargeScreen) return 4;
    if (isMediumScreen) return 3;
    return 1.25;
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
      <p className="subtitle1 text-center mb-[50px]">
        Know about us from our recent blogs, talks and documentations
      </p>

      {/* RESOURCE CAROSOLE */}
      <div
        className={`relative w-full ${
          isSmallScreen ? "h-[350px]" : "h-full"
        } px-2 md:px-8`}
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
                      <div
                        className="w-3 h-3 rotate-[-45deg]  border border-[#2962A5]"
                        style={{
                          backgroundColor:
                            RESOURCE_CONFIG[resource.contentType].color,
                          borderColor:
                            RESOURCE_CONFIG[resource.contentType]
                              .colorLight,
                        }}
                      ></div>
                      <p
                        className="pl-1 sm:pl-3 text-xs"
                        style={{
                          color:
                            RESOURCE_CONFIG[resource.contentType]
                              .colorLight,
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
                              RESOURCE_CONFIG[resource.contentType]
                                .colorLight,
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
          <CustomButton
            onClick={handlePrevious}
            label="Previous"
            icon={ChevronLeft}
            iconPosition="left"
            color="#1C1C1C"
            borderColor="#3B3B3B"
            disabled={currentIndex === 0}
          />
          <CustomButton
            onClick={handleNext}
            label="Next"
            icon={ChevronRight}
            iconPosition="right"
            color="#1C1C1C"
            borderColor="#3B3B3B"
            disabled={currentIndex >= resources.length - visibleCards}
          />
        </div>
      )}
    </div>
  );
};

export default Resources;
