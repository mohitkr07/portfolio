"use client";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";

export default function Home() {
  const [theme, setTheme] = useState("light");
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    // Check user preference
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      document.documentElement.classList.remove("dark");
    }

    const handleLoad = () => {
      const sections = document.querySelectorAll("section[id]");
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(entry.target.id);
            }
          });
        },
        {
          threshold: 0.5,
          rootMargin: "0px 0px -30% 0px",
        }
      );

      sections.forEach((section) => observer.observe(section));

      return () => observer.disconnect(); // Disconnect safely
    };

    // Run after page load
    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      setTheme("light");
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    }
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        theme === "dark"
          ? "bg-gray-900 text-gray-100"
          : "bg-gray-50 text-gray-900"
      }`}
    >
      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
        activeSection={activeSection}
      />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
