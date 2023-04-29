import { Modal } from "flowbite-react";
import { useState } from "react";
import { ArrowRightCircleIcon } from "@heroicons/react/24/outline";

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

export const ModalBox = () => {
    const [onClick, setOnClick] = useState(false);

    return (
        <div className="mt-14 flex justify-center gap-x-4 sm:justify-center">
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
                className="h-screen "
            >
                <Modal.Header>
                    <p className="text-xl font-bold text-green-900 sm:text-2xl sm:font-semibold">
                        Layanan Kami
                    </p>
                </Modal.Header>
                <Modal.Body className="max-h-90 w-auto overflow-y-auto lg:max-h-80 lg:w-full">
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
        </div>
    );
};
