import React from "react";
import Navbar from "../components/Navbar";

export default function Gallery() {
  return (
    <>
      <div className=" grid grid-cols-12 text-white shadow-xl">
        <section className="navbar col-span-10 col-start-2">
          <Navbar />

          {/* Gallery */}
        </section>
      </div>
    </>
  );
}
