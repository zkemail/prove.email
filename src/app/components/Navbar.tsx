"use client";

import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <nav className="navbar container-width navbar-desktop">
        <Link href="/">
          <img src={"/assets/Logo.svg"} alt="zkemail-logo" />
        </Link>
        <div style={{ display: "flex", gap: 24 }}>
          <p className="body1" style={{ display: "flex", gap: 4 }}>
            Features <img src={"/assets/CaretDown.svg"} alt="caret-down-icon" />
          </p>
          <Link href="/blogs">
            <p className="body1" style={{color: '#F5F3EF'}}>Blog</p>
          </Link>
          <Link href="https://zkemail.gitbook.io/zk-email" target="_blank">
            <p className="body1" style={{color: '#F5F3EF'}}>Documentation</p>
          </Link>
        </div>
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
