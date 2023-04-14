import React from "react";
import Navbar from "../components/nav/Navbar";
import Footer from "../components/nav/Footer";
import SectionContact from "../components/contact/SectionContact";

export default function Contact() {
  return (
    <>
      <div className=" grid grid-cols-12">
        <section className="col-span-10 col-start-2">
          <Navbar />
          <SectionContact />
          <Footer />
        </section>
      </div>
    </>
  );
}
