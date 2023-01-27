import React, { useState } from "react";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
import Info from "../Components/Info";
import { homeObjOne, homeObjThree, homeObjTwo } from "../Components/Info/Data";
import Navbar from "../Components/Navbar";
import Services from "../Components/Services";
import Sidebar from "../Components/Sidebar";

function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <div>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar  toggle={toggle} />
      <Hero />
      <Info {...homeObjOne} />
      <Info {...homeObjTwo} />
      <Services />
      <Info {...homeObjThree} />
      <Footer />
    </div>
  );
}

export default Home;
