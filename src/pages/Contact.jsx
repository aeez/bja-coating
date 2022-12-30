import React from "react";
import Footer from "../components/Footer";
import SectionContact from "../components/contact/SectionContact";
import Navbar from "../components/Navbar";

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
