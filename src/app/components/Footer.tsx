import Link from "next/link";

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
            src={"/assets/FooterLogo1.png"}
            alt="ZK Email Footer Logo"
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
            <Link href="/" className="subtitle2">
              Docs
            </Link>
            <Link href="/" className="subtitle2">
              Projects
            </Link>
          </div>

          <div className="flex flex-col gap-3">
            <p
              className="subtitle2 font-semibold leading-4"
              style={{ color: "white" }}
            >
              Community
            </p>
            <Link href="/" className="subtitle2">
              Blogs
            </Link>
            <Link href="/" className="subtitle2">
              Learn More
            </Link>
            <Link href="/" className="subtitle2">
              Partner
            </Link>
          </div>

          <div className="flex flex-row gap-3">
            <Link href="/https://x.com/zkemail?lang=en" target="_blank">
              <img src={"/assets/XLogo.svg"} alt="twitter-logo" />
            </Link>
            <Link href="https://t.me/zkemail" target="_blank">
              <img src={"/assets/YoutubeLogo.svg"} alt="youtube-logo" />
            </Link>
            <Link href="https://t.me/zkemail" target="_blank">
              <img src={"/assets/TelegramLogo.svg"} alt="telegram-logo" />
            </Link>
            <Link href="https://github.com/zkemail" target="_blank">
              <img src={"/assets/GithubLogo.svg"} alt="telegram-logo" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
