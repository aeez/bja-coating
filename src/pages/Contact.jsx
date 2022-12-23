import React from "react";
import Navbar from "../components/Navbar";

export default function Contact() {
  return (
    <>
      <Navbar />
      <div className="w-full max-w-lg">
        <h4 className="text-2xl">Our Contact</h4>
        <p className="text-lg leading-relaxed text-gray-400">
          The best, you are the best...
        </p>
      </div>
    </>
  );
}
