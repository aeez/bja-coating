import React from "react";
import { ModalBox } from "../../lib/ModalBox";

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

const OurServices = () => {
    return (
        <div className="my-16">
            <h1 className="text-center text-4xl font-bold">LAYANAN KAMI</h1>
            <div className="mx-auto mt-6 w-1/2 border-b-2 border-green-700/80 lg:w-1/6"></div>
            <div className="sm:py-15 mx-auto py-10 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                <p className="mb-10 text-center text-lg font-medium uppercase text-gray-700">
                    BJA COATING hadir menawarkan pelayanan kebutuhan pengecatan
                    :
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
                <div className="">
                    <React.Fragment>
                        <ModalBox />
                    </React.Fragment>
                </div>
            </div>
        </div>
    );
};

export default OurServices;
