"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Footer = () => {
  const [hoveredImages, setHoveredImages] = useState({
    XLogo: false,
    YoutubeLogo: false,
    TelegramLogo: false,
    GithubLogo: false,
  });

  const handleMouseEnter = (
    image: "XLogo" | "YoutubeLogo" | "TelegramLogo" | "GithubLogo"
  ) => {
    setHoveredImages((prev) => ({ ...prev, [image]: true }));
  };

  const handleMouseLeave = (
    image: "XLogo" | "YoutubeLogo" | "TelegramLogo" | "GithubLogo"
  ) => {
    setHoveredImages((prev) => ({ ...prev, [image]: false }));
  };

  return (
    <>
      <div
        className="flex flex-col sm:flex-row justify-between py-4 items-center"
        style={{ borderTop: "1px solid var(--Grey-800, #3B3B3B)" }}
      >
        <div>
          <Image
            className=" lg:w-2/4 w-full"
            src={"/assets/FooterLogo1.png"}
            alt="ZK Email Footer Logo"
            width={1800}
            height={1400}
            layout="responsive"
          />
        </div>
        <div className="flex flex-row justify-between w-full lg:w-[440px] px-5 pb-10 lg:p-0 lg:mr-12">
          <div className="flex flex-col gap-3">
            <p
              className="subtitle2 font-semibold leading-4"
              style={{ color: "white" }}
            >
              Developers
            </p>
            <Link
              href="https://zkemail.gitbook.io/zk-email"
              target="_blank"
              className="subtitle2"
            >
              Docs
            </Link>
            <Link href="/projects" className="subtitle2">
              Projects
            </Link>
            <Link href="/changelogs" className="subtitle2">
              Changelogs
            </Link>
          </div>

          <div className="flex flex-col gap-3">
            <p
              className="subtitle2 font-semibold leading-4"
              style={{ color: "white" }}
            >
              Community
            </p>
            <Link href="/blogs" className="subtitle2">
              Blogs
            </Link>
            {/* <Link href="/learn" className="subtitle2">
              Learn More
            </Link> */}
            <Link
              href="https://t.me/zkemail"
              target="_blank"
              className="subtitle2"
            >
              Partner
            </Link>
            <Link href="/privacy-policy" className="subtitle2">
              Privacy Policy
            </Link>
            <Link
              href="https://archive.prove.email/privacy-policy"
              className="subtitle2"
              target="_blank"
            >
              Archive Policy
            </Link>
          </div>

          <div className="flex flex-row gap-3">
            <Link href="https://x.com/zkemail?lang=en" target="_blank">
              <Image
                onMouseEnter={() => handleMouseEnter("XLogo")}
                onMouseLeave={() => handleMouseLeave("XLogo")}
                src={
                  hoveredImages["XLogo"]
                    ? "/assets/XLogoFilled.svg"
                    : "/assets/XLogo.svg"
                }
                alt="twitter-logo"
                layout="responsive"
                height={20}
                width={20}
              />
            </Link>
            <Link href="https://www.youtube.com/@sigsing" target="_blank">
              <Image
                onMouseEnter={() => handleMouseEnter("YoutubeLogo")}
                onMouseLeave={() => handleMouseLeave("YoutubeLogo")}
                src={
                  hoveredImages["YoutubeLogo"]
                    ? "/assets/YoutubeLogoFilled.svg"
                    : "/assets/YoutubeLogo.svg"
                }
                alt="youtube-logo"
                layout="responsive"
                height={20}
                width={20}
              />
            </Link>
            <Link href="https://t.me/zkemail" target="_blank">
              <Image
                onMouseEnter={() => handleMouseEnter("TelegramLogo")}
                onMouseLeave={() => handleMouseLeave("TelegramLogo")}
                src={
                  hoveredImages["TelegramLogo"]
                    ? "/assets/TelegramLogoFilled.svg"
                    : "/assets/TelegramLogo.svg"
                }
                alt="telegram-logo"
                layout="responsive"
                height={20}
                width={20}
              />
            </Link>
            <Link href="https://github.com/zkemail" target="_blank">
              <Image
                onMouseEnter={() => handleMouseEnter("GithubLogo")}
                onMouseLeave={() => handleMouseLeave("GithubLogo")}
                src={
                  hoveredImages["GithubLogo"]
                    ? "/assets/GithubLogoFilled.svg"
                    : "/assets/GithubLogo.svg"
                }
                alt="github-logo"
                layout="responsive"
                height={20}
                width={20}
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
