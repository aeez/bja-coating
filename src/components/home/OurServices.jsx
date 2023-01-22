// import { NavLink } from "react-router-dom";
import React from "react";
import { Modal } from "flowbite-react";
import { useState } from "react";

import { ArrowRightCircleIcon } from "@heroicons/react/24/outline";

const ourServices = [
  {
    id: 1,
    name: "EPOXY FLOOR COATING",
    imageSrc: "/assets/icons/paint-brush-line.svg",
  },
  {
    id: 2,
    name: "DECORATIVE PAINTING",
    imageSrc: "/assets/icons/brush-2-line.svg",
  },
  {
    id: 3,
    name: "WATER PROOFING",
    imageSrc: "/assets/icons/contrast-drop-line.svg",
  },
];

const detailLayanan = [
  {
    id: 1,
    name: "EPOXY FLOOR COATING",
    imgSrc: ArrowRightCircleIcon,
  },
  {
    id: 2,
    name: "SAND BLASTING",
    imgSrc: ArrowRightCircleIcon,
  },
  {
    id: 3,
    name: "WATER PROOFING",
    imgSrc: ArrowRightCircleIcon,
  },
  {
    id: 4,
    name: "PEMASANGAN LANTAI UCRETE/ICRETE",
    imgSrc: ArrowRightCircleIcon,
  },
  {
    id: 5,
    name: "PEMASANGAN LANTAI PU",
    imgSrc: ArrowRightCircleIcon,
  },
  {
    id: 6,
    name: "EPOXY FLOOR WATERBASE",
    imgSrc: ArrowRightCircleIcon,
  },
  {
    id: 7,
    name: "EPOXY SELF LEVELING",
    imgSrc: ArrowRightCircleIcon,
  },
  {
    id: 8,
    name: "EPOXY MORTAD SCREED",
    imgSrc: ArrowRightCircleIcon,
  },
  {
    id: 9,
    name: "ACRYLIC",
    imgSrc: ArrowRightCircleIcon,
  },
  {
    id: 10,
    name: "DECORATIVE PAINTING",
    imgSrc: ArrowRightCircleIcon,
  },
  {
    id: 11,
    name: "MERINE COATING",
    imgSrc: ArrowRightCircleIcon,
  },
  {
    id: 12,
    name: "PROTECTIVE COATING",
    imgSrc: ArrowRightCircleIcon,
  },
  {
    id: 13,
    name: "TANK LINNING",
    imgSrc: ArrowRightCircleIcon,
  },
  {
    id: 14,
    name: "INDUSTRIAL PAINTING",
    imgSrc: ArrowRightCircleIcon,
  },
];

const OurServices = () => {
  const [onClick, setOnClick] = useState(false);

  return (
    <div className="my-16">
      <h1 className="text-center text-4xl font-bold">LAYANAN KAMI</h1>
      <div className="mx-auto mt-6 w-1/2 border-b-2 border-green-700/80 lg:w-1/6"></div>
      <div className="sm:py-15 mx-auto py-10 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <p className="mb-10 text-center text-lg font-medium uppercase text-gray-700">
          BJA COATING hadir menawarkan pelayanan kebutuhan pengecatan :
        </p>

        <div className="mx-auto grid w-72 grid-cols-1 gap-y-10 gap-x-6 sm:w-auto sm:grid-cols-1  lg:grid-cols-3 lg:px-10 xl:grid-cols-3 xl:gap-x-8">
          {ourServices.map((service) => (
            <div
              className="h-52 rounded-xl bg-slate-100 shadow-md"
              key={service.id}
            >
              <div className="mt-11 flex justify-center overflow-hidden ">
                <img src={service.imageSrc} />
              </div>
              <div className=" flex justify-center">
                <h3 className="mt-8 text-lg font-semibold text-gray-700">
                  {service.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-14 flex justify-center gap-x-4 sm:justify-center">
          <React.Fragment>
            <button
              className="rounded-lg bg-green-800 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-green-800 hover:bg-green-700 hover:ring-green-700"
              onClick={() => setOnClick(true)}
            >
              See More
              <span className="ml-1 text-green-200" aria-hidden="true">
                &rarr;
              </span>
            </button>
            <Modal
              dismissible={true}
              show={onClick}
              onClose={() => setOnClick(false)}
              className="lg:py-auto py-16"
            >
              <Modal.Header>
                <p className="text-xl font-bold text-green-900 sm:text-2xl sm:font-semibold">
                  Layanan Kami
                </p>
              </Modal.Header>
              <Modal.Body className="h-96 w-auto overflow-visible overflow-y-auto">
                <div className="space-y-6">
                  <div className="mx-auto my-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                    {detailLayanan.map((service) => (
                      <div key={service.id}>
                        <div className="justify-content-between  my-2 mx-7 flex h-20 w-4/5 items-center rounded-lg bg-gray-200  px-5 py-2">
                          <div className="">
                            <ArrowRightCircleIcon className="h-8 w-8 text-green-900" />
                          </div>
                          <div className="">
                            <div className="mx-3 text-green-900">
                              {service.name}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Modal.Body>
            </Modal>
          </React.Fragment>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
