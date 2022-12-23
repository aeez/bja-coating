import { NavLink } from "react-router-dom";

const OurServices = () => {
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
  return (
    <div className="my-16">
      <h1 className="text-center text-4xl font-bold">Layanan Kami</h1>

      <div className="bg-white">
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
            {ourServices.map((service) => (
              <div
                className=" h-40 rounded-md bg-slate-100 shadow-sm"
                key={service.id}
              >
                <div className=" mt-5 flex justify-center overflow-hidden ">
                  <img src={service.imageSrc} />
                </div>
                <div className=" flex justify-center">
                  <h3 className="mt-2 text-sm text-gray-700">{service.name}</h3>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-5  flex h-9  w-36 justify-center rounded-md bg-blue-400">
            <NavLink
              to={"/gallery"}
              className="flex items-center justify-center text-lg text-white"
            >
              See More {">>"}
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
