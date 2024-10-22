import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import Navbar from "./components/Navbar.tsx";
import Footer from "./components/Footer.tsx";
import Home from "./pages/Home.tsx";
import Changelogs from "./pages/Changelogs.tsx";
import BlogsContent from "./pages/BlogsContent.tsx";
import { Route, Router, Routes } from "react-router-dom";
import BlogPost from "./pages/BlogsContent.tsx";
import Blogs from "./pages/Blogs.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Navbar />
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:slug" element={<BlogPost />} /> */}
      </Routes>
    </Router>

    {/* <Home /> */}
    {/* <Blogs /> */}
    <BlogsContent />
    {/* <Changelogs /> */}
    <Footer />
  </StrictMode>
);
