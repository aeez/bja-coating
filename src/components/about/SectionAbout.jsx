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
      <img src="/bja.png" alt="" className="4-20 mx-auto mt-8 flex h-40" />
      <p className="sm:text-md mt-8 text-center text-xs md:text-sm lg:text-base">
        BJA coatings didirikan pada tahun 2009. BJA coatings merupakan salah
        satu kontraktor maupun supplier untuk segala jenis cat, terkhusus cat
        epoxy lantai, baja dan kapal. BJA coatings memberikan jaminan kualitas
        dan harga yang relatif lebih murah dari kompetitor lainnya.
      </p>
      <p className="sm:text-md  mt-16 text-xs md:text-sm  lg:text-base">
        BJA EPOXY dapat diaplikasikan untuk kebutuhan pada :
      </p>
      {Epoxy.map((epoxy) => (
        <div className="" key={epoxy.id}>
          <p className="sm:text-md py-3 text-xs md:text-sm lg:text-base">
            {epoxy.id}. {epoxy.name} : {epoxy.explained}
          </p>
        </div>
      ))}
      <p className="sm:text-md  mt-10 text-xs md:text-sm  lg:text-base"> </p>
      Kami telah dipercayai oleh :
      {diPercaya.map((dpr) => (
        <div
          className="my-6 flex items-center justify-center rounded-md bg-green-800 "
          key={dpr.id}
        >
          <p className="text-center text-sm font-semibold text-white sm:text-lg md:text-lg">
            {dpr.perusahaan} - {dpr.kota}
          </p>
        </div>
      ))}
    </div>
  );
};

export default SectionAbout;
