import React from "react";
import Navbar from "../components/Navbar";

export default function Gallery() {
  return (
    <div className="bg-hero grid grid-cols-12">
      <section className="col-span-10 col-start-2">
        <Navbar />
      </section>
    </div>
  );
}
