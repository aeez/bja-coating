import React from "react";
import { NavLink } from "react-router-dom";

export default function HeroSection() {
  return (
    <>
      <main>
        <div className="relative">
          <div className="mx-auto max-w-3xl pt-7 pb-32 sm:pt-28 sm:pb-64">
            <div>
              <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                <div className="relative -mb-3 overflow-hidden rounded-full py-1.5 px-4 text-sm leading-6 ring-2 ring-green-700">
                  <span className="head-subtitle">
                    Supplier and Professional Epoxy Project.
                  </span>
                </div>
              </div>
              <div>
                <h1 className="text-6xl font-bold tracking-tight sm:text-center sm:text-7xl">
                  BERKAH JAYA ABADI COATINGS
                </h1>
                <p className="mt-6 text-2xl leading-8 sm:text-center">
                  JASA PENGECATAN EPOXY LANTAI PROFESIONAL
                </p>
                <div className="mt-8 flex gap-x-4 sm:justify-center">
                  <NavLink
                    to={"/gallery"}
                    className="inline-block rounded-lg bg-green-800 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-green-800 hover:bg-green-700 hover:ring-green-700"
                  >
                    Our Portfolio
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
