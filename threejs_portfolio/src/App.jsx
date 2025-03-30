import React from "react";
import Navbar from "./sections/navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Project from "./sections/Project";
import Clients from "./sections/Clients";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Experience from "./sections/Experience";

const App = () => {
  return (
    <main className="max-w-7xl mx-auto">
      <h1 className="text-2xl text-white underline">
        {" "}
        <Navbar />
        <Hero />
        <About />
        <Project />
        <Clients />
        <Experience/>
        <Contact />
        <Footer />
      </h1>
    </main>
  );
};

export default App;
