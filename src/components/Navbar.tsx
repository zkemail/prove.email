import ZKEmailLogo from "../assets/Logo.svg";
import CaretDown from "../assets/CaretDown.svg";
import BreadCrumb from "../assets/BreadCrumb.svg";
import { useWindowWidth } from "../utils";

const Navbar = () => {
  const windowWidth = useWindowWidth();

  const isMobile = windowWidth < 600;

  if (isMobile) {
    return (
      <nav className="navbar">
        <img src={ZKEmailLogo} alt="zkemail-logo" />
        <img src={BreadCrumb} alt="BreadCrumb" />
      </nav>
    );
  }

  return (
    <nav className="navbar">
      <img src={ZKEmailLogo} alt="zkemail-logo" />
      <div style={{ display: "flex", gap: 24 }}>
        <p className="b1" style={{ display: "flex", gap: 4 }}>
          Features <img src={CaretDown} />
        </p>
        <p className="b1">Blog</p>
        <p className="b1">Documentation</p>
      </div>
    </nav>
  );
};

export default Navbar;
