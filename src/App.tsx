import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router";
import MenuBar from "./components/MenuBar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import ContactMe from "./components/ContactMe";
import Theme from "./components/Theme";

const MainLayout: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    const id = location.pathname === "/" ? "home" : location.pathname.slice(1);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [location]);

  return (
    <div className="flex flex-col gap-20 lg:gap-0">
      <Theme/>
      <MenuBar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <ContactMe />
    </div>
  );
};

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<MainLayout />} />
      </Routes>
    </BrowserRouter>
  );
}