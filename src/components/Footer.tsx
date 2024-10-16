import FooterLogo from "../assets/FooterLogo.svg";
import XLogo from "../assets/XLogo.svg";
import YoutubeLogo from "../assets/YoutubeLogo.svg";
import TelegramLogo from "../assets/TelegramLogo.svg";
import GithubLogo from "../assets/GithubLogo.svg";

const Footer = () => {
  return (
    <>
      <div
        className="flex flex-col sm:flex-row justify-between px-12 py-4 items-center "
        style={{ borderTop: "1px solid var(--Grey-800, #3B3B3B)" }}
      >
        {/* LEFT SIDE FOOTER */}
        <div className="flex items-center">
          <img draggable="false" src={FooterLogo} alt="ZK Email Footer Logo" />
        </div>

        {/* RIGHT SIDE FOOTER */}
        <div className="flex flex-row justify-between">
          <div className="flex flex-col gap-3">
            <h4 className="bold">Developers</h4>
            <a href="/" className="text-[#A8A8A8] font-400">
              Docs
            </a>
            <a href="/" className="text-[#A8A8A8] font-400">
              Projects
            </a>
          </div>

          <div className="flex flex-col gap-3  ml-4">
            <h4 className="bold">Developers</h4>
            <a href="/" className="text-[#A8A8A8] font-400">
              Blogs
            </a>
            <a href="/" className="text-[#A8A8A8] font-400 whitespace-nowrap">
              Learn More
            </a>
            <a href="/" className="text-[#A8A8A8] font-400">
              Partner
            </a>
          </div>

          <div className="flex flex-row gap-3 ml-4">
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
