import FooterLogo from "../assets/FooterLogo1.png";
import XLogo from "../assets/XLogo.svg";
import YoutubeLogo from "../assets/YoutubeLogo.svg";
import TelegramLogo from "../assets/TelegramLogo.svg";
import GithubLogo from "../assets/GithubLogo.svg";

const Footer = () => {
  return (
    <>
      <div
        className="flex flex-col sm:flex-row justify-between py-4 items-center"
        style={{ borderTop: "1px solid var(--Grey-800, #3B3B3B)" }}
      >
        <div>
          <img
            className=" lg:w-2/4 w-full"
            src={FooterLogo}
            alt="ZK Email Footer Logo"
          />
        </div>
        <div className="flex flex-row justify-between w-full lg:w-96 px-5 pb-10 lg:p-0 lg:pr-12">
          <div className="flex flex-col gap-3">
            <p
              className="subtitle2 font-semibold leading-4"
              style={{ color: "white" }}
            >
              Developers
            </p>
            <a href="/" className="subtitle2">
              Docs
            </a>
            <a href="/" className="subtitle2">
              Projects
            </a>
          </div>

          <div className="flex flex-col gap-3">
            <p
              className="subtitle2 font-semibold leading-4"
              style={{ color: "white" }}
            >
              Developers
            </p>
            <a href="/" className="subtitle2">
              Blogs
            </a>
            <a href="/" className="subtitle2">
              Learn More
            </a>
            <a href="/" className="subtitle2">
              Partner
            </a>
          </div>

          <div className="flex flex-row gap-3">
            <a href="/https://x.com/zkemail?lang=en" target="_blank">
              <img src={XLogo} alt="twitter-logo" />
            </a>
            <a href="https://t.me/zkemail" target="_blank">
              <img src={YoutubeLogo} alt="youtube-logo" />
            </a>
            <a href="https://t.me/zkemail" target="_blank">
              <img src={TelegramLogo} alt="telegram-logo" />
            </a>
            <a href="https://github.com/zkemail" target="_blank">
              <img src={GithubLogo} alt="telegram-logo" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
