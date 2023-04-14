import { NavLink } from "react-router-dom";

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();

    return (
        <div className="pt-16 pb-8">
            <div className="mx-auto max-w-7xl lg:flex lg:justify-between">
                <a href="" class="flex">
                    <img src="/bja.png" class="mr-3 h-8" alt="FlowBite Logo" />
                    <span class="text-2xl font-semibold ">BJA COATING</span>
                </a>
                <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                    <div className="">
                        <h2 class="mb-6 text-sm font-semibold uppercase text-gray-900 ">
                            Sitemap
                        </h2>
                        <ul class="text-gray-600 ">
                            <li class="mb-4">
                                <NavLink to="/" className="hover:underline">
                                    Home
                                </NavLink>
                            </li>
                            <li class="mb-4">
                                <NavLink
                                    to="/gallery"
                                    className="hover:underline"
                                >
                                    Gallery
                                </NavLink>
                            </li>
                            <li class="mb-4">
                                <NavLink
                                    to="/contact"
                                    className="hover:underline"
                                >
                                    Contact
                                </NavLink>
                            </li>
                            <li class="mb-4">
                                <NavLink
                                    to="/about"
                                    className="hover:underline"
                                >
                                    About
                                </NavLink>
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
                                    Jl. Sugeng Desa sei rotan, kecamatan percut
                                    sei tuan, kabupaten deli serdang, provinsi
                                    sumatera utara, 20371.
                                </p>
                            </li>
                            <li class="mb-2">
                                Tel Kantor :
                                <a
                                    href="tel: +62 822 7773 8899"
                                    className="hover:text-green-700"
                                >
                                    +62 822 7773 8899
                                </a>
                            </li>
                            <li class="mb-2">
                                No Wa :
                                <a
                                    href="https://api.whatsapp.com/send?phone=6281263449454"
                                    className="hover:text-green-700"
                                    target="__blank"
                                >
                                    +62 812 6344 9454
                                </a>
                            </li>
                            <li class="mb-4">
                                Email :
                                <a
                                    href="mailto:bjacoatings@gmail.com"
                                    className="hover:text-green-700"
                                    target="__blank"
                                >
                                    bjacoatings@gmail.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr class="my-6 border-gray-200 sm:mx-auto lg:my-8" />
            <div class="sm:flex sm:items-center sm:justify-between">
                <span class="text-sm text-gray-500  sm:text-center">
                    © {year} BJA COATINGS. All Rights Reserved.
                </span>
                <div class="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                    <a
                        href="https://www.instagram.com/bja.coatings/"
                        class="text-gray-500 hover:text-gray-900 "
                        target="__blank"
                    >
                        <svg
                            class="h-5 w-5"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                                clip-rule="evenodd"
                            />
                        </svg>
                    </a>
                    <a
                        href="https://api.whatsapp.com/send?phone=6285156913789"
                        class="text-gray-500 hover:text-gray-900 "
                        target="__blank"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            class="bi bi-whatsapp h-5 w-5"
                            viewBox="0 0 16 16"
                        >
                            <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                        </svg>
                    </a>
                    <a
                        href="mailto:bjacoatings@gmail.com"
                        class="text-gray-500 hover:text-gray-900 "
                        target="__blank"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="h-6 w-6"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                            />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Footer;
