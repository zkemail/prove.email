import { Component } from "react";
import Navbar from "./Navbar";

export default {
    title: "Navbar",
    component: Navbar,
}


export const NavbarTest = (args) => <Navbar {...args} />
NavbarTest.args = {
    title: 'ZK Email',
    pages: [
      { label: 'Projects', link: '/projects' },
      { label: 'Docs', link: '/docs' },
      { label: 'Blog', link: '/posts' },
      { label: 'Learn', link: '/learn' }
    ],
  };
  