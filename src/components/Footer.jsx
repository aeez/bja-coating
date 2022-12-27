import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="pb-6">
      <div className="mx-auto max-w-7xl lg:flex lg:justify-between">
        <a href="" class="flex">
          <img src="./public/bja.png" class="mr-3 h-8" alt="FlowBite Logo" />
          <span class="text-2xl font-semibold ">BJA COATING</span>
        </a>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div className="">
            <h2 class="mb-6 text-sm font-semibold uppercase text-gray-900 ">
              Sitemap
            </h2>
            <ul class="text-gray-600 ">
              <li class="mb-4">
                <a href="" class="hover:underline">
                  Home
                </a>
              </li>
              <li class="mb-4">
                <a href="" class="hover:underline">
                  Gallery
                </a>
              </li>
              <li class="mb-4">
                <a href="https://flowbite.com/" class="hover:underline">
                  Contact
                </a>
              </li>
              <li>
                <a href="https://tailwindcss.com/" class="hover:underline">
                  About
                </a>
              </li>
            </ul>
          </div>
          <div className="ml-24 w-56">
            <h2 class="mb-6 text-sm font-semibold uppercase text-gray-900 ">
              Lokasi
            </h2>
            <ul class="text-gray-600 ">
              <li class="mb-2">
                <p>
                  Jl. Sugeng Komplek Sei Rotan Sakinah No.8 Blok C, Kec. Percut
                  Sei Tuan, Kab. Deli Serdang, Sumatera Utara, 20371
                </p>
              </li>
              <li class="mb-2">
                <p>Tel: +62 xxx xxxx xxxx</p>
              </li>
              <li class="mb-4">
                <p>Email: user@email.com</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* <div className="bg-white">
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
            <div className=" flex  justify-start">
              <img src="/public/bja.png" alt="" className=" h-10 w-10" />
              <h2 className="mx-3  flex justify-between">BJA COATINGS</h2>
            </div>
            <div className="">
              <h2>Sitemap</h2>
              <NavLink to={"/"} className="block">
                Home
              </NavLink>
              <NavLink to={"/gallery"} className="block">
                Gallery
              </NavLink>
              <NavLink to={"/contact"} className="block">
                Contact
              </NavLink>
              <NavLink to={"/about"} className="block">
                About
              </NavLink>
            </div>
            <div className="">
              <h3>Lokasi</h3>
              <p>
                Jl. Sugeng Komplek Sei Rotan Sakinah No.8 Blok C, Kec. Percut
                Sei Tuan, Kab. Deli Serdang, Sumatera Utara, 20371
              </p>
              <p>Tel: +62 xxx xxxx xxxx</p>
              <p>Email: user@email.com</p>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Footer;
