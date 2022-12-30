import React from "react";
import Navbar from "../components/Navbar";

import Footer from "../components/Footer";
import SectionAbout from "../components/about/sectionAbout";
export default function About() {
  return (
    <>
      <div className=" grid grid-cols-12">
        <section className="col-span-10 col-start-2">
          <Navbar />
          <SectionAbout />
          <Footer />
        </section>
      </div>
    </>
  );
}
