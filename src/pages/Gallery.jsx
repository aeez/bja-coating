import React from "react";
import Card from "../components/gallery/Card";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Gallery() {
  return (
    <>
      <div className=" grid grid-cols-12">
        <section className="col-span-10 col-start-2">
          <Navbar />
          <Card />
          <Footer />
        </section>
      </div>
    </>
  );
}
