import ZKEmailLogo from "../assets/Logo.svg";
import CaretDown from "../assets/CaretDown.svg";

const Navbar = () => {
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
