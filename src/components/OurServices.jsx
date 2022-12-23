import { NavLink } from "react-router-dom";

const ourServices = [
  {
    id: 1,
    name: "EPOXY FLOOR COATING",
    imageSrc: "./src/assets/icons/painting.svg",
  },
  {
    id: 2,
    name: "PAINTING",
    imageSrc: "./src/assets/icons/painting.svg",
  },
  {
    id: 3,
    name: "SANDBLASTING",
    imageSrc: "./src/assets/icons/sandblasting.svg",
  },
];

const OurServices = () => {
  return (
    <div className="my-16">
      <h1 className="text-center text-4xl font-bold">LAYANAN KAMI</h1>
      <div className="mx-auto mt-6 w-1/2 border-b-2 border-green-700/80 lg:w-1/6"></div>
      <div className="bg-white">
        <div className="sm:py-15 mx-auto max-w-2xl py-10 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <p className="mb-10 text-center text-lg font-medium uppercase text-gray-700">
            BJA COATING hadir menawarkan pelayanan kebutuhan pengecatan :
          </p>

          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 lg:px-10 xl:grid-cols-3 xl:gap-x-8">
            {ourServices.map((service) => (
              <div
                className="h-52 rounded-xl bg-slate-100 shadow-md"
                key={service.id}
              >
                <div className="mt-10 flex justify-center overflow-hidden ">
                  <img src={service.imageSrc} />
                </div>
                <div className=" flex justify-center">
                  <h3 className="mt-10 text-lg font-semibold text-gray-700">
                    {service.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-14 flex gap-x-4 sm:justify-center">
            <a
              href="#"
              className="inline-block rounded-lg bg-green-800 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-green-800 hover:bg-green-700 hover:ring-green-700"
            >
              See More
              <span className="ml-1 text-green-200" aria-hidden="true">
                &rarr;
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
