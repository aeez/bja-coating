import { CheckCircleIcon } from "@heroicons/react/24/solid";

const SectionAbout = () => {
  const Epoxy = [
    {
      id: "1",
      name: "Product Plan",
      explained: "Lantai Pabrik.",
    },
    {
      id: "2",
      name: "Pabrik Makanan Dan Herbal",
      explained:
        "Lantai Ruang Produksi yang memenuhi standart Food Grade dan Eco Green.",
    },
    {
      id: "3",
      name: "Pabrik Farmasi",
      explained:
        "Area produksi, Lab, Gudang, Tangki, Perpipaan, Ruangan Limbah dengan spesifikasi tahan chemical.",
    },
    {
      id: "4",
      name: "Rumah Tinggal",
      explained:
        "Garasi, Lantai Rumah dengan motif 3 Dimensi, Kolam renang, Waterproofing Lantai Atas.",
    },
    {
      id: "5",
      name: "Sarana Pendidikan",
      explained: "Lapangan Olahraga, Parkiran, Lantai Kelas, Laboratorium.",
    },
    {
      id: "6",
      name: "Industri Galangan Kapal",
      explained:
        "Lantai Kapal, Lambung Kapal (dapat dilakukan dengan sistem bawah air), Dinding Kapal, Perpipaan, Tangki.",
    },
    {
      id: "7",
      name: "Rumah Sakit",
      explained:
        "Parkiran, Ruangan Operasi, Ruangan Lab, Ruangan Tunggu Pasien, Tangki, Perpipaan.",
    },
    {
      id: "8",
      name: "Restoran",
      explained:
        "Lantai Dapur Dan Lantai Ruang Makan yang memenuhi standart food grade.",
    },
    {
      id: "9",
      name: "PLTU",
      explained: "Parkiran, Perpipaan, Cerobong Asap, Lantai Ruang Mesin.",
    },
    {
      id: "10",
      name: "Bandara",
      explained: "Hangar Pesawat, Landasan Pacu Pesawat, Dan lainnya.",
    },
    {
      id: "11",
      name: "Industri Otomotif",
      explained: "Lantai Produksi, Gudang, Area Service, Lantai Showroom.",
    },
  ];

  const diPercaya = [
    {
      id: "1",
      perusahaan: "PT. SPA",
      kota: "Deli Serdang",
    },
    {
      id: "2",
      perusahaan: "PT. Cemerlang Samudera Kontrindo",
      kota: "Medan",
    },
    {
      id: "3",
      perusahaan: "PT. Ceppa Indonesia",
      kota: "Medan",
    },
    {
      id: "4",
      perusahaan: "PT. Cipta Bumi Selaras",
      kota: "Bengkulu",
    },
    {
      id: "5",
      perusahaan: "PT. Prima Coco Indonesia",
      kota: "Kuala Begumit",
    },
    {
      id: "6",
      perusahaan: "PT. Andika Pratama Jaya Abadi",
      kota: "Deli Serdang",
    },
    {
      id: "7",
      perusahaan: "PT. Tri Putra Yusindo",
      kota: "Medan",
    },
    {
      id: "8",
      perusahaan: "PT. Galung Efendo Sejati",
      kota: "Deli Serdang",
    },
    {
      id: "9",
      perusahaan: "Yayasan Pesantren Raudhatul Hasanah",
      kota: "Deli Serdang",
    },
  ];

  return (
    <div className="container mt-12">
      <h1 className="flex justify-center text-4xl font-bold uppercase">
        Tentang Kami
      </h1>
      <div className="mx-auto mt-6 w-1/2 border-b-2 border-green-700/80 lg:w-1/6"></div>
      <img
        src="/bja.png"
        alt=""
        className="mx-auto mt-8 flex h-36 sm:h-36 md:h-36 lg:h-40 "
      />
      <div className="px-0 sm:px-0 md:px-0 lg:px-20">
        <p className="mt-10 text-center text-base font-semibold sm:text-base md:text-base lg:text-lg">
          BJA coatings didirikan pada tahun 2009. BJA coatings merupakan salah
          satu kontraktor maupun supplier untuk segala jenis cat, terkhusus cat
          epoxy lantai, baja dan kapal. BJA coatings memberikan jaminan kualitas
          dan harga yang relatif lebih murah dari kompetitor lainnya.
        </p>
      </div>
      <p className="mt-16  text-center font-bold  sm:text-lg md:text-lg lg:text-2xl">
        BJA EPOXY dapat diaplikasikan untuk kebutuhan pada :
      </p>
      <div className="mt-5">
        {Epoxy.map((epoxy) => (
          <div className="flex items-center pt-2 lg:px-20" key={epoxy.id}>
            <div className="mr-3 text-green-800 sm:h-5 sm:w-5 md:h-7 md:w-7 lg:h-7 lg:w-7">
              <CheckCircleIcon />
            </div>
            <div className="sm:text-md md:text-sm lg:text-base">
              <p>
                <span className="font-semibold">{epoxy.name}</span> :{" "}
                {epoxy.explained}
              </p>
            </div>
          </div>
        ))}
      </div>
      <p className="mt-14 text-center text-lg  font-bold ">
        Kami telah dipercayai oleh:
      </p>
      <div className="mt-5 grid grid-cols-1 gap-y-6 gap-x-6 sm:grid-cols-1 sm:gap-y-8 md:grid-cols-3 lg:mt-10 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
        {diPercaya.map((dpr) => (
          <div
            className="box-mitra mx-10 flex h-24 items-center justify-center rounded-md bg-green-800 py-3 px-3 sm:mx-0 sm:h-28"
            key={dpr.id}
          >
            <div className="">
              <div className="mb-1 flex justify-center">
                <p className="text-center text-sm font-semibold text-white sm:text-lg md:text-lg">
                  {dpr.perusahaan}
                </p>
              </div>
              <div className="flex justify-center">
                <p className="sm:text-md text-center text-xs text-gray-100 md:text-sm lg:text-base">
                  {dpr.kota}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionAbout;
