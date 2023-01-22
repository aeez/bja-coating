import { React, useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Navlink from "./Navlink";
import MobileNavbar from "./MobileNavbar";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className=" py-6">
      <div>
        <nav
          className="flex h-9 items-center justify-between "
          aria-label="Global"
        >
          <div className="flex lg:min-w-0 lg:flex-1" aria-label="Global">
            <img className="h-8" src="/bja.png" alt="" />
            <NavLink
              to="/"
              className="-m-1.5 ml-2 flex pt-2 text-xl font-bold "
            >
              BJA COATINGS
            </NavLink>
          </div>
          <div className="flex lg:hidden">
            {!mobileMenuOpen ? (
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-black"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>
            ) : (
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            )}
          </div>

          <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-end lg:gap-x-6">
            <Navlink />
          </div>
        </nav>
        <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <Dialog.Panel
            focus="true"
            className="px-auto fixed inset-0 z-10 ml-24 mt-16 h-60 w-60  rounded-lg bg-slate-100 py-2 lg:hidden"
          >
            <div className="flex items-center justify-between"></div>
            <div className="mt-6 flow-root">
              <div className="-my-6 ">
                <div className="space-y-2 py-3">
                  <MobileNavbar />
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </div>
    </div>
  );
}
