import { Component } from "react";
import Header from "../components/Header";

export default {
    title: "Header",
    component: Header,
}


export const HeaderTest = (args) => <Header {...args} />
HeaderTest.args = {
    title: 'ZK Email',
    pages: [
      { label: 'Projects', link: '/projects' },
      { label: 'Docs', link: '/docs' },
      { label: 'Blog', link: '/posts' },
      { label: 'Learn', link: '/learn' }
    ],
  };
  